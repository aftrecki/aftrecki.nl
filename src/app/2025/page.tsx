"use client";
import Image from "next/image";
import {FunctionComponent} from "react";
import {CountDownTimer} from "@/app/2025/CountDownTimer";
import moment from "moment";
import {ContentBlock} from "@/app/2025/ContentBlock";
import {DayPlanningPanel} from "@/app/2025/DayPlanningPanel";
import {AirlineStops, SportsBar} from "@mui/icons-material";
import {LocationBlock} from "./LocationBlock";

import locationData from "./data/location.json";

const Page: FunctionComponent = () => {
    const timeToCountdown = moment("2025-09-20T00:00:00+01:00");

    return (
        <div
            style={{
                display: "grid",
                justifyContent: "center",
                height: "100vh",
                overflow: "scroll",
                scrollbarWidth: "none",
            }}
        >
            <Image
                src={"/2025/hetMeerInDeBuurt.jpg"}
                alt="HetHuis"
                fill
                objectFit={"cover"}
            />
            <div
                style={{
                    zIndex: 10,
                    height: "100vh",
                    fontSize: "30px",
                    fontWeight: "bold",
                    alignContent: "center",
                }}
            >
                <CountDownTimer timeToCountdown={timeToCountdown}/>
            </div>

            <ContentBlock>
                "50 kronen op Bizzle!", riep de ene student. Daarop volgde snel een
                tegengeluid: "50 kroon op Big T!". Zelfs jaren later kan iedereen nog in
                geuren en kleuren vertellen over deze mythische strijd. Maar waar
                speelde dit verhaal zich ook alweer af? Op die ene heuvel in Lissabon?
                Nee, dat kan het niet geweest zijn. In de disco-pub in Sint Petersburg?
                Nee, daar was niet genoeg ruimte voor. Oh, ja! Het was in Praag! Om oude
                tijden te herleven gaat de AftreCKI dit jaar een paar dagen terug naar
                Praag! Hier zoeken we de seksmachines, musea en (hopelijk) biergartens
                weer even terug. Dit keer zonder luxe diner van de sponsor of die
                schimmelige, oude kelder van het hostel.
            </ContentBlock>

            <LocationBlock data={locationData as LocationData}/>

            <ContentBlock background={false}
                          style={{display: "flex", rowGap: "16px", flexWrap: "wrap", justifyContent: "center"}}>
                <DayPlanningPanel dateTitle="20 september" activities={[
                    {
                        timeTitle: "08:00 - 11:00",
                        icon: <AirlineStops/>,
                        description: "OchtendGym"
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    }
                ]}/>
                <DayPlanningPanel dateTitle="21 september" activities={[
                    {
                        timeTitle: "08:00 - 11:00",
                        icon: <AirlineStops/>,
                        description: "OchtendGym"
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    }
                ]}/>
                <DayPlanningPanel dateTitle="20 september" activities={[
                    {
                        timeTitle: "08:00 - 11:00",
                        icon: <AirlineStops/>,
                        description: "OchtendGym"
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    }
                ]}/>
                <DayPlanningPanel dateTitle="20 september" activities={[
                    {
                        timeTitle: "08:00 - 11:00",
                        icon: <AirlineStops/>,
                        description: "OchtendGym"
                    },
                    {
                        timeTitle: "Middag",
                        icon: <SportsBar/>,
                        description: "Portdag on the road. Een gezellig uitje waar de vraag is hoe je nou thuis bent gekomen."
                    }
                ]}/>
            </ContentBlock>
        </div>
    );
};

export default Page;
