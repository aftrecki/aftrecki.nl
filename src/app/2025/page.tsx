"use client";
import Image from "next/image";
import {FunctionComponent, useRef} from "react";
import {CountDownTimer} from "@/app/2025/CountDownTimer";
import moment from "moment";
import {ContentBlock} from "@/app/2025/ContentBlock";
import {DayPlanningPanel} from "@/app/2025/DayPlanningPanel";
import {LocationBlock} from "./LocationBlock";
import {AGENDA} from "@/app/2025/data/agenda";
import {Splash} from "./Splash";

import locationData from "./data/location.json";
import {MenuLogo} from "@/app/2025/MenuLogo";
import {AccessTime, CalendarMonth, Hotel} from "@mui/icons-material";

const Page: FunctionComponent = () => {
    const timeToCountdown = moment("2025-09-20T00:00:00+02:00");

    const locationRef = useRef<HTMLDivElement>(null)
    const topRef = useRef<HTMLDivElement>(null)
    const scheduleRef = useRef<HTMLDivElement>(null)

    return (
        <div
            className="grid justify-center h-screen overflow-scroll"
            style={{scrollbarWidth: "none"}}
        >
            <div ref={topRef} className="h-0 w-0" />
            <Splash/>
            <Image
                src={"/2025/hetMeerInDeBuurt.jpg"}
                alt="HetHuis"
                fill
                objectFit={"cover"}
            />
            <div className="z-15 flex justify-center absolute top-4 right-4">
                <MenuLogo data={[
                    {
                        ref: topRef,
                        icon: <AccessTime style={{width: "30px", height: "30px", color: "white"}}/>
                    },
                    {
                        ref: locationRef,
                        icon: <Hotel style={{width: "30px", height: "30px", color: "white"}}/>
                    },
                    {
                        ref: scheduleRef,
                        icon: <CalendarMonth style={{width: "30px", height: "30px", color: "white"}}/>
                    }
                ]} />
            </div>
            <div className="flex flex-col justify-center z-10 h-screen font-bold">
                <div className="flex items-center justify-center font-[EB-Garamond] text-5xl text-white uppercase mb-4">
                    <strong>Vosges</strong>
                </div>

                <CountDownTimer timeToCountdown={timeToCountdown}/>
            </div>
            <ContentBlock>
                <div className="flex flex-col justify-center items-center">
                    <p className="max-w-4xl text-center">
                        ...en waar de eerste ontmoetingen van destijds nog onverbonden
                        individuen zich voltrokken in tijden van nieuwsgierige ontdekking,
                        innerlijke onrust en sociale chaos, daalt de stof rond deze kluwe
                        neer. De invulling van het collectief is onveranderd veranderlijk.
                        De veranderingsrichting is echter een uitbreiding van het zich
                        bewezen goed, als een pijl die niet langer uitwaards gekeerd is,
                        maar zich over de verzameling ontfermt en de successie van het
                        collectief waarborgt.
                    </p>
                </div>
            </ContentBlock>
            <LocationBlock data={locationData as LocationData} ref={locationRef}/>
            <ContentBlock>
                <div className="flex flex-col justify-center items-center">
                    <p className="max-w-4xl text-center">
                        De tijdelijke verhuizing vernoemd naar onanie is van dit alles een
                        accurate reflectie. Waar men zich voorheen tot in het ochtendgloren
                        laveloos waande en gegist druivensap werd genuttigd in precaire
                        omstandigheden met door het slaapkamerraam de ruis van de stad,
                        lijkt ook deze wervelwind langzaam weg te ebben. De gerieflijkheid
                        van de woonstedes die temporair worden betrokken, met hun uit hout
                        gesneden ruimtes met het kwik als focuspunt, de hoge plafonds van de
                        zalen en de wijdse velden waarin dit alles is gesitueerd. Enkel nog
                        de wilde bewegingen van het water herinneren ons aan vroeger tijden,
                        waarin de basis werd gevestigd voor onze jaarlijkse samenkomst...
                    </p>
                </div>
            </ContentBlock>
            <div ref={scheduleRef} className="flex flex-wrap row-gap-16 justify-center w-screen z-10 text-white font-semibold">
                {AGENDA.map((dayWithActivities) => (
                    <DayPlanningPanel
                        key={dayWithActivities.title}
                        dateTitle={dayWithActivities.title}
                        activities={dayWithActivities.events}
                    />
                ))}
            </div>
            <div className="flex h-25"/>
        </div>
    );
};

export default Page;
