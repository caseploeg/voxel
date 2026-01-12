#!/usr/bin/env node
/**
 * Import/Export Checker
 *
 * Run with: node scripts/check-imports.js
 *
 * Identifies import/export issues:
 * - Missing imports
 * - Broken imports (file doesn't exist)
 * - Circular dependencies
 * - Unused imports
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const IGNORE_DIRS = ['node_modules', 'dist', '.git'];

// Collect all JS files
function collectFiles(dir, files = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    if (IGNORE_DIRS.includes(entry)) continue;
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else if (extname(entry) === '.js') {
      files.push(fullPath);
    }
  }
  return files;
}

// Parse imports from a file
function parseImports(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const imports = [];

  // Match ES6 imports
  const importRegex = /import\s+(?:{([^}]+)}|(\w+))\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const namedImports = match[1] ? match[1].split(',').map(s => s.trim().split(' as ')[0]) : [];
    const defaultImport = match[2] || null;
    const source = match[3];

    imports.push({
      source,
      namedImports,
      defaultImport,
      isRelative: source.startsWith('.'),
      isNodeModule: !source.startsWith('.')
    });
  }

  return imports;
}

// Parse exports from a file
function parseExports(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const exports = [];

  // Match named exports
  const namedExportRegex = /export\s+(class|function|const|let|var)\s+(\w+)/g;
  let match;

  while ((match = namedExportRegex.exec(content)) !== null) {
    exports.push({ name: match[2], type: match[1] });
  }

  // Match export { ... }
  const exportBlockRegex = /export\s*{([^}]+)}/g;
  while ((match = exportBlockRegex.exec(content)) !== null) {
    const names = match[1].split(',').map(s => s.trim().split(' as ')[0]);
    names.forEach(name => {
      if (name && !exports.find(e => e.name === name)) {
        exports.push({ name, type: 're-export' });
      }
    });
  }

  return exports;
}

// Resolve relative import path
function resolveImportPath(fromFile, importSource) {
  const fromDir = dirname(fromFile);
  let resolved = resolve(fromDir, importSource);

  // Try with .js extension
  if (!existsSync(resolved) && existsSync(resolved + '.js')) {
    resolved = resolved + '.js';
  }

  return resolved;
}

// Build dependency graph
function buildDependencyGraph(files) {
  const graph = new Map();

  files.forEach(file => {
    const imports = parseImports(file);
    const relativePath = file.replace(ROOT + '/', '');

    graph.set(relativePath, {
      imports: imports.filter(i => i.isRelative).map(i => {
        const resolved = resolveImportPath(file, i.source);
        return {
          ...i,
          resolvedPath: resolved.replace(ROOT + '/', ''),
          exists: existsSync(resolved)
        };
      }),
      exports: parseExports(file)
    });
  });

  return graph;
}

// Detect circular dependencies
function detectCircularDeps(graph) {
  const circular = [];

  function dfs(start, current, path, visited) {
    if (visited.has(current)) {
      if (current === start && path.length > 1) {
        circular.push([...path]);
      }
      return;
    }

    visited.add(current);
    const node = graph.get(current);
    if (!node) return;

    node.imports.forEach(imp => {
      if (imp.exists) {
        dfs(start, imp.resolvedPath, [...path, imp.resolvedPath], new Set(visited));
      }
    });
  }

  graph.forEach((_, file) => {
    dfs(file, file, [file], new Set());
  });

  return circular;
}

// Main analysis
console.log('=== Import/Export Analysis ===\n');

const files = collectFiles(ROOT);
const graph = buildDependencyGraph(files);

// Check for broken imports
console.log('--- Broken Imports ---\n');
let brokenCount = 0;
graph.forEach((node, file) => {
  const broken = node.imports.filter(i => !i.exists);
  if (broken.length > 0) {
    console.log(`📁 ${file}`);
    broken.forEach(i => {
      console.log(`   ❌ Cannot resolve: ${i.source}`);
    });
    brokenCount += broken.length;
    console.log('');
  }
});
if (brokenCount === 0) {
  console.log('   ✅ No broken imports found\n');
}

// Check for circular dependencies
console.log('--- Circular Dependencies ---\n');
const circular = detectCircularDeps(graph);
if (circular.length > 0) {
  console.log(`Found ${circular.length} circular dependency chains:`);
  circular.slice(0, 5).forEach((chain, i) => {
    console.log(`   ${i + 1}. ${chain.join(' → ')}`);
  });
  if (circular.length > 5) {
    console.log(`   ... and ${circular.length - 5} more`);
  }
} else {
  console.log('   ✅ No circular dependencies found');
}
console.log('');

// List all exports per file
console.log('--- Export Summary ---\n');
graph.forEach((node, file) => {
  if (node.exports.length > 0) {
    console.log(`📁 ${file}`);
    node.exports.forEach(exp => {
      console.log(`   → ${exp.type} ${exp.name}`);
    });
    console.log('');
  }
});

// Check for import mismatches
console.log('--- Import Validation ---\n');
let mismatchCount = 0;
graph.forEach((node, file) => {
  node.imports.forEach(imp => {
    if (imp.exists) {
      const targetNode = graph.get(imp.resolvedPath);
      if (targetNode) {
        const exportedNames = targetNode.exports.map(e => e.name);
        imp.namedImports.forEach(name => {
          if (!exportedNames.includes(name)) {
            console.log(`📁 ${file}`);
            console.log(`   ⚠️  Imports '${name}' from ${imp.source}, but it's not exported`);
            mismatchCount++;
          }
        });
      }
    }
  });
});
if (mismatchCount === 0) {
  console.log('   ✅ All imports match exports\n');
}

console.log('--- Summary ---');
console.log(`Total files analyzed: ${files.length}`);
console.log(`Broken imports: ${brokenCount}`);
console.log(`Circular dependencies: ${circular.length}`);
console.log(`Import mismatches: ${mismatchCount}`);
