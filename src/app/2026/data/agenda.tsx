import { Bungalow, FlightTakeoff, TimeToLeave } from "@mui/icons-material";
import { ReactElement } from "react";

export type DayActivity = {
  icon: ReactElement;
  timeTitle: string;
  description: string;
};

export const AGENDA: { title: string; events: DayActivity[] }[] = [
  {
    title: "4 september",
    events: [
      {
        timeTitle: "",
        description: "Vertrek (zie carpoolrooster)!",
        icon: <TimeToLeave />,
      },
      {
        timeTitle: "17:00",
        description: "Check-in huisje",
        icon: <Bungalow />,
      },
    ],
  },
  {
    title: "11 september",
    events: [
      {
        timeTitle: "Vertrek",
        description: "Vertrek (zie carpoolrooster)!",
        icon: <TimeToLeave />,
      },
    ],
  },
];
