"use client";
import { FunctionComponent, useEffect, useState } from "react";
import moment, { Moment } from "moment";

type Props = {
  timeToCountdown: Moment;
};

export const CountDownTimer: FunctionComponent<Props> = ({
  timeToCountdown,
}) => {
  const [now, setNow] = useState<Moment>(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(moment());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const diff = timeToCountdown.diff(now);
  const duration = moment.duration(diff);

  return (
    <div className="flex justify-center flex-wrap gap-4 text-white text-3xl">
      <NumberOfCounter title={"maanden"} numberToShow={duration.months()} />
      <NumberOfCounter title={"dagen"} numberToShow={duration.days()} />
      <NumberOfCounter title={"uren"} numberToShow={duration.hours()} />
      <NumberOfCounter title={"minuten"} numberToShow={duration.minutes()} />
      <NumberOfCounter title={"seconde"} numberToShow={duration.seconds()} />
    </div>
  );
};

export const NumberOfCounter: FunctionComponent<{
  numberToShow: number;
  title: string;
}> = ({ numberToShow, title }) => {
  const [numberArray, setNumberArray] = useState<string[]>([]);

  useEffect(() => {
    setNumberArray(numberToShow.toString(10).padStart(2, "0").split(""));
  }, [numberToShow]);

  return (
    <div className="grid grid-cols-[auto] grid-rows-[auto_auto] gap-2 justify-items-center">
      {numberArray.map((number, index) => (
        <div
          className="grid grid-cols-1 grid-rows-2"
          key={`rotop met je key ${index}`}
        >
          <div
            className="border-b-1 border-white/50 h-full w-full z-2"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 /2",
            }}
          />

          <div
            className="border-1 border-white/90 rounded-sm p-4 bg-black/80"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 3",
            }}
          >
            {number}
          </div>
        </div>
      ))}

      <div
        className="w-full flex justify-center border-1 border-white/90 rounded-sm pl-2 pr-2 bg-black/80 text-xl"
        style={{
          gridRow: "2 / 3",
          gridColumn: "1 / end",
        }}
      >
        {title}
      </div>
    </div>
  );
};
