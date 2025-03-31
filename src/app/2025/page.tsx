"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { CountDownTimer } from "@/app/2025/CountDownTimer";
import moment from "moment";
import { ContentBlock } from "@/app/2025/ContentBlock";
import { DayPlanningPanel } from "@/app/2025/DayPlanningPanel";
import { LocationBlock } from "./LocationBlock";
import { AGENDA } from "@/app/2025/data/agenda";
import { Splash } from "./Splash";

import locationData from "./data/location.json";

const Page: FunctionComponent = () => {
  const timeToCountdown = moment("2025-09-20T00:00:00+01:00");

  return (
    <div
      className="grid justify-center h-screen overflow-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <Splash />
      <Image
        src={"/2025/hetMeerInDeBuurt.jpg"}
        alt="HetHuis"
        fill
        objectFit={"cover"}
      />
      <div className="flex flex-col justify-center z-10 h-screen font-bold">
        <div className="flex items-center justify-center font-[EB-Garamond] text-5xl text-white uppercase mb-4">
          <strong>Vosges</strong>
        </div>

        <CountDownTimer timeToCountdown={timeToCountdown} />
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
      <LocationBlock data={locationData as LocationData} />
      <ContentBlock
        background={false}
        className="flex flex-wrap gap-y-16 justify-center"
      >
        {AGENDA.map((dayWithActivities) => (
          <DayPlanningPanel
            key={dayWithActivities.title}
            dateTitle={dayWithActivities.title}
            activities={dayWithActivities.events}
          />
        ))}
      </ContentBlock>
    </div>
  );
};

export default Page;
