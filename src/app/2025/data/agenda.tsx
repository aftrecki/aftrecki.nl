import {AirlineStops, SportsBar, Hiking, CleaningServices, FreeBreakfast} from "@mui/icons-material";
import {ReactElement} from "react";

export type DayActivity = {
  icon: ReactElement;
  timeTitle: string;
  description: string;
};

export const AGENDA: {title: string, events: DayActivity[]}[] = [
  {
    title: "20 September",
    events: [
      {
        timeTitle: "Avond",
        icon: <AirlineStops />,
        description: "Aankomst",
      }
    ]
  },
  {
    title: "21 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "22 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "23 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "24 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "25 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "26 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <FreeBreakfast />,
        description: "Ochtend activiteit",
      },
      {
        timeTitle: "Middag",
        icon: <Hiking />,
        description: "Middag activiteit",
      },
      {
        timeTitle: "Avond",
        icon: <SportsBar />,
        description: "Avond activiteit",
      }
    ]
  },
  {
    title: "27 September",
    events: [
      {
        timeTitle: "Ochtend",
        icon: <CleaningServices />,
        description: "Opruimen en inpakken",
      },
      {
        timeTitle: "Middag",
        icon: <AirlineStops />,
        description: "Vertrek met voldoening",
      }
    ]
  }
]