import React from "react";
import { Map, DirectionsCar } from "@mui/icons-material";
import { ActivityTypeBadge } from "./ActivityTypeBadge";

interface ActivityCardProps {
  activity: {
    name: string;
    types: string[];
    minsDriving: number;
    mapsLink: string;
  };
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
            {activity.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {activity.types.map((type) => (
              <ActivityTypeBadge key={type} type={type} />
            ))}
          </div>
        </div>

        <div className="flex items-center text-sm text-slate-500 font-medium">
          <DirectionsCar fontSize="small" className="mr-1.5 opacity-70" />
          {activity.minsDriving} minuten rijden
        </div>
      </div>

      <a
        href={activity.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-slate-200 shrink-0"
      >
        <span>Maps</span>
        <Map fontSize="small" />
      </a>
    </div>
  );
};
