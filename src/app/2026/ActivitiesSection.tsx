"use client";

import { useState, useEffect } from "react";
import { ActivityModal } from "./ActivityModal";
import { ActivityFilter } from "./components/ActivityFilter";
import { ActivityList } from "./components/ActivityList";
import { NewActivityButton } from "./components/NewActivityButton";
import { fetchActivitiesFromCSV, Activity } from "./utils/fetchActivities";

export default function ActivitiesSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const fetchedActivities = await fetchActivitiesFromCSV();
        setActivities(fetchedActivities.length > 0 ? fetchedActivities : []);
      } catch (error) {
        console.error(
          "Error loading activities from CSV, using fallback:",
          error,
        );
        setActivities([]);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  // Filter activities based on the selected type
  const filteredActivities = selectedType
    ? activities.filter((activity) => activity.types.includes(selectedType))
    : activities;

  if (loading) {
    return (
      <div className="bg-bermuda p-4 sm:p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto flex flex-col gap-6">
        <div className="text-center py-8 text-slate-700 font-medium">
          Activiteiten worden geladen...
        </div>
      </div>
    );
  }

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
