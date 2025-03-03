import Image from "next/image";

const Page = () => {
    return <div><Image
        width={800}
        height={800}
        src={'/hetHuis.png'}
        alt="HetHuis"
    /></div>
}

export default Page