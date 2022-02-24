import { JobsResponse } from "@/types/index";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { timeout } from "./utils";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<JobsResponse>
) {
  await timeout(2000);
  const jobs = await prisma.job.findMany({
    include: { skills: true },
  });
  res.status(200).json(jobs);
}
