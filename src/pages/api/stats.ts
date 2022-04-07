import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockedData = {
    pod: {
      locationName: {
        podName: {
          podOnlineStatus: true,
        },
      },
    },
    stats: {
      totalDeliveries: 38,
      totalTimeInPod: 748,
      totalUsers: 1552,
    },
  };

  res.status(200).json(mockedData);
}
