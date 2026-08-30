"use client";
import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import { CountDownTimer } from "@/app/2026/CountDownTimer";
import moment from "moment";
import { ContentBlock } from "@/app/2026/ContentBlock";
import { DayPlanningPanel } from "@/app/2026/DayPlanningPanel";
import { LocationBlock } from "./LocationBlock";
import { AGENDA } from "@/app/2026/data/agenda";

import carpoolData from "@/app/2026/data/carpool.json";
import locationData from "./data/location.json";
import { MenuLogo } from "@/app/2026/MenuLogo";
import {
  AccessTime,
  CalendarMonth,
  DirectionsCar,
  Hotel,
} from "@mui/icons-material";
import { AftreckiPanelWrapper } from "@/app/2026/AftreckiPanelWrapper";
import { AftreckiPanel } from "@/app/2026/AftreckiPanel";
import ActivitiesSection from "./ActivitiesSection";

const Page: FunctionComponent = () => {
  const timeToCountdown = moment("2026-09-04T17:00:00+02:00");

  const locationRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const carpoolRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="grid justify-center min-h-screen"
      style={{ scrollbarWidth: "none", overflowX: "hidden" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=EB+Garamond"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display"
      />

      {/* Achtergrond */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src={"/2026/vosgesAdjusted.jpg"}
          alt="vosgesAdjusted"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="z-25 flex justify-center fixed top-4 right-4">
          <MenuLogo
            data={[
              {
                ref: topRef,
                icon: (
                  <AccessTime
                    style={{ width: "30px", height: "30px", color: "white" }}
                  />
                ),
              },
              {
                ref: locationRef,
                icon: (
                  <Hotel
                    style={{ width: "30px", height: "30px", color: "white" }}
                  />
                ),
              },
              {
                ref: scheduleRef,
                icon: (
                  <CalendarMonth
                    style={{ width: "30px", height: "30px", color: "white" }}
                  />
                ),
              },
              {
                ref: carpoolRef,
                icon: (
                  <DirectionsCar
                    style={{ width: "30px", height: "30px", color: "white" }}
                  />
                ),
              },
            ]}
          />
        </div>

        <div className="relative z-10 min-h-screen">
          <div className="z-25 flex justify-center">
            <div className="flex flex-col justify-center h-screen font-bold">
              <div className="flex items-center justify-center font-(family-name:--my-font-header) text-5xl text-white uppercase mb-4">
                <strong>Bastogne</strong>
              </div>

              <CountDownTimer timeToCountdown={timeToCountdown} />
            </div>
          </div>
        </div>

        <ContentBlock>
          <div className="flex flex-col justify-center items-center">
            <p className="max-w-4xl text-center text-xl font-semibold rotate-3">
              Accomodatie
            </p>
          </div>
        </ContentBlock>

        <LocationBlock data={locationData as LocationData} ref={locationRef} />

        <div className="flex h-25" />
        <ContentBlock inverseRotate>
          <div className="flex flex-col justify-center items-center">
            <p className="max-w-4xl text-center text-xl font-semibold -rotate-3">
              Activiteiten
            </p>
          </div>
        </ContentBlock>
        <div className="flex h-15" />
        <div className="flex flex-wrap row-gap-16 justify-center z-10 w-full">
          <ActivitiesSection />
        </div>
        <div className="flex h-25" />
        <ContentBlock>
          <div className="flex flex-col justify-center items-center">
            <p className="max-w-4xl text-center text-xl font-semibold rotate-3">
              Agenda
            </p>
          </div>
        </ContentBlock>
        <div
          ref={scheduleRef}
          className="flex flex-wrap row-gap-16 justify-center z-10 text-white font-semibold w-full"
        >
          <AftreckiPanelWrapper>
            {AGENDA.map((dayWithActivities) => (
              <DayPlanningPanel
                key={dayWithActivities.title}
                dateTitle={dayWithActivities.title}
                activities={dayWithActivities.events}
              />
            ))}
          </AftreckiPanelWrapper>
        </div>
        <div className="flex h-25" />
        <ContentBlock inverseRotate>
          <div className="flex flex-col justify-center items-center">
            <p className="max-w-4xl text-center text-xl font-semibold -rotate-3">
              Carpoolschema
            </p>
          </div>
        </ContentBlock>
        <div
          ref={carpoolRef}
          className="flex flex-wrap row-gap-16 justify-center z-10 text-white font-semibold w-full"
        >
          <AftreckiPanelWrapper>
            {carpoolData.map((car) => (
              <AftreckiPanel
                key={car.carName}
                title={
                  <div className="flex flex-col items-center">
                    <div>{car.owner + "'s"}</div>
                    <div>{car.carName.toUpperCase()}</div>
                  </div>
                }
              >
                {car.passengers.map((passenger) => (
                  <div key={passenger}>{passenger}</div>
                ))}
              </AftreckiPanel>
            ))}
          </AftreckiPanelWrapper>
        </div>
        <div className="flex h-25" />
      </div>
    </div>
  );
};

export default Page;
