import {CSSProperties, FunctionComponent, ReactElement} from "react";

export type DayActivity =  {
        icon: ReactElement;
        timeTitle: string;
        description: string;
};

type Props = {
    dateTitle: string;
    activities: DayActivity[];
}

export const DayPlanningPanel: FunctionComponent<Props> = ({dateTitle, activities}) => {
    const eenBoxie: CSSProperties = {
        display: "flex",
        backgroundColor: "rgb(64,118,166, 0.95)",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
        minWidth: "225px",
        maxWidth: "340px",
    }

    return <div style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        padding: "8px",
    }}>
        <div style={{
            ...eenBoxie,
            fontWeight: "bold",
            justifyContent: "center",
            letterSpacing: "1px",
            marginBottom: "8px",
        }}>
            {dateTitle.toUpperCase()}
        </div>
        <div style={{
            ...eenBoxie,
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "stretch"
        }}>
            {activities.map((activity, index) => {
                return <div style={{
                    display: "flex",
                    borderBottom: index !== activities.length - 1 ? "1px solid white" : undefined,
                    marginBottom: index !== activities.length - 1 ? "8px" : undefined,
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "4px",
                    }}>
                        {activity.icon}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        fontWeight: "normal",
                        paddingLeft: "4px"
                    }}>
                        <div style={{
                            fontWeight: "bold"
                        }}>
                            {activity.timeTitle}
                        </div>

                        {activity.description}
                    </div>
                </div>
            })}
        </div>
    </div>
}