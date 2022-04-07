export interface PodStats {
  pod: Pod | undefined;
  stats: Stats | undefined;
}

export interface Pod {
  locationName: LocationName;
}

export interface LocationName {
  podName: PodName;
}

export interface PodName {
  podOnlineStatus: boolean;
}

export interface Stats {
  totalDeliveries: number;
  totalTimeInPod: number;
  totalUsers: number;
}
