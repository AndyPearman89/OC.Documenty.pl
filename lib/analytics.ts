/**
 * Analytics tracking for conversions and user behavior
 * Initialize in _app.tsx or layout.tsx
 */

export type EventCategory = "engagement" | "conversion" | "error" | "performance";

export interface AnalyticsEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string = "";

  constructor() {
    if (typeof window !== "undefined") {
      this.sessionId = this.getOrCreateSessionId();
    }
  }

  private getOrCreateSessionId(): string {
    const stored = sessionStorage.getItem("oc-session-id");
    if (stored) return stored;

    const id = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("oc-session-id", id);
    return id;
  }

  trackEvent(event: AnalyticsEvent) {
    const enrichedEvent = {
      ...event,
      timestamp: event.timestamp || Date.now(),
      sessionId: this.sessionId,
    };

    this.events.push(enrichedEvent);

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    this.sendToServer(enrichedEvent);
  }

  private sendToServer(event: AnalyticsEvent & { sessionId: string; timestamp: number }) {
    if (!navigator.sendBeacon) return;

    const data = JSON.stringify(event);
    navigator.sendBeacon("/api/analytics", data);
  }

  trackConversion(documentType: string, method: "pdf" | "docx" | "print") {
    this.trackEvent({
      category: "conversion",
      action: "document_generated",
      label: `${documentType}_${method}`,
      value: 1,
    });
  }

  trackFormStep(step: number, totalSteps: number) {
    this.trackEvent({
      category: "engagement",
      action: "form_step_completed",
      label: `step_${step}_of_${totalSteps}`,
      value: Math.round((step / totalSteps) * 100),
    });
  }

  trackError(errorType: string, details?: string) {
    this.trackEvent({
      category: "error",
      action: "error_occurred",
      label: details ? `${errorType}: ${details}` : errorType,
    });
  }

  trackPageView(pageName: string, documentCount?: number) {
    this.trackEvent({
      category: "engagement",
      action: "page_view",
      label: pageName,
      value: documentCount,
    });
  }
}

export const analytics = new Analytics();
