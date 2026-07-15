"use client";

import { useState, useMemo } from "react";

const QUICK_BRANDS = ["Audi", "BMW", "Ford", "Opel", "Toyota", "Volkswagen", "Skoda", "Kia", "Hyundai", "Mercedes"];

const ALL_BRANDS = [
  ...QUICK_BRANDS,
  "Alfa Romeo", "Jaguar", "Land Rover", "Porsche", "Ferrari", "Lamborghini", "Maserati",
  "Renault", "Peugeot", "Citroën", "Fiat", "Alfa Romeo", "Jeep", "Dacia", "SEAT",
  "Dacia", "Honda", "Nissan", "Mazda", "Subaru", "Mitsubishi", "Suzuki",
  "Chevrolet", "GMC", "Cadillac", "Dodge", "RAM", "Volvo", "Rolls-Royce",
];

interface VehicleBrandSearchProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
}

export function VehicleBrandSearch({ value, onChange, label }: VehicleBrandSearchProps) {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filtered = useMemo(
    () =>
      query.trim()
        ? ALL_BRANDS.filter((b) => b.toLowerCase().includes(query.toLowerCase()))
        : ALL_BRANDS,
    [query]
  );

  return (
    <div className="vehicleBrandContainer">
      {label && <label className="vehicleBrandLabel">{label}</label>}

      {!showSearch ? (
        <div className="vehicleBrandInput">
          <input
            type="text"
            placeholder="Wpisz markę lub wybierz z listy"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setShowSearch(true)}
            className="brandInputField"
          />
          <span className="brandSearchIcon">🔍</span>
        </div>
      ) : (
        <div className="brandSearchPopup">
          <input
            type="text"
            placeholder="Szukaj marki..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="brandSearchInput"
          />
          <div className="brandQuickButtons">
            {QUICK_BRANDS.map((brand) => (
              <button
                key={brand}
                type="button"
                className={`brandQuickButton ${value === brand ? "active" : ""}`}
                onClick={() => {
                  onChange(brand);
                  setShowSearch(false);
                  setQuery("");
                }}
              >
                {brand}
              </button>
            ))}
          </div>
          <div className="brandSearchResults">
            {filtered.map((brand) => (
              <button
                key={brand}
                type="button"
                className={`brandResult ${value === brand ? "active" : ""}`}
                onClick={() => {
                  onChange(brand);
                  setShowSearch(false);
                  setQuery("");
                }}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
