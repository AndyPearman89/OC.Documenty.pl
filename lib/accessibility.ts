/**
 * Accessibility utilities for WCAG 2.1 AA compliance
 */

export interface AccessibilityProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
  role?: string;
  tabIndex?: number;
}

/**
 * Make clickable div keyboard accessible
 */
export function makeKeyboardAccessible(
  onClick: (e: React.KeyboardEvent | React.MouseEvent) => void,
  role: string = "button",
): {
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  role: string;
  tabIndex: number;
} {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };

  return {
    onClick,
    onKeyDown: handleKeyDown,
    role,
    tabIndex: 0,
  };
}

/**
 * Skip to main content link (hidden by default, visible on focus)
 */
export function getSkipToMainStyle(): React.CSSProperties {
  return {
    position: "absolute",
    top: "-40px",
    left: 0,
    background: "#000",
    color: "#fff",
    padding: "8px 12px",
    zIndex: 100,
  };
}

export function getSkipToMainFocusStyle(): React.CSSProperties {
  return {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#000",
    color: "#fff",
    padding: "8px 12px",
    zIndex: 100,
  };
}

/**
 * Generate unique ID for form fields
 */
export function generateFieldId(fieldName: string): string {
  return `field-${fieldName}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Proper heading hierarchy
 */
export function validateHeadingHierarchy(headings: Array<{ level: number; text: string }>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (headings.length === 0) return { valid: true, errors: [] };

  // Should start with H1
  if (headings[0].level !== 1) {
    errors.push("First heading should be H1");
  }

  // Check for gaps (e.g., H1 -> H3)
  for (let i = 1; i < headings.length; i++) {
    const levelDiff = headings[i].level - headings[i - 1].level;
    if (levelDiff > 1) {
      errors.push(`Heading level jumped from H${headings[i - 1].level} to H${headings[i].level}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within a modal/dialog
   */
  trapFocus: (container: HTMLElement | null) => {
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  },

  /**
   * Restore focus after modal closes
   */
  saveFocus: () => {
    return document.activeElement as HTMLElement | null;
  },

  /**
   * Restore previous focus
   */
  restoreFocus: (element: HTMLElement | null) => {
    element?.focus();
  },
};

/**
 * ARIA live region utilities
 */
export const ariaLive = {
  /**
   * Announce to screen readers
   */
  announce: (message: string, priority: "polite" | "assertive" = "polite") => {
    const announcement = document.createElement("div");
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", priority);
    announcement.setAttribute("aria-atomic", "true");
    announcement.style.position = "absolute";
    announcement.style.left = "-10000px";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};

/**
 * Color contrast checker
 */
export function getContrastRatio(rgb1: string, rgb2: string): number {
  const getLuminance = (rgb: string) => {
    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3) return 0;

    const [r, g, b] = match.map((x) => {
      const v = parseInt(x) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check WCAG contrast levels
 */
export function checkContrast(ratio: number): {
  AA: boolean;
  AAA: boolean;
  normalText: boolean;
  largeText: boolean;
} {
  return {
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    normalText: ratio >= 4.5,
    largeText: ratio >= 3,
  };
}
