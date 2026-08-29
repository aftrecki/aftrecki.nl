"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NewActivityForm } from "./ActivitiesSection";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ActivityModal: FunctionComponent<ActivityModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    // Create a container for the portal if it doesn't exist
    let container = document.getElementById("modal-portal");
    if (!container) {
      container = document.createElement("div");
      container.id = "modal-portal";
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    // Cleanup function to remove the container when component unmounts
    return () => {
      if (container && container.childNodes.length === 0) {
        document.body.removeChild(container);
      }
    };
  }, []);

  if (!isOpen || !portalContainer) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-[100] p-2 sm:p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full h-full max-w-[600px] max-h-[90vh] overflow-hidden flex flex-col relative z-[101]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 relative z-10">
          <h2 className="text-xl font-bold text-slate-800">
            Nieuwe activiteit voorstellen
          </h2>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold md:hidden"
            >
              ×
            </button>
            <button
              onClick={onClose}
              className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              Sluit dit formulier
            </button>
            <button
              onClick={onClose}
              className="md:hidden bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
            >
              SLUIT
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <NewActivityForm />
        </div>
      </div>
    </div>,
    portalContainer,
  );
};
