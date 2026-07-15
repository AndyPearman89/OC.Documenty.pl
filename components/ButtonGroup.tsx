"use client";

import { useState } from "react";

interface ButtonOption {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

interface ButtonGroupProps {
  options: ButtonOption[];
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  fullWidth?: boolean;
}

export function ButtonGroup({
  options,
  value,
  onChange,
  label,
  name,
  fullWidth = true,
}: ButtonGroupProps) {
  return (
    <div className="buttonGroupContainer">
      {label && <label className="buttonGroupLabel">{label}</label>}
      <div className={`buttonGroup ${fullWidth ? "fullWidth" : ""}`}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`buttonGroupOption ${value === option.value ? "active" : ""}`}
            onClick={() => onChange(option.value)}
            data-value={option.value}
          >
            {option.icon && <span className="buttonGroupIcon">{option.icon}</span>}
            <span className="buttonGroupLabel">{option.label}</span>
            {option.description && <span className="buttonGroupDesc">{option.description}</span>}
            {value === option.value && <span className="checkmark">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
