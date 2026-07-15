// Performance Optimization Utilities (Phase 12)

/**
 * Image optimization: Generate srcSet for responsive images
 */
export function generateImageSrcSet(basePath: string, sizes: number[] = [320, 640, 960, 1280]) {
  return sizes.map((size) => `${basePath}?w=${size} ${size}w`).join(", ");
}

/**
 * Dynamic import for code splitting
 */
export async function dynamicImport(modulePath: string) {
  return import(/* webpackChunkName: "chunk" */ modulePath);
}

/**
 * Preload critical resources
 */
export function preloadFont(fontFamily: string, weights = [400, 700]) {
  if (typeof document !== "undefined") {
    weights.forEach((weight) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.href = `/fonts/${fontFamily}-${weight}.woff2`;
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }
}

/**
 * Preconnect to critical origins
 */
export function preconnectToOrigin(origin: string) {
  if (typeof document !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    document.head.appendChild(link);
  }
}

/**
 * Core Web Vitals monitoring
 */
export function reportWebVitals() {
  if (typeof window !== "undefined" && "web-vital" in window) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require("web-vitals");

    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }
}

/**
 * Intersection Observer for lazy loading
 */
export function observeElements(selector: string, callback: (el: Element) => void) {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  }
}

/**
 * Debounce function for resize/scroll events
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }) as T;
}

/**
 * Performance mark & measure
 */
export function measurePerformance(label: string, fn: () => void) {
  if (typeof window !== "undefined" && "performance" in window) {
    performance.mark(`${label}-start`);
    fn();
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
  }
}
