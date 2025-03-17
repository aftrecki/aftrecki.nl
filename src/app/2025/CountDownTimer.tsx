"use client";
import {FunctionComponent, useEffect, useState} from "react";
import moment, {Moment} from "moment";

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
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gridGap: "16px",
                color: "white",
            }}
        >
            <NumberOfCounter title={"maanden"} numberToShow={duration.months()}/>
            <NumberOfCounter title={"dagen"} numberToShow={duration.days()}/>
            <NumberOfCounter title={"uren"} numberToShow={duration.hours()}/>
            <NumberOfCounter title={"minuten"} numberToShow={duration.minutes()}/>
            <NumberOfCounter title={"seconde"} numberToShow={duration.seconds()}/>
        </div>
    );
};

export const NumberOfCounter: FunctionComponent<{ numberToShow: number, title: string }> = ({numberToShow, title}) => {

    const [numberArray, setNumberArray] = useState<string[]>([])

    useEffect(() => {
        setNumberArray(numberToShow.toString(10).padStart(2, "0").split(""))
    }, [numberToShow]);

    return <div style={{
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto",
        gridGap: "8px",
        justifyItems: "center"
    }}>
        {numberArray.map((number, index) => <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 1fr",
                    gridColumn: `${index + 1} / ${index + 2}`
                }}
                key={`rotop met je key ${index}`}>

                <div style={{
                    gridColumn: "1 / 2",
                    gridRow: "1 /2",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                    height: "100%",
                    width: "100%",
                    zIndex: 2
                }}/>

                <div style={{
                    gridColumn: "1 / 2",
                    gridRow: "1 / 3",
                    border: "1px solid lightgrey",
                    borderRadius: "4px",
                    padding: "16px",
                    backgroundColor: "rgba(00, 00, 00, 0.8)"
                }}>{number}</div>
            </div>
        )}

        <div style={{
            display: "flex",
            gridRow: "2 / 3",
            gridColumn: "1 / end",
            backgroundColor: "rgba(00, 00, 00, 0.8)",
            justifyContent: "center",
            padding: "0px 8px",
            border: "1px solid lightgrey",
            fontSize: "20px",
            borderRadius: "4px",
            width: "100%"
        }}>{title}</div>
    </div>
}