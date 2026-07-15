"use client";

interface FormFieldProps {
  label: string;
  icon: string;
  type?: "text" | "email" | "tel" | "number" | "date";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  id?: string;
}

export function FormField({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  id = `field-${Math.random().toString(36).substr(2, 9)}`,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="formField">
      <label htmlFor={id} className="formFieldLabel">
        {label}
        {required && <span className="required" aria-label="wymagane">*</span>}
      </label>
      <div className="formFieldWrapper">
        <span className="formFieldIcon" aria-hidden="true">{icon}</span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`formFieldInput ${error ? "error" : ""}`}
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={error ? errorId : undefined}
        />
      </div>
      {error && (
        <small id={errorId} className="formFieldError" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
