"use client";

import {
    FunctionComponent,
    PropsWithChildren, Ref,
    useEffect,
    useState,
} from "react";
import {ContentBlock} from "./ContentBlock";

type Props = {
    data: LocationData;
    ref?: Ref<HTMLDivElement>;
};

export const LocationBlock: FunctionComponent<PropsWithChildren<Props>> = ({
                                                                               data, ref
                                                                           }: Props) => {
    const widthBorder = 700;
    const [_smallscreen, setSmallscreen] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSmallscreen(window.innerWidth < widthBorder);
        });

        setSmallscreen(window.innerWidth < widthBorder);
    });

    return (
        <ContentBlock background={false}>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row bg-white rounded-lg text-black p-6 md:p-12 max-w-4xl"
                     style={{
                         boxShadow: "rgb(30, 30, 30) 0px 0px 20px",
                }}
                     ref={ref}>
                    <img
                        className="w-full md:w-2/5 rounded-lg object-cover"
                        style={{
                            boxShadow: "rgb(40, 40, 40) 0px 0px 5px",
                            rotate: "calc(-1deg)"
                    }}
                        src={data.thumbnail}
                        alt="Villa"
                    />

                    <div
                        className="w-full flex-2 flex-col items-center  md:w-2/5 p-6 "
                    >
                        <h2 className="w-full text-2xl font-bold text-center">
                            {data.title}
                        </h2>

                        <p className="mt-4 md:mt-6 pl-0 md:pl-4">{data.description}</p>

                        <ul className="w-full list-disc pl-8 mt-4 md:mt-6 mb-2 md:mb-4">
                            {data.utilities.map((utility, index) => (
                                <li key={index}>{utility}</li>
                            ))}
                        </ul>

                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                            <a
                                className="flex w-full md:flex-1 justify-center items-center bg-bermuda rounded-lg font-bold text-white p-2 md:p-4"
                                href={data.advertisementUrl}
                                target="_blank"
                            >
                                Advertentie
                            </a>

                            <a
                                className="flex w-full md:flex-1 justify-center items-center bg-bermuda rounded-lg font-bold text-white p-2 md:p-4"
                                href={data.locationUrl}
                                target="_blank"
                            >
                                Maps
                            </a>

                            <a
                                className="flex w-full md:flex-1 justify-center items-center bg-rose-600 rounded-lg font-bold text-white p-2 md:p-4"
                                href="https://forms.gle/QqEGyuHCexeKuT7N9"
                                target="_blank">
                                Carpoolschemaform
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ContentBlock>
    );
};
