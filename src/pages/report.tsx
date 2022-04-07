import { useEffect } from "react";
import Dashboard from "@/layouts/dashboard";
import { fetchStats } from "@/services/dashboardService";

export default function Report() {
  useEffect(() => {
    fetchStats().then((stats) => {
      console.log(stats);
    });
  });

  return <Dashboard>comming soon</Dashboard>;
}
