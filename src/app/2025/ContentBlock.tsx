import {FunctionComponent, PropsWithChildren} from "react";

type Props = {
    className?: string;
    background?: boolean;
    title?: string;
    inverseRotate?: boolean;
};

export const ContentBlock: FunctionComponent<PropsWithChildren<Props>> = ({
                                                                              children,
                                                                              className,
                                                                              background = true,
                                                                              inverseRotate = false,
                                                                              title,
                                                                          }) => {
    return (
        <>
            <div
                className={`w-[105vw] z-10 text-white font-semibold p-12 ${
                    background ? "bg-bermuda shadow-lg" : ""
                } ${className ?? ""}`}
                style={{rotate: `calc(3deg * ${inverseRotate ? "-1" : "1"})`}}
            >
                <div style={{rotate: `calc(3deg * ${inverseRotate ? "1" : "-1"})`}}>
                    {title && (
                        <div className="flex text-2xl font-bold justify-center">
                            {title.toUpperCase()}
                        </div>
                    )}

                    {children}
                </div>
            </div>
            <div className="h-12 w-screen z-10"/>
        </>
    );
};
