"use client";

import { useState } from "react";
import activities from "@/app/2026/data/activities.json";
import { ActivityModal } from "./ActivityModal";
import { ActivityFilter } from "./components/ActivityFilter";
import { ActivityList } from "./components/ActivityList";
import { NewActivityButton } from "./components/NewActivityButton";

export default function ActivitiesSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter activities based on the selected type
  const filteredActivities = selectedType
    ? activities.filter((activity) => activity.types.includes(selectedType))
    : activities;

  return (
    <div className="bg-bermuda p-4 sm:p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto flex flex-col gap-6">
      <ActivityFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        activities={activities}
      />

      <ActivityList activities={filteredActivities} />

      <NewActivityButton onClick={() => setIsModalOpen(true)} />

      <ActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
