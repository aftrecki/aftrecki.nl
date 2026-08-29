import React from "react";

interface ActivityTypeBadgeProps {
  type: string;
}

export const ActivityTypeBadge: React.FC<ActivityTypeBadgeProps> = ({ type }) => {
  const baseStyle =
    "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide";

  switch (type) {
    case "Culinair":
      return (
        <div className={`${baseStyle} bg-orange-100 text-orange-800`}>
          👩‍🍳 Culinair
        </div>
      );
    case "Natuur":
      return (
        <div className={`${baseStyle} bg-emerald-100 text-emerald-800`}>
          🌲 Natuur
        </div>
      );
    case "Museum":
      return (
        <div className={`${baseStyle} bg-purple-100 text-purple-800`}>
          🖼 Museum
        </div>
      );
    case "Dorp":
      return (
        <div className={`${baseStyle} bg-indigo-100 text-indigo-800`}>
          🏘 Dorp
        </div>
      );
    case "Cultureel":
      return (
        <div className={`${baseStyle} bg-rose-100 text-rose-800`}>
          🧫 Cultureel
        </div>
      );
    case "Bier":
      return (
        <div className={`${baseStyle} bg-amber-100 text-amber-800`}>
          🍻 Bier
        </div>
      );
    default:
      return (
        <div className={`${baseStyle} bg-slate-100 text-slate-800`}>
          Fix je json
        </div>
      );
  }
};
