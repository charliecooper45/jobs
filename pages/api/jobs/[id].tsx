import { JobResponse } from "@/types/";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { timeout } from "../utils";

// PATCH /api/jobs/:id
const handlePatch = async (
  req: NextApiRequest,
  res: NextApiResponse<JobResponse>
) => {
  const user = await prisma.job.update({
    where: {
      id: String(req.query.id),
    },
    data: {
      ...req.body,
    },
  });
  res.status(200).json(user);
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
