import {FunctionComponent, useEffect, useState} from "react";
import {clearInterval} from "node:timers";

type Props = {
    timeToCountdown: Date;
}

export const CountDownTimer: FunctionComponent<Props> = ({timeToCountdown}) => {

    const [now, setNow] = useState<Date>(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date())
        }, 1)

        return () => {clearInterval(timer)}
    }, [])

    return <div style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)", justifyItems: "center"}}>
        <div>{timeToCountdown.getMonth() - now.getMonth()}</div>
        <div>{timeToCountdown.getDate() - now.getDate()}</div>
        <div>{timeToCountdown.getHours() - now.getHours()}</div>
        <div>{timeToCountdown.getMinutes() - now.getMinutes()}</div>
        <div>{timeToCountdown.getSeconds() - now.getSeconds()}</div>
    </div>
}