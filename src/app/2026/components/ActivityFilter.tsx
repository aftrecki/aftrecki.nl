import React from "react";
import { FilterList } from "@mui/icons-material";

interface ActivityFilterProps {
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  activities: any[];
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({
  selectedType,
  setSelectedType,
  activities,
}) => {
  const ALL_TYPES = ["Culinair", "Natuur", "Museum", "Dorp", "Cultureel", "Bier"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
        <FilterList fontSize="small" />
        <span>Filter op type:</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setSelectedType(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            selectedType === null
              ? "bg-slate-800 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Alle ({activities.length})
        </button>

        {ALL_TYPES.map((type) => {
          const count = activities.filter((a) => a.types.includes(type)).length;
          if (count === 0) return null;

          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedType === type
                  ? "bg-slate-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {type} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
};
