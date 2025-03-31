import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
  className?: string;
  background?: boolean;
  title?: string;
};

export const ContentBlock: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className,
  background = true,
  title,
}) => {
  return (
    <>
      <div
        className={`w-screen z-10 text-white font-semibold p-12 ${
          background ? "bg-bermuda shadow-lg" : ""
        } ${className ?? ""}`}
      >
        {title && (
          <div className="flex text-2xl font-bold justify-center">
            {title.toUpperCase()}
          </div>
        )}

        {children}
      </div>
      <div className="h-12 w-screen z-10" />
    </>
  );
};
