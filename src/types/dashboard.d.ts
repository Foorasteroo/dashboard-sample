export interface PodStats {
  pod: LocationPod[] | undefined;
  stats: Stats | undefined;
}

export interface LocationPod {
  locationName: string;
  pods: Pod[] | undefined;
}

export interface Pod {
  podName: string;
  podOnlineStatus: boolean;
}

export interface Stats {
  totalDeliveries: number;
  totalTimeInPod: number;
  totalUsers: number;
}
