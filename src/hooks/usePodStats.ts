import { useContext } from "react";
import { PodStatsCtx } from "@/contexts/podStatsContext";

export const usePodStats = () => useContext(PodStatsCtx);
