import { CSSProperties, FunctionComponent, ReactElement } from "react";

export type DayActivity = {
  icon: ReactElement;
  timeTitle: string;
  description: string;
};

type Props = {
  dateTitle: string;
  activities: DayActivity[];
};

export const DayPlanningPanel: FunctionComponent<Props> = ({
  dateTitle,
  activities,
}) => {
  const eenBoxie =
    "flex bg-bermuda p-4 rounded-md shadow-md min-w-[225px] max-w-[340px]";

  return (
    <div className="grid grid-rows-[auto_1fr] p-2">
      <div
        className={`${eenBoxie} font-bold justify-center tracking-wider mb-2`}
      >
        {dateTitle.toUpperCase()}
      </div>

      <div className={`${eenBoxie} flex-col`}>
        {activities.map((activity) => {
          return (
            <div
              className="flex border-b-2 last:border-0 border-white pt-2 pb-2"
              key={activity.timeTitle}
            >
              <div className="flex justify-between pb-1">{activity.icon}</div>

              <div className="flex flex-col font-normal pl-2">
                <div className="font-bold">{activity.timeTitle}</div>

                {activity.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
