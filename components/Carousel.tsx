"use client";

import { useState, useRef } from "react";

interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
}

interface CarouselProps {
  items: CarouselItem[];
  title?: string;
  itemsPerView?: { mobile: number; tablet: number; desktop: number };
}

export function Carousel({
  items,
  title,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
}: CarouselProps) {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 320;
    const newPos = direction === "left" ? scrollPos - scrollAmount : scrollPos + scrollAmount;
    containerRef.current.scrollBy({ left: scrollAmount * (direction === "left" ? -1 : 1), behavior: "smooth" });
    setScrollPos(newPos);
  };

  return (
    <div className="carouselSection">
      {title && <h3 className="carouselTitle">{title}</h3>}
      <div className="carouselWrapper">
        <div className="carouselContainer" ref={containerRef}>
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href || "#"}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              className="carouselCard"
            >
              {item.icon && <span className="carouselIcon">{item.icon}</span>}
              <h4>{item.title}</h4>
              {item.description && <p>{item.description}</p>}
            </a>
          ))}
        </div>
      </div>
      <button className="carouselNav carouselNavLeft" onClick={() => handleScroll("left")}>
        ←
      </button>
      <button className="carouselNav carouselNavRight" onClick={() => handleScroll("right")}>
        →
      </button>
    </div>
  );
}
