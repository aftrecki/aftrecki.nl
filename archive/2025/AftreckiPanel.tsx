import {FunctionComponent, PropsWithChildren, ReactElement, Ref} from "react";

type Props = {
    title: ReactElement;
    ref?: Ref<HTMLDivElement>;
};

export const AftreckiPanel: FunctionComponent<PropsWithChildren<Props>> = ({
                                                                               title,
                                                                               ref,
                                                                               children
                                                                           }) => {
    const eenBoxie =
        "flex bg-bermuda p-4 rounded-md shadow-md min-w-[225px] max-w-[340px] w-9/10";

    return (
        <div className="grid grid-rows-[auto_1fr] p-2 w-full justify-items-center" ref={ref}>
            <div
                className={`${eenBoxie} font-bold justify-center tracking-wider mb-2`}
            >
                {title}
            </div>

            <div className={`${eenBoxie} flex-col`}>
                {children}
            </div>
        </div>
    );
};
