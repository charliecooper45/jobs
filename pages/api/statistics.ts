import type { NextApiRequest, NextApiResponse } from "next";
import { Statistics } from "@/types/index";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Statistics>
) {
  // TODO fetch from db
  const statistics: Statistics = {
    cvSent: 12,
    interviewOne: 2,
    interviewTwo: 0,
    interviewThree: 1,
    offered: 1,
    rejected: 1,
    accepted: 0,
  };
  res.status(200).json(statistics);
}
