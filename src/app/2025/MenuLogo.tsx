import {CSSProperties, FunctionComponent, ReactNode, RefObject, useState} from "react";
import Image from "next/image";

type Props = {
    style?: CSSProperties;
    data: {
        ref: RefObject<HTMLElement | null>,
        icon: ReactNode
    }[];
}

export const MenuLogo: FunctionComponent<Props> = ({data, style = {}}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const calcTranslateX = (index: number, total: number) => {
        console.log(index, total)
        return Math.cos(
            Math.PI + (
                (Math.PI / 2) * ((index) / (total - 1))
            )
        ) * 60
    }

    const calcTranslateY = (index: number, total: number) => {
        return Math.sin(
            (Math.PI / 2) * ((index) / (total - 1))
        ) * 60
    }

    return <div style={style} className="flex w-50 h-50">
        <Image
            className="z-15 flex justify-center absolute top-0 right-0"
            style={{
                transform: menuOpen ? "rotate(765deg)" : "rotate(0deg)",
                transitionTimingFunction: "cubic-bezier(0.47, 0.08, 0.45, 1.3)",
                transitionDuration: "0.8s"
            }}
            src={menuOpen ? "/2025/fap.gif" : "/2025/logo.png"}
            alt="Logo"
            width={50}
            height={50}
            onClick={() => {
                setMenuOpen(!menuOpen)
            }}
            objectFit={"cover"}/>
        {
            data.map((element, index) => {
                return <div
                    key={`menuele-${index}`}
                    className="z-14 flex justify-center absolute top-2 right-2"
                    onClick={() => {
                        if (menuOpen) {
                            element.ref.current?.scrollIntoView({behavior: "smooth", block: "end"})
                            setMenuOpen(false)
                        }
                    }}
                    style={{
                        transform: menuOpen ? `translate(${calcTranslateX(index, data.length)}px, ${calcTranslateY(index, data.length)}px) rotate(720deg)` : "translate(0,0) rotate(0deg)",
                        transitionTimingFunction: "cubic-bezier(0.47, 0.08, 0.45, 1.3)",
                        transitionDuration: "0.8s"
                    }}>
                    {element.icon}
                </div>
            })
        }
    </div>
}