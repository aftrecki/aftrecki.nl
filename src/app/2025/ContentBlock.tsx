import {CSSProperties, FunctionComponent, PropsWithChildren} from "react";

type Props = {
    style?: CSSProperties;
    background?: boolean;
    title?: string;
}

export const ContentBlock: FunctionComponent<PropsWithChildren<Props>> = ({children, style, background = true, title}) => {
    return <div
        style={{
            width: "100vw",
            zIndex: 10,
            color: "#ffffff",
            fontWeight: "500",
            padding: "48px 24px",
            marginBottom: "48px",
            backgroundColor: background ? "rgb(64,118,166, 0.8)" : "transparent",
            boxShadow: background ? "0px 0px 15px rgba(0,0,0,0.5)" : undefined,
            ...style
        }}>

        {title &&
            <div style={{
                display: "flex",
                fontSize: "22px",
                fontWeight: "bold",
                justifyContent: "center"
            }}>{title.toUpperCase()}</div>
        }

        {children}
    </div>
}