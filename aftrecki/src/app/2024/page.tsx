import './page.css'
import Image from "next/image";

const Page = () => {
    return <div className="screen">
        <Image
            width={10000}
            height={10000}
            style={{width:'100%',height:'100%'}}
            src={'/hetHuis.png'}
            alt='suk mij nuts'
        />
    </div>
}

export default Page;