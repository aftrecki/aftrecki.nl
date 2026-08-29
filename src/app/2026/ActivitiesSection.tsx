"use client";

import { useState } from "react";
import activities from "@/app/2026/data/activities.json";
import { Map, DirectionsCar, FilterList } from "@mui/icons-material";
import { ActivityModal } from "./ActivityModal";

const ALL_TYPES = ["Culinair", "Natuur", "Museum", "Dorp", "Cultureel", "Bier"];

function renderType(type: string) {
  const baseStyle =
    "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide";

  switch (type) {
    case "Culinair":
      return (
        <div
          key={type}
          className={`${baseStyle} bg-orange-100 text-orange-800`}
        >
          👩‍🍳 Culinair
        </div>
      );
    case "Natuur":
      return (
        <div
          key={type}
          className={`${baseStyle} bg-emerald-100 text-emerald-800`}
        >
          🌲 Natuur
        </div>
      );
    case "Museum":
      return (
        <div
          key={type}
          className={`${baseStyle} bg-purple-100 text-purple-800`}
        >
          🖼 Museum
        </div>
      );
    case "Dorp":
      return (
        <div
          key={type}
          className={`${baseStyle} bg-indigo-100 text-indigo-800`}
        >
          🏘 Dorp
        </div>
      );
    case "Cultureel":
      return (
        <div key={type} className={`${baseStyle} bg-rose-100 text-rose-800`}>
          🧫 Cultureel
        </div>
      );
    case "Bier":
      return (
        <div key={type} className={`${baseStyle} bg-amber-100 text-amber-800`}>
          🍻 Bier
        </div>
      );
    default:
      return (
        <div key={type} className={`${baseStyle} bg-slate-100 text-slate-800`}>
          Fix je json
        </div>
      );
  }
}

export function NewActivityForm() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe1EMc-qk3aKaWFCmiDpGA_Khb-n9HqWLM9RJBmqS7mcC6Arg/viewform?embedded=true"
        className="w-full h-full"
        style={{ width: "100%", height: "100%", minHeight: "80vh" }}
        title="Nieuwe activiteit voorstellen"
      >
        Laden…
      </iframe>
    </div>
  );
}

export default function ActivitiesSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter activities based on the selected type
  const filteredActivities = selectedType
    ? activities.filter((activity) => activity.types.includes(selectedType))
    : activities;

  return (
    <div className="bg-bermuda p-4 sm:p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto flex flex-col gap-6">
      {/* Filter Header & Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
          <FilterList fontSize="small" />
          <span>Filter op type:</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
              selectedType === null
                ? "bg-slate-800 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Alle ({activities.length})
          </button>

          {ALL_TYPES.map((type) => {
            const count = activities.filter((a) =>
              a.types.includes(type),
            ).length;
            if (count === 0) return null; // Skip if no activities match this type

            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedType === type
                    ? "bg-slate-800 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type} ({count})
              </button>
            );
          })}
        </div>
      </div>
      {/* Activities List */}
      <div className="flex flex-col gap-3 max-h-[32rem] overflow-y-auto pr-2 pb-2">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-8 text-slate-700 font-medium bg-white/50 rounded-2xl">
            Geen activiteiten gevonden voor deze selectie.
          </div>
        ) : (
          filteredActivities.map((activity) => (
            <div
              key={activity.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                    {activity.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activity.types.map(renderType)}
                  </div>
                </div>

                <div className="flex items-center text-sm text-slate-500 font-medium">
                  <DirectionsCar
                    fontSize="small"
                    className="mr-1.5 opacity-70"
                  />
                  {activity.minsDriving} minuten rijden
                </div>
              </div>

              <a
                href={activity.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-slate-200 shrink-0"
              >
                <span>Maps</span>
                <Map fontSize="small" />
              </a>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="font-semibold text-1xl text-center cursor-pointer bg-white/80 py-4 rounded-xl hover:bg-white transition-all"
      >
        Nieuwe activiteit gevonden? Stel hem voor!
      </button>

      <ActivityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
