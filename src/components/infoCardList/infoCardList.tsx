import { useState } from "react";
import InfoCard from "@/components/infoCard";
import { usePodStats } from "@/hooks/usePodStats";

export default function InfoCardList() {
  const { podStats } = usePodStats();
  const [currentMode, setCurrentMode] = useState("week");
  const { stats } = podStats || {};
  const {
    totalDeliveries = 0,
    totalTimeInPod = 0,
    totalUsers = 0,
  } = stats || {};

  const onModeChange = (mode: string) => {
    setCurrentMode(mode);
  };

  let currentTotalDeliveries = totalDeliveries;
  let currentTotalTimeInPod = totalTimeInPod;
  let currentTotalUsers = totalUsers;

  if (currentMode === "month") {
    currentTotalDeliveries = totalDeliveries * 4;
    currentTotalTimeInPod = totalTimeInPod * 4;
    currentTotalUsers = totalUsers * 4;
  }

  const hours = Math.floor(currentTotalTimeInPod / 60);
  const minutes = currentTotalTimeInPod % 60;

  const totalTimeInPodText = `${hours} hours ${minutes} minutes`;

  return (
    <div className="flex flex-row flex-wrap justify-around gap-4">
      <InfoCard
        title="Total Deliveries"
        variant="teal"
        footer="25% improvement"
        value={currentTotalDeliveries}
        onModeChange={onModeChange}
        mode={currentMode}
      />
      <InfoCard
        title="Total Time in Pod"
        variant="emerald"
        footer="48% improvement"
        value={totalTimeInPodText}
        onModeChange={onModeChange}
        mode={currentMode}
      />

      <InfoCard
        title="Total Users"
        variant="cyan"
        footer="17% improvement"
        value={currentTotalUsers}
        onModeChange={onModeChange}
        mode={currentMode}
      />
    </div>
  );
}
