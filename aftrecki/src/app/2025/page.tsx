import Image from "next/image";
import {FunctionComponent} from "react";
import {CountDownTimer} from "@/app/2025/CountDownTimer";

const Page: FunctionComponent = () => {
    return <div style={{display: 'grid', justifyContent: 'center', height: "100vh", overflow: "scroll"}}>
        <Image
            style={{}}
            src={'/hetHuis.png'}
            alt="HetHuis"
            fill
            objectFit={'cover'}
        />
        <div style={{zIndex: 10, height: "100vh", fontSize: "30px", fontWeight: "bold", alignContent: "center"}}>
            <CountDownTimer timeToCountdown={new Date("2025-09-20")}/>
        </div>
    </div>
}

export default Page