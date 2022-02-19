import { Job } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  const jobs = await prisma.job.findMany();
  res.status(200).json(jobs);
}
