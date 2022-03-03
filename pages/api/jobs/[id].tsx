import { JobResponse } from "@/types/index";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { timeout } from "../utils";

// PATCH /api/jobs/:id
const handlePatch = async (
  req: NextApiRequest,
  res: NextApiResponse<JobResponse>
) => {
  const job = await prisma.job.update({
    where: {
      id: String(req.query.id),
    },
    data: {
      ...req.body,
    },
    include: {
      skills: true,
    },
  });
  res.status(200).json(job);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobResponse>
) {
  await timeout(2000);

  if (req.method === "PATCH") {
    await handlePatch(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
