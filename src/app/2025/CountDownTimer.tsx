'use client';
import {FunctionComponent, useEffect, useState} from "react";
import moment, {Moment} from "moment";

type Props = {
    timeToCountdown: Moment;
}

export const CountDownTimer: FunctionComponent<Props> = ({timeToCountdown}) => {

    const [now, setNow] = useState<Moment>(moment())

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(moment())
        }, 1)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        justifyItems: "center",
        gridGap: "16px",
        color: "white",

    }}>
        <NumberOfCounter numberToShow={moment.duration(timeToCountdown.diff(now)).get("month")}/>
        <NumberOfCounter numberToShow={moment.duration(timeToCountdown.diff(now)).get("day")}/>
        <NumberOfCounter numberToShow={moment.duration(timeToCountdown.diff(now)).get("hour")}/>
        <NumberOfCounter numberToShow={moment.duration(timeToCountdown.diff(now)).get("minute")}/>
        <NumberOfCounter numberToShow={moment.duration(timeToCountdown.diff(now)).get("second")}/>
    </div>
}

export const NumberOfCounter: FunctionComponent<{ numberToShow: number }> = ({numberToShow}) => {

    const [numberArray, setNumberArray] = useState<string[]>([])

    useEffect(() => {
        setNumberArray(numberToShow.toString(10).split(""))
    }, [numberToShow]);

    return numberArray.map(number => {
        return <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr 1fr"
        }}>
            <div style={{
                gridColumn: "1 / 2",
                gridRow: "1 /2",
                borderBottom: "1px solid lightgrey",
                height: "100%",
                width: "100%",
                zIndex: 2
            }}/>
            <div style={{
                gridColumn: "1 / 2",
                gridRow: "1 /3",
                border: "1px solid lightgrey",
                padding: "16px",
                backgroundColor: "rgba(00, 00, 00, 0.8)"
            }}>{number}</div>
        </div>
    })
}