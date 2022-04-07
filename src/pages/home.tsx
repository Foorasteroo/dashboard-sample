import Dashboard from "@/layouts/dashboard";
import PodOnlineStatus from "@/components/podOnlineStatus";
import InfoCardList from "@/components/infoCardList";

export default function Home() {
  return (
    <Dashboard>
      <PodOnlineStatus />
      <InfoCardList />
    </Dashboard>
  );
}
