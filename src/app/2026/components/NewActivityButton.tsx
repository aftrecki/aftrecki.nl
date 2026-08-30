import React from "react";

interface NewActivityButtonProps {
  onClick: () => void;
}

export const NewActivityButton: React.FC<NewActivityButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="font-semibold font-black text-1xl text-center cursor-pointer bg-white/80 py-4 rounded-xl hover:bg-white transition-all"
    >
      Nieuwe activiteit gevonden? Stel hem voor! ✍
    </button>
  );
};
