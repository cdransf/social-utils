import syndicate from "@/lib/syndicate";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const HOST_KEY = process.env.VERCEL_SYNDICATE_KEY;
  const CLIENT_KEY = req.headers.authorization?.split(" ")[1];
  const init = req.query.init?.toString();

  try {
    if (HOST_KEY === CLIENT_KEY) {
      await syndicate(init);
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
