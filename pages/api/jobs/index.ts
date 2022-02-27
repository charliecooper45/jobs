import { JobsResponse } from "@/types/index";
import { Status } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { timeout } from "../utils";

// GET /api/jobs
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<JobsResponse>
) {
  await timeout(2000);
  const jobs = await prisma.job.findMany({
    include: { skills: true },
  });

  // TODO: move to the DB when adding pagination
  const keys = Object.keys(Status);
  jobs.sort((jobOne, jobTwo) => {
    return keys.indexOf(jobOne.status) - keys.indexOf(jobTwo.status);
  });

  res.status(200).json(jobs);
}
