import type { NextApiRequest, NextApiResponse } from "next";
import { seed } from "prisma/seed/seed";
import { prisma } from "../../lib/prisma";

type SeedResponse = {
  status: "complete" | "failed";
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SeedResponse>
) {
  try {
    await seed(prisma);
    res.status(200).json({
      status: "complete",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "failed",
    });
  }
}
