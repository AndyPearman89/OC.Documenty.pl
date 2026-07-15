import { CheckCircle2, Lock, Award, Users } from "lucide-react";

interface TrustBadgesProps {
  layout?: "horizontal" | "vertical";
}

export function TrustBadges({ layout = "horizontal" }: TrustBadgesProps) {
  const badges = [
    {
      icon: CheckCircle2,
      label: "100% Free",
      description: "Bez ukrytych opłat",
    },
    {
      icon: Lock,
      label: "Bezpieczne",
      description: "Dane lokalnie w przeglądarce",
    },
    {
      icon: Award,
      label: "30 dni gwarancji",
      description: "Zwrot pieniędzy bez pytań",
    },
    {
      icon: Users,
      label: "Zaufane",
      description: "50k+ użytkowników",
    },
  ];

  const containerClass = layout === "horizontal" ? "flex gap-16 flex-wrap justify-center" : "grid grid-cols-1 gap-12";
  const badgeClass =
    layout === "horizontal" ? "flex flex-col items-center text-center flex-1 min-w-40" : "flex items-center gap-12";

  return (
    <div className={containerClass}>
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.label} className={badgeClass}>
            <div className="flex-shrink-0">
              <Icon size={32} className="text-red-500" />
            </div>
            <div className="flex-1">
              <div style={{ fontWeight: 600, fontSize: "14px", color: "#111827", marginBottom: "4px" }}>
                {badge.label}
              </div>
              <div style={{ fontSize: "12px", color: "#536174" }}>{badge.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
