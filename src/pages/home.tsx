import Dashboard from "@/layouts/dashboard";
import { usePodStats } from "@/hooks/usePodStats";
import InfoCard from "@/components/infoCard";

export default function Home() {
  const { isLoading, podStats } = usePodStats();

  const { stats } = podStats || {};

  return (
    <Dashboard>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <InfoCard
          title="Total Deliveries"
          variant="teal"
          footer="25% improvement"
        >
          {stats?.totalDeliveries}
        </InfoCard>
        <InfoCard
          title="Total Time in Pod"
          variant="emerald"
          footer="25% improvement"
        >
          {stats?.totalTimeInPod}
        </InfoCard>
        <InfoCard title="Total Users" variant="cyan" footer="25% improvement">
          {stats?.totalUsers}
        </InfoCard>
      </div>
    </Dashboard>
  );
}
