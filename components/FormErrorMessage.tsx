"use client";

import { AlertCircle } from "lucide-react";

interface FormErrorMessageProps {
  message?: string;
  id?: string;
  fieldLabel?: string;
}

export function FormErrorMessage({ message, id, fieldLabel }: FormErrorMessageProps) {
  if (!message) return null;

  return (
    <div
      id={id}
      role="alert"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        padding: "12px 14px",
        background: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "8px",
        marginTop: "6px",
        fontSize: "13px",
        color: "#dc2626",
      }}
    >
      <AlertCircle size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
      <div style={{ flex: 1 }}>
        {fieldLabel && <strong style={{ display: "block", marginBottom: "2px" }}>{fieldLabel}</strong>}
        {message}
      </div>
    </div>
  );
}

export interface FieldErrorProps {
  hasError?: boolean;
  message?: string;
  fieldId?: string;
  fieldLabel?: string;
}

export function getFieldErrorProps(error?: FieldErrorProps) {
  if (!error?.hasError) {
    return {};
  }

  return {
    "aria-invalid": "true" as const,
    "aria-describedby": error.fieldId ? `${error.fieldId}-error` : undefined,
    style: {
      borderColor: "#fca5a5",
      background: "#fef2f2",
    },
  };
}
