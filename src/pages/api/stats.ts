import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockedData = {
    pod: [
      {
        locationName: "Location A",
        pods: [
          {
            podName: "Angela",
            podOnlineStatus: true,
          },
          {
            podName: "Catherine",
            podOnlineStatus: false,
          },
          {
            podName: "Brittany",
            podOnlineStatus: true,
          },
          {
            podName: "Daisy",
            podOnlineStatus: true,
          },
        ],
      },
      {
        locationName: "Location B",
        pods: [
          {
            podName: "Angela",
            podOnlineStatus: true,
          },
          {
            podName: "Catherine",
            podOnlineStatus: false,
          },
          {
            podName: "Brittany",
            podOnlineStatus: true,
          },
          {
            podName: "Daisy",
            podOnlineStatus: true,
          },
        ],
      },
      {
        locationName: "Location C",
        pods: [
          {
            podName: "Angela",
            podOnlineStatus: true,
          },
          {
            podName: "Catherine",
            podOnlineStatus: false,
          },
          {
            podName: "Brittany",
            podOnlineStatus: true,
          },
          {
            podName: "Daisy",
            podOnlineStatus: true,
          },
        ],
      },
      {
        locationName: "Location D",
        pods: [
          {
            podName: "Angela",
            podOnlineStatus: true,
          },
          {
            podName: "Catherine",
            podOnlineStatus: false,
          },
          {
            podName: "Brittany",
            podOnlineStatus: true,
          },
          {
            podName: "Daisy",
            podOnlineStatus: true,
          },
        ],
      },
      {
        locationName: "Location E",
        pods: [
          {
            podName: "Angela",
            podOnlineStatus: true,
          },
          {
            podName: "Catherine",
            podOnlineStatus: false,
          },
          {
            podName: "Brittany",
            podOnlineStatus: true,
          },
          {
            podName: "Daisy",
            podOnlineStatus: true,
          },
        ],
      },
    ],
    stats: {
      totalDeliveries: 38,
      totalTimeInPod: 748,
      totalUsers: 1552,
    },
  };

  res.status(200).json(mockedData);
}
