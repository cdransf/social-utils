import loadNowData from "@/lib/now";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const endpoints = req.query.endpoints as string;
  const response = await loadNowData(endpoints);
  res.json(response);
}
