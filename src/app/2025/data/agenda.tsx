import {
    AirlineStops,
    DirectionsCar,
    Luggage,
    LocalGroceryStore,
    SelfImprovement,
    Attractions,
    HotTub,
    AssistWalker,
    Bathtub,
    DirectionsWalk,
    MedicationLiquid,
    LockClock,
    WaterDamage,
    ThumbsUpDown,
    Cake,
    CrisisAlert, Celebration, DinnerDining,
} from "@mui/icons-material";
import {ReactElement} from "react";

export type DayActivity = {
    icon: ReactElement;
    timeTitle: string;
    description: string;
};

export const AGENDA: { title: string; events: DayActivity[] }[] = [
    {
        title: "20 September",
        events: [
            {
                timeTitle: "09:00",
                description: "Vertrek uit Utrecht!",
                icon: <DirectionsCar/>
            },
            {
                timeTitle: "16:00",
                description: "Check-in",
                icon: <Luggage/>
            },
            {
                timeTitle: "17:00",
                description: "Boodschappen",
                icon: <LocalGroceryStore/>
            },
            {
                timeTitle: "Avond",
                description: "Wijn, eten en sauna",
                icon: <WaterDamage/>
            }
        ],
    },
    {
        title: "21 September",
        events: [
            {
                timeTitle: "09:00",
                description: "Groepsyoga",
                icon: <SelfImprovement/>,
            },
        ],
    },
    {
        title: "22 September",
        events: [
            {
                timeTitle: "10:00",
                description: "Tijdcapsule",
                icon: <LockClock/>,
            },
            {
                timeTitle: "20:00",
                description: "Wanking the stars",
                icon: <ThumbsUpDown/>
            }
        ],
    },
    {
        title: "23 September",
        events: [
            {
                timeTitle: "Hele dag",
                description: "Europapark!",
                icon: <Attractions/>,
            }
        ],
    },
    {
        title: "24 September",
        events: [
            {
                timeTitle: "13:30",
                description: "Opwarmen",
                icon: <HotTub/>,
            },
            {
                timeTitle: "14:00",
                description: "Le mile du vin",
                icon: <MedicationLiquid/>,
            },
            {
                timeTitle: "20:00",
                description: "Tim's Bursdee Bes met Tim",
                icon: <Cake/>
            }
        ],
    },
    {
        title: "25 September",
        events: [
            {
                timeTitle: "10:00",
                description: "Stadswandeling met Jop en Thomas",
                icon: <DirectionsWalk/>,
            },
            {
                timeTitle: "Hele dag",
                description: "Dagje Strasbourgh",
                icon: <AssistWalker/>,
            },
            {
                timeTitle: "18:00",
                description: "Murder Mystery Dinner",
                icon: <CrisisAlert/>
            }
        ],
    },
    {
        title: "26 September",
        events: [
            {
                timeTitle: "18:00",
                description: "Eindetentje",
                icon: <DinnerDining/>
            },
            {
                timeTitle: "21:00",
                description: "Bonte avond",
                icon: <Celebration/>
            }
        ],
    },
    {
        title: "27 September",
        events: [
            {
                timeTitle: "07:00",
                description: "Schoonmaken",
                icon: <Bathtub/>,
            },
            {
                timeTitle: "10:00",
                description: "Check-out",
                icon: <AirlineStops/>,
            },
        ],
    },
];
