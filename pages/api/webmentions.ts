import loadWebmentions from "@/lib/webmentions";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const target = req.query.target;
  const response = await loadWebmentions(target?.toString());
  res.json(response);
}
