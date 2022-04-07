import { createContext, FC, useEffect, useState } from "react";
import { PodStats } from "@/types/dashboard";
import { fetchStats } from "@/services/dashboardService";

interface PodStatsContext {
  isLoading: boolean;
  podStats: PodStats | undefined;
}

const DEFAULT_CONTEXT: PodStatsContext = {
  isLoading: false,
  podStats: undefined,
};

export const PodStatsCtx = createContext<PodStatsContext>(DEFAULT_CONTEXT);

export const StatsProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [podStats, setPodStats] = useState<PodStats>();

  useEffect(() => {
    if (podStats) return;

    setIsLoading(true);

    fetchStats()
      .then((data) => setPodStats(data))
      .finally(() => setIsLoading(false));
  }, [podStats]);

  const state: PodStatsContext = {
    isLoading,
    podStats,
  };

  return <PodStatsCtx.Provider value={state}>{children}</PodStatsCtx.Provider>;
};
