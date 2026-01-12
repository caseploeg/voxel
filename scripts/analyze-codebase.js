#!/usr/bin/env node
/**
 * Codebase Analysis Utility
 *
 * Run with: node scripts/analyze-codebase.js
 *
 * This script analyzes the voxel engine codebase to identify:
 * - Dead code (unused exports/functions)
 * - Console.log statements
 * - Commented out code blocks
 * - Import/export mismatches
 * - Potential issues
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOT = process.cwd();
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

// Analyze a single file
function analyzeFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relativePath = filePath.replace(ROOT + '/', '');

  const issues = [];

  // Count console.log statements
  const consoleLogs = lines.filter(l => l.includes('console.log')).length;
  if (consoleLogs > 0) {
    issues.push({ type: 'console.log', count: consoleLogs, severity: 'warning' });
  }

  // Count commented code blocks (lines starting with //)
  const commentedLines = lines.filter(l => l.trim().startsWith('//')).length;
  const totalLines = lines.length;
  const commentRatio = commentedLines / totalLines;
  if (commentRatio > 0.15 && totalLines > 50) {
    issues.push({
      type: 'high-comment-ratio',
      ratio: (commentRatio * 100).toFixed(1) + '%',
      severity: 'info'
    });
  }

  // Check for large commented-out blocks
  let inCommentBlock = false;
  let commentBlockStart = 0;
  let commentBlockSize = 0;

  lines.forEach((line, idx) => {
    if (line.includes('/*')) {
      inCommentBlock = true;
      commentBlockStart = idx + 1;
    }
    if (inCommentBlock) {
      commentBlockSize++;
    }
    if (line.includes('*/')) {
      if (commentBlockSize > 20) {
        issues.push({
          type: 'large-comment-block',
          line: commentBlockStart,
          size: commentBlockSize,
          severity: 'info'
        });
      }
      inCommentBlock = false;
      commentBlockSize = 0;
    }
  });

  // Check for TODO/FIXME comments
  const todos = lines.filter(l => /TODO|FIXME|HACK|XXX/i.test(l));
  if (todos.length > 0) {
    issues.push({ type: 'todo-comments', count: todos.length, severity: 'info' });
  }

  // Extract exports
  const exportMatches = content.match(/export\s+(class|function|const|let|var)\s+(\w+)/g) || [];
  const exports = exportMatches.map(m => m.split(/\s+/).pop());

  // Extract imports
  const importMatches = content.match(/import\s+{[^}]+}\s+from/g) || [];

  return {
    path: relativePath,
    lines: totalLines,
    exports,
    issues
  };
}

// Check for unused exports across files
function checkUnusedExports(files, analyses) {
  const allExports = new Map();
  const allImports = new Set();

  // Collect all exports
  analyses.forEach(a => {
    a.exports.forEach(exp => {
      if (!allExports.has(exp)) {
        allExports.set(exp, []);
      }
      allExports.get(exp).push(a.path);
    });
  });

  // Collect all imports/usages
  files.forEach(f => {
    const content = readFileSync(f, 'utf-8');
    allExports.forEach((_, name) => {
      // Simple heuristic: check if name appears in file
      if (content.includes(name)) {
        allImports.add(name);
      }
    });
  });

  // Find potentially unused exports
  const unused = [];
  allExports.forEach((paths, name) => {
    // If only appears in its source file, might be unused
    const usageCount = files.filter(f => {
      if (paths.some(p => f.endsWith(p))) return false;
      return readFileSync(f, 'utf-8').includes(name);
    }).length;

    if (usageCount === 0) {
      unused.push({ name, definedIn: paths });
    }
  });

  return unused;
}

// Main analysis
console.log('=== Voxel Engine Codebase Analysis ===\n');

const files = collectFiles(ROOT);
console.log(`Found ${files.length} JavaScript files\n`);

const analyses = files.map(analyzeFile);

// Summary by file
console.log('--- File Analysis ---\n');
analyses.forEach(a => {
  if (a.issues.length > 0) {
    console.log(`📁 ${a.path} (${a.lines} lines)`);
    a.issues.forEach(issue => {
      const icon = issue.severity === 'warning' ? '⚠️ ' : 'ℹ️ ';
      if (issue.type === 'console.log') {
        console.log(`   ${icon}${issue.count} console.log statements`);
      } else if (issue.type === 'high-comment-ratio') {
        console.log(`   ${icon}${issue.ratio} of file is comments`);
      } else if (issue.type === 'large-comment-block') {
        console.log(`   ${icon}Large comment block at line ${issue.line} (${issue.size} lines)`);
      } else if (issue.type === 'todo-comments') {
        console.log(`   ${icon}${issue.count} TODO/FIXME comments`);
      }
    });
    console.log('');
  }
});

// Check unused exports
console.log('--- Potentially Unused Exports ---\n');
const unused = checkUnusedExports(files, analyses);
unused.forEach(u => {
  console.log(`   ❓ ${u.name} (defined in ${u.definedIn.join(', ')})`);
});

// Summary stats
console.log('\n--- Summary ---');
const totalConsole = analyses.reduce((sum, a) => {
  const consoleIssue = a.issues.find(i => i.type === 'console.log');
  return sum + (consoleIssue ? consoleIssue.count : 0);
}, 0);
console.log(`Total console.log statements: ${totalConsole}`);
console.log(`Files with issues: ${analyses.filter(a => a.issues.length > 0).length}`);
console.log(`Potentially unused exports: ${unused.length}`);
