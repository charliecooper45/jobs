import { JobsResponse } from "@/types/index";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<JobsResponse>
) {
  const jobs = await prisma.job.findMany({
    include: { skills: true },
  });
  res.status(200).json(jobs);
}
