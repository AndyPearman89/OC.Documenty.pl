"use client";

interface VehicleType {
  value: string;
  label: string;
  emoji: string;
}

const VEHICLE_TYPES: VehicleType[] = [
  { value: "samochod", label: "Samochód", emoji: "🚗" },
  { value: "suv", label: "SUV", emoji: "🚙" },
  { value: "motocykl", label: "Motocykl", emoji: "🏍️" },
  { value: "bus", label: "Bus", emoji: "🚐" },
  { value: "ciezarowka", label: "Ciężarówka", emoji: "🚚" },
  { value: "ciagtnik", label: "Ciągnik", emoji: "🚜" },
  { value: "autobus", label: "Autobus", emoji: "🚌" },
  { value: "kamper", label: "Kamper", emoji: "🏕️" },
  { value: "skuter", label: "Skuter", emoji: "🛵" },
  { value: "naczepa", label: "Naczepa", emoji: "🚛" },
];

interface VehicleTypeTilesProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  options?: VehicleType[];
}

export function VehicleTypeTiles({ value, onChange, label, options = VEHICLE_TYPES }: VehicleTypeTilesProps) {
  return (
    <div className="vehicleTypesContainer">
      {label && <label className="vehicleTypesLabel">{label}</label>}
      <div className="vehicleTypesTiles">
        {options.map((type) => (
          <button
            key={type.value}
            type="button"
            className={`vehicleTypeTile ${value === type.value ? "active" : ""}`}
            onClick={() => onChange(type.value)}
          >
            <span className="vehicleEmoji">{type.emoji}</span>
            <span className="vehicleLabel">{type.label}</span>
            {value === type.value && <span className="vehicleCheckmark">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
