import {FunctionComponent, PropsWithChildren} from "react";
import {useMediaQuery} from "@mui/material";

export const DayPlanningPanelWrapper: FunctionComponent<PropsWithChildren> = ({children}) => {
    const isBigScreen = useMediaQuery('(min-width:820px)')

    return <div style={{
        display: "grid",
        width: isBigScreen ? "70%" : "100%",
        margin: isBigScreen ? "0 15%" : "0",
        gap: isBigScreen ? "70px 0" : "30px 0",
        justifyContent: "center",
        gridTemplateColumns: isBigScreen ? "repeat(auto-fill, minmax(300px, 1fr))" : "1fr"
    }}>
        {children}
    </div>
}