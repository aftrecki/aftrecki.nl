import React from "react";
import { ActivityCard } from "./ActivityCard";

interface ActivityListProps {
  activities: any[];
}

export const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="flex flex-col gap-3 max-h-[32rem] overflow-y-auto pr-2 pb-2">
      {activities.length === 0 ? (
        <div className="text-center py-8 text-slate-700 font-medium bg-white/50 rounded-2xl">
          Geen activiteiten gevonden voor deze selectie.
        </div>
      ) : (
        activities.map((activity) => (
          <ActivityCard key={activity.name} activity={activity} />
        ))
      )}
    </div>
  );
};
