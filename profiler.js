import * as THREE from 'three';
import { GUI } from 'lil-gui';
import { Spector } from 'spectorjs';
import Stats from 'stats.js';

/**
 * Comprehensive profiler that integrates multiple performance monitoring tools
 * for the voxel engine, including stats.js, spector.js, and custom metrics
 */
export class Profiler {
  constructor() {
    this.isEnabled = true;
    this.isRecording = false;
    
    // Performance data storage
    this.performanceHistory = {
      frameTime: [],
      drawCalls: [],
      triangles: [],
      chunkGeneration: [],
      meshBuilding: [],
      memoryUsage: [],
      webglCalls: [],
      renderTime: [],
      updateTime: [],
      otherTime: []
    };
    
    // Configuration
    this.config = {
      maxHistorySize: 300, // Keep 5 minutes of data at 60fps
      maxVisibleAlerts: 5, // Maximum number of visible alert toasts
      alertThresholds: {
        frameTime: 16.67, // 60fps threshold
        drawCalls: 100,
        triangles: 50000,
        chunkGenTime: 100,
        meshBuildTime: 50
      },
      autoDetectBottlenecks: true,
      enableSpector: true,
      enableGUI: true
    };
    
    // Initialize profiling tools
    this.initializeStats();
    this.initializeSpector();
    this.initializeGUI();
    
    // Performance alerts
    this.alerts = [];
    this.alertContainer = null;
    this.alertThrottleMap = new Map(); // Track recent alerts to prevent spam
    
    // Bottleneck detection
    this.lastBottleneckCheck = 0;
    this.bottleneckCheckInterval = 1000; // Check every second
    
    // Performance reports
    this.reportData = {
      session: {
        startTime: Date.now(),
        totalFrames: 0,
        alerts: []
      },
      baseline: null
    };
    
    this.createAlertSystem();
  }
  
  /**
   * Initialize Stats.js with enhanced configuration (consolidated into main profiler)
   */
  initializeStats() {
    // Create single stats instance for internal use only
    this.stats = new Stats();
    this.stats.showPanel(0); // FPS
    // Don't add to DOM - we'll display this data in our GUI instead
    
    // Track frame timing internally
    this.frameStartTime = 0;
    this.internalFrameTime = 0;
    
    // Track breakdown of frame time
    this.frameBreakdown = {
      renderStartTime: 0,
      updateStartTime: 0,
      renderTime: 0,
      updateTime: 0,
      otherTime: 0
    };
  }
  
  /**
   * Initialize Spector.js for WebGL profiling
   */
  initializeSpector() {
    if (!this.config.enableSpector) return;
    
    this.spector = new Spector();
    
    // Configure spector
    this.spector.displayUI = false; // We'll control the UI ourselves
    this.spector.captureOnLoad = false;
    
    // Initialize spector
    this.spector.spyCanvases();
    
    console.log('Spector.js initialized for WebGL profiling');
  }
  
  /**
   * Initialize lil-gui for runtime debugging
   */
  initializeGUI() {
    if (!this.config.enableGUI) return;
    
    this.gui = new GUI();
    this.gui.domElement.style.position = 'absolute';
    this.gui.domElement.style.top = '0px';
    this.gui.domElement.style.right = '0px';
    this.gui.domElement.style.zIndex = '10000';
    
    // Profiler controls
    const profilerFolder = this.gui.addFolder('Profiler');
    profilerFolder.add(this, 'isEnabled').name('Enable Profiler');
    profilerFolder.add(this, 'toggleRecording').name('Toggle Recording');
    profilerFolder.add(this, 'captureWebGLFrame').name('Capture WebGL Frame');
    profilerFolder.add(this, 'generateReport').name('Generate Report');
    profilerFolder.add(this, 'exportData').name('Export Data');
    
    // Performance thresholds
    const thresholdFolder = this.gui.addFolder('Alert Thresholds');
    thresholdFolder.add(this.config.alertThresholds, 'frameTime', 1, 100).name('Frame Time (ms)');
    thresholdFolder.add(this.config.alertThresholds, 'drawCalls', 1, 1000).name('Draw Calls');
    thresholdFolder.add(this.config.alertThresholds, 'triangles', 1000, 1000000).name('Triangles');
    thresholdFolder.add(this.config.alertThresholds, 'chunkGenTime', 1, 1000).name('Chunk Gen (ms)');
    thresholdFolder.add(this.config.alertThresholds, 'meshBuildTime', 1, 500).name('Mesh Build (ms)');
    
    // Configuration
    const configFolder = this.gui.addFolder('Configuration');
    configFolder.add(this.config, 'autoDetectBottlenecks').name('Auto Detect Bottlenecks');
    configFolder.add(this.config, 'maxHistorySize', 60, 3600).name('History Size');
    configFolder.add(this.config, 'maxVisibleAlerts', 1, 10).name('Max Alert Toasts');
    
    // Performance data display
    this.performanceFolder = this.gui.addFolder('Performance Data');
    this.performanceDisplay = {
      currentFPS: 0,
      currentFrameTime: 0,
      currentDrawCalls: 0,
      currentTriangles: 0,
      avgFrameTime: 0,
      avgDrawCalls: 0,
      avgTriangles: 0,
      lastChunkGenTime: 0,
      lastMeshBuildTime: 0,
      memoryUsage: 0,
      currentRenderTime: 0,
      currentUpdateTime: 0,
      currentOtherTime: 0,
      avgRenderTime: 0,
      avgUpdateTime: 0,
      avgOtherTime: 0
    };
    
    // Current metrics folder
    const currentFolder = this.performanceFolder.addFolder('Current Frame');
    currentFolder.add(this.performanceDisplay, 'currentFPS').name('FPS').listen();
    currentFolder.add(this.performanceDisplay, 'currentFrameTime').name('Total Frame Time (ms)').listen();
    currentFolder.add(this.performanceDisplay, 'currentRenderTime').name('Render Time (ms)').listen();
    currentFolder.add(this.performanceDisplay, 'currentUpdateTime').name('Update Time (ms)').listen();
    currentFolder.add(this.performanceDisplay, 'currentOtherTime').name('Other Time (ms)').listen();
    currentFolder.add(this.performanceDisplay, 'currentDrawCalls').name('Draw Calls').listen();
    currentFolder.add(this.performanceDisplay, 'currentTriangles').name('Triangles').listen();
    
    // Averaged metrics folder
    const avgFolder = this.performanceFolder.addFolder('Averages');
    avgFolder.add(this.performanceDisplay, 'avgFrameTime').name('Avg Total Frame Time (ms)').listen();
    avgFolder.add(this.performanceDisplay, 'avgRenderTime').name('Avg Render Time (ms)').listen();
    avgFolder.add(this.performanceDisplay, 'avgUpdateTime').name('Avg Update Time (ms)').listen();
    avgFolder.add(this.performanceDisplay, 'avgOtherTime').name('Avg Other Time (ms)').listen();
    avgFolder.add(this.performanceDisplay, 'avgDrawCalls').name('Avg Draw Calls').listen();
    avgFolder.add(this.performanceDisplay, 'avgTriangles').name('Avg Triangles').listen();
    
    // Voxel-specific metrics folder
    const voxelFolder = this.performanceFolder.addFolder('Voxel Engine');
    voxelFolder.add(this.performanceDisplay, 'lastChunkGenTime').name('Last Chunk Gen (ms)').listen();
    voxelFolder.add(this.performanceDisplay, 'lastMeshBuildTime').name('Last Mesh Build (ms)').listen();
    voxelFolder.add(this.performanceDisplay, 'memoryUsage').name('Memory (MB)').listen();
    
    console.log('lil-gui initialized for runtime debugging');
  }
  
  /**
   * Create alert system for performance issues
   */
  createAlertSystem() {
    this.alertContainer = document.createElement('div');
    this.alertContainer.style.position = 'fixed';
    this.alertContainer.style.bottom = '80px'; // Move to bottom, above help hint
    this.alertContainer.style.right = '20px';
    this.alertContainer.style.zIndex = '10001';
    this.alertContainer.style.maxWidth = '400px';
    this.alertContainer.style.display = 'flex';
    this.alertContainer.style.flexDirection = 'column-reverse'; // Newest alerts at bottom
    document.body.appendChild(this.alertContainer);
  }
  
  /**
   * Start profiling frame
   */
  begin() {
    if (!this.isEnabled) return;
    
    this.stats.begin();
    this.frameStartTime = performance.now();
  }
  
  /**
   * End profiling frame and collect metrics
   */
  end() {
    if (!this.isEnabled) return;
    
    this.stats.end();
    
    const frameTime = performance.now() - this.frameStartTime;
    this.internalFrameTime = frameTime;
    
    // Calculate "other" time (frame time - render time - update time)
    const renderTime = this.frameBreakdown.renderTime || 0;
    const updateTime = this.frameBreakdown.updateTime || 0;
    this.frameBreakdown.otherTime = Math.max(0, frameTime - renderTime - updateTime);
    this.addToHistory('otherTime', this.frameBreakdown.otherTime);
    
    this.collectMetrics(frameTime);
    
    this.reportData.session.totalFrames++;
    
    // Check for bottlenecks
    if (this.config.autoDetectBottlenecks && 
        Date.now() - this.lastBottleneckCheck > this.bottleneckCheckInterval) {
      this.detectBottlenecks();
      this.lastBottleneckCheck = Date.now();
    }
    
    // Reset frame breakdown for next frame
    this.frameBreakdown = {
      renderStartTime: 0,
      updateStartTime: 0,
      renderTime: 0,
      updateTime: 0,
      otherTime: 0
    };
  }
  
  /**
   * Collect performance metrics
   */
  collectMetrics(frameTime) {
    // Add to history
    this.addToHistory('frameTime', frameTime);
    
    // Update performance display
    this.updatePerformanceDisplay();
    
    // Check thresholds
    this.checkAlertThresholds(frameTime);
  }
  
  /**
   * Add renderer metrics from Three.js
   */
  addRendererMetrics(renderer) {
    if (!this.isEnabled || !renderer) return;
    
    const info = renderer.info;
    const calls = info.render.calls;
    const triangles = info.render.triangles;
    
    // Debug logging to understand what's happening
    if (calls === 1 || triangles === 1) {
      console.log('Renderer info debug:', {
        calls: calls,
        triangles: triangles,
        geometries: info.memory.geometries,
        textures: info.memory.textures,
        programs: info.programs ? info.programs.length : 'undefined'
      });
    }
    
    this.addToHistory('drawCalls', calls);
    this.addToHistory('triangles', triangles);
    
    // Store current frame values
    this.performanceDisplay.currentDrawCalls = calls;
    this.performanceDisplay.currentTriangles = triangles;
    
    // Check thresholds
    this.checkAlertThresholds(calls, 'drawCalls');
    this.checkAlertThresholds(triangles, 'triangles');
  }
  
  /**
   * Add chunk generation metrics
   */
  addChunkGenerationMetrics(time) {
    if (!this.isEnabled) return;
    
    this.addToHistory('chunkGeneration', time);
    this.performanceDisplay.lastChunkGenTime = time;
    this.checkAlertThresholds(time, 'chunkGenTime');
  }
  
  /**
   * Add mesh building metrics
   */
  addMeshBuildingMetrics(time) {
    if (!this.isEnabled) return;
    
    this.addToHistory('meshBuilding', time);
    this.performanceDisplay.lastMeshBuildTime = time;
    this.checkAlertThresholds(time, 'meshBuildTime');
  }
  
  /**
   * Start timing the render phase
   */
  beginRender() {
    if (!this.isEnabled) return;
    this.frameBreakdown.renderStartTime = performance.now();
  }
  
  /**
   * End timing the render phase
   */
  endRender() {
    if (!this.isEnabled) return;
    if (this.frameBreakdown.renderStartTime > 0) {
      this.frameBreakdown.renderTime = performance.now() - this.frameBreakdown.renderStartTime;
      this.addToHistory('renderTime', this.frameBreakdown.renderTime);
    }
  }
  
  /**
   * Start timing the update phase
   */
  beginUpdate() {
    if (!this.isEnabled) return;
    this.frameBreakdown.updateStartTime = performance.now();
  }
  
  /**
   * End timing the update phase
   */
  endUpdate() {
    if (!this.isEnabled) return;
    if (this.frameBreakdown.updateStartTime > 0) {
      this.frameBreakdown.updateTime = performance.now() - this.frameBreakdown.updateStartTime;
      this.addToHistory('updateTime', this.frameBreakdown.updateTime);
    }
  }
  
  /**
   * Add data to performance history
   */
  addToHistory(metric, value) {
    const history = this.performanceHistory[metric];
    history.push({
      timestamp: Date.now(),
      value: value
    });
    
    // Trim history if too large
    if (history.length > this.config.maxHistorySize) {
      history.shift();
    }
  }
  
  /**
   * Update performance display values
   */
  updatePerformanceDisplay() {
    const getAverage = (metric) => {
      const history = this.performanceHistory[metric];
      if (history.length === 0) return 0;
      const sum = history.reduce((acc, item) => acc + item.value, 0);
      return (sum / history.length).toFixed(2);
    };
    
    // Current performance metrics
    this.performanceDisplay.currentFPS = this.internalFrameTime > 0 ? (1000 / this.internalFrameTime).toFixed(1) : 0;
    this.performanceDisplay.currentFrameTime = this.internalFrameTime.toFixed(2);
    this.performanceDisplay.currentRenderTime = (this.frameBreakdown.renderTime || 0).toFixed(2);
    this.performanceDisplay.currentUpdateTime = (this.frameBreakdown.updateTime || 0).toFixed(2);
    this.performanceDisplay.currentOtherTime = (this.frameBreakdown.otherTime || 0).toFixed(2);
    
    // Averaged metrics
    this.performanceDisplay.avgFrameTime = getAverage('frameTime');
    this.performanceDisplay.avgRenderTime = getAverage('renderTime');
    this.performanceDisplay.avgUpdateTime = getAverage('updateTime');
    this.performanceDisplay.avgOtherTime = getAverage('otherTime');
    this.performanceDisplay.avgDrawCalls = getAverage('drawCalls');
    this.performanceDisplay.avgTriangles = getAverage('triangles');
    
    // Memory usage - track both JavaScript heap and WebGL memory
    if (performance.memory) {
      const jsMemory = performance.memory.usedJSHeapSize / 1024 / 1024;
      this.performanceDisplay.memoryUsage = jsMemory.toFixed(2);
      
      // Track memory growth to detect leaks
      this.addToHistory('memoryUsage', jsMemory);
      
      // Check for memory leaks (growth > 10MB over last 60 frames)
      const memHistory = this.performanceHistory.memoryUsage;
      if (memHistory.length >= 60) {
        const recent = memHistory.slice(-60);
        const oldestMemory = recent[0].value;
        const newestMemory = recent[recent.length - 1].value;
        const memoryGrowth = newestMemory - oldestMemory;
        
        if (memoryGrowth > 10) { // More than 10MB growth in 60 frames
          const alertKey = 'memory_leak';
          const now = Date.now();
          const lastAlert = this.alertThrottleMap.get(alertKey);
          
          if (!lastAlert || now - lastAlert > 30000) { // 30 second throttle for memory alerts
            this.alertThrottleMap.set(alertKey, now);
            this.createAlert(`Potential memory leak detected: +${memoryGrowth.toFixed(1)}MB in 60 frames`, 'error');
          }
        }
      }
    }
  }
  
  /**
   * Check alert thresholds and create alerts
   */
  checkAlertThresholds(value, metric = 'frameTime') {
    const threshold = this.config.alertThresholds[metric];
    if (value > threshold) {
      // Throttle alerts to prevent spam (max 1 alert per metric per 2 seconds)
      const alertKey = `${metric}_threshold`;
      const now = Date.now();
      const lastAlert = this.alertThrottleMap.get(alertKey);
      
      if (!lastAlert || now - lastAlert > 2000) {
        this.alertThrottleMap.set(alertKey, now);
        this.createAlert(`${metric} exceeded threshold: ${value.toFixed(2)} > ${threshold}`, 'warning');
      }
    }
  }
  
  /**
   * Create performance alert
   */
  createAlert(message, type = 'warning') {
    const alert = {
      id: Date.now(),
      message: message,
      type: type,
      timestamp: Date.now()
    };
    
    this.alerts.push(alert);
    this.reportData.session.alerts.push(alert);
    
    // Create visual alert
    this.showVisualAlert(alert);
    
    // Log to console
    console.warn(`[Profiler Alert] ${message}`);
  }
  
  /**
   * Show visual alert
   */
  showVisualAlert(alert) {
    // Limit to maximum configured visible alerts
    const maxAlerts = this.config.maxVisibleAlerts;
    const currentAlerts = this.alertContainer.children;
    
    // Remove oldest alerts if we're at the limit
    while (currentAlerts.length >= maxAlerts) {
      this.alertContainer.removeChild(currentAlerts[0]);
    }
    
    const alertElement = document.createElement('div');
    alertElement.style.backgroundColor = alert.type === 'error' ? '#ff4444' : '#ffaa44';
    alertElement.style.color = 'white';
    alertElement.style.padding = '10px';
    alertElement.style.marginBottom = '5px';
    alertElement.style.borderRadius = '5px';
    alertElement.style.fontSize = '12px';
    alertElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    alertElement.style.transition = 'opacity 0.3s ease-in-out';
    alertElement.textContent = alert.message;
    
    // Add data attribute for easier management
    alertElement.dataset.alertId = alert.id;
    
    this.alertContainer.appendChild(alertElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (alertElement.parentNode) {
        // Fade out before removing
        alertElement.style.opacity = '0';
        setTimeout(() => {
          if (alertElement.parentNode) {
            alertElement.parentNode.removeChild(alertElement);
          }
        }, 300);
      }
    }, 5000);
  }
  
  /**
   * Detect performance bottlenecks
   */
  detectBottlenecks() {
    const recentFrames = this.performanceHistory.frameTime.slice(-60); // Last 60 frames
    if (recentFrames.length < 60) return;
    
    const avgFrameTime = recentFrames.reduce((acc, item) => acc + item.value, 0) / recentFrames.length;
    const maxFrameTime = Math.max(...recentFrames.map(item => item.value));
    
    const now = Date.now();
    
    // Check for frame time spikes
    if (maxFrameTime > avgFrameTime * 2 && maxFrameTime > 33.33) {
      const alertKey = 'frame_spike';
      const lastAlert = this.alertThrottleMap.get(alertKey);
      
      if (!lastAlert || now - lastAlert > 5000) { // 5 second throttle for spikes
        this.alertThrottleMap.set(alertKey, now);
        this.createAlert(`Frame time spike detected: ${maxFrameTime.toFixed(2)}ms (avg: ${avgFrameTime.toFixed(2)}ms)`, 'error');
      }
    }
    
    // Check for consistently high frame times
    if (avgFrameTime > this.config.alertThresholds.frameTime * 1.5) {
      const alertKey = 'high_frame_times';
      const lastAlert = this.alertThrottleMap.get(alertKey);
      
      if (!lastAlert || now - lastAlert > 10000) { // 10 second throttle for consistent issues
        this.alertThrottleMap.set(alertKey, now);
        this.createAlert(`Consistently high frame times: ${avgFrameTime.toFixed(2)}ms avg`, 'warning');
      }
    }
  }
  
  /**
   * Toggle recording
   */
  toggleRecording() {
    this.isRecording = !this.isRecording;
    console.log(`Profiler recording: ${this.isRecording ? 'ON' : 'OFF'}`);
    
    if (this.isRecording) {
      this.reportData.session.startTime = Date.now();
      this.reportData.session.totalFrames = 0;
      this.reportData.session.alerts = [];
    }
  }
  
  /**
   * Capture WebGL frame with Spector.js
   */
  captureWebGLFrame() {
    if (!this.spector) {
      console.warn('Spector.js not available');
      return;
    }
    
    this.spector.captureCanvas();
    console.log('WebGL frame captured with Spector.js');
  }
  
  /**
   * Generate performance report
   */
  generateReport() {
    const report = {
      session: this.reportData.session,
      timestamp: Date.now(),
      duration: Date.now() - this.reportData.session.startTime,
      averages: {
        frameTime: this.performanceDisplay.avgFrameTime,
        drawCalls: this.performanceDisplay.avgDrawCalls,
        triangles: this.performanceDisplay.avgTriangles
      },
      alerts: this.alerts.slice(-10), // Last 10 alerts
      recommendations: this.generateRecommendations()
    };
    
    console.log('Performance Report:', report);
    return report;
  }
  
  /**
   * Generate optimization recommendations
   */
  generateRecommendations() {
    const recommendations = [];
    
    if (parseFloat(this.performanceDisplay.avgFrameTime) > 16.67) {
      recommendations.push('Frame time is above 60fps threshold. Consider optimizing rendering or reducing complexity.');
    }
    
    if (parseFloat(this.performanceDisplay.avgDrawCalls) > 50) {
      recommendations.push('High draw call count. Consider batching or using instanced rendering.');
    }
    
    if (parseFloat(this.performanceDisplay.avgTriangles) > 100000) {
      recommendations.push('High triangle count. Consider using LOD or culling techniques.');
    }
    
    return recommendations;
  }
  
  /**
   * Export performance data
   */
  exportData() {
    const data = {
      config: this.config,
      history: this.performanceHistory,
      report: this.generateReport()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `profiler-data-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    console.log('Performance data exported');
  }
  
  /**
   * Set performance baseline
   */
  setBaseline() {
    this.reportData.baseline = {
      frameTime: this.performanceDisplay.avgFrameTime,
      drawCalls: this.performanceDisplay.avgDrawCalls,
      triangles: this.performanceDisplay.avgTriangles,
      timestamp: Date.now()
    };
    
    console.log('Performance baseline set:', this.reportData.baseline);
  }
  
  /**
   * Cleanup profiler
   */
  cleanup() {
    if (this.gui) {
      this.gui.destroy();
    }
    
    if (this.spector) {
      this.spector.dispose();
    }
    
    // Remove alert container
    if (this.alertContainer && this.alertContainer.parentNode) {
      this.alertContainer.parentNode.removeChild(this.alertContainer);
    }
  }
}