import {FunctionComponent} from "react";
import {DayActivity} from "@/app/2025/data/agenda";
import {AftreckiPanel} from "@/app/2025/AftreckiPanel";

type Props = {
  dateTitle: string;
  activities: DayActivity[];
};

export const DayPlanningPanel: FunctionComponent<Props> = ({
  dateTitle,
  activities
}) => {
    return <AftreckiPanel title={<>{dateTitle.toUpperCase()}</>}>
        {activities.map((activity) => {
            return (
                <div
                    className="flex border-b-2 last:border-0 border-white pt-2 pb-2"
                    key={activity.description}
                >
                    <div className="flex justify-between pb-1">{activity.icon}</div>

                    <div className="flex flex-col font-normal pl-2">
                        <div className="font-bold">{activity.timeTitle}</div>

                        {activity.description}
                    </div>
                </div>
            );
        })}
    </AftreckiPanel>

  // const eenBoxie =
  //   "flex bg-bermuda p-4 rounded-md shadow-md min-w-[225px] max-w-[340px] w-9/10";
  //
  // return (
  //   <div className="grid grid-rows-[auto_1fr] p-2 w-full justify-items-center" ref={ref}>
  //     <div
  //       className={`${eenBoxie} font-bold justify-center tracking-wider mb-2`}
  //     >
  //       {dateTitle.toUpperCase()}
  //     </div>
  //
  //     <div className={`${eenBoxie} flex-col`}>
  //       {activities.map((activity) => {
  //         return (
  //           <div
  //             className="flex border-b-2 last:border-0 border-white pt-2 pb-2"
  //             key={activity.description}
  //           >
  //             <div className="flex justify-between pb-1">{activity.icon}</div>
  //
  //             <div className="flex flex-col font-normal pl-2">
  //               <div className="font-bold">{activity.timeTitle}</div>
  //
  //               {activity.description}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
