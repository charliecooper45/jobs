import type { NextApiRequest, NextApiResponse } from "next";
import { Statistics } from "@/types/index";
import { timeout } from "./utils";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Statistics>
) {
  await timeout(1000);
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
