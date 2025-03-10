
import Image from "next/image";
import {FunctionComponent} from "react";

const Page: FunctionComponent = () => {
    const ratio = 1200 / 657

    return <div style={{display: 'grid', }}><Image
        style={{height:'100vh', width: `${ratio * 100}vh`}}
        width={1200}
        height={657}
        src={'/hetHuis.png'}
        alt="HetHuis"
    /></div>
}

export default Page