"use client";

import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {ContentBlock} from "./ContentBlock";

type Props = {
    data: LocationData;
};

export const LocationBlock: FunctionComponent<PropsWithChildren<Props>> = ({
                                                                               data,
                                                                           }: Props) => {

    const widthBorder = 700;
    const [smallscreen, setSmallscreen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSmallscreen(window.innerWidth < widthBorder)
        });

    })

    return (
        <ContentBlock background>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: smallscreen ? "column" : "row",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        color: "black",
                        padding: "24px",
                        maxWidth: "700px"
                    }}
                >
                    <img
                        style={{width: smallscreen ? "100%" : "40%", objectFit: "cover", borderRadius: "8px"}}
                        src={data.thumbnail}
                        alt="Villa"
                    />

                    <div
                        style={{
                            display: "flex",
                            width: smallscreen ? "100%" : "60%",
                            flexDirection: "column",
                            flex: 2,
                            alignItems: "center",
                            padding: "0 16px",
                        }}
                    >
                        <h2
                            style={{
                                width: "100%",
                                fontSize: "22px",
                                fontWeight: "bold",
                            }}
                        >
                            {data.title}
                        </h2>

                        <p
                            style={{
                                marginTop: "16px",
                                paddingLeft: smallscreen ? 0 : "16px",
                            }}
                        >
                            {data.description}
                        </p>

                        <ul
                            style={{
                                width: "100%",
                                listStyleType: "initial",
                                paddingLeft: "32px",
                                marginTop: "16px",
                                marginBottom: "8px",
                            }}
                        >
                            {data.utilities.map((utility, index) => (
                                <li key={index}>{utility}</li>
                            ))}
                        </ul>

                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                gap: "8px",
                                marginTop: "8px",
                            }}
                        >
                            <a
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "rgb(64,118,166)",
                                    borderRadius: "8px",
                                    fontWeight: "bold",
                                    color: "white",
                                    padding: "8px 16px",
                                }}
                                href={data.advertisementUrl}
                                target="_blank"
                            >
                                Advertentie
                            </a>
                            <a
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "rgb(64,118,166)",
                                    borderRadius: "8px",
                                    fontWeight: "bold",
                                    color: "white",
                                    padding: "8px 16px",
                                }}
                                href={data.locationUrl}
                                target="_blank"
                            >
                                Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ContentBlock>
    );
};
