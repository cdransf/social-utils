import { extract } from "@extractus/feed-extractor";
import siteMetadata from "@/data/siteMetadata";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const limit = parseInt(req.query.limit?.toString()) || 10;
  const KEY = process.env.API_KEY_TRAKT;
  const env = process.env.NODE_ENV;
  let host = siteMetadata.siteUrl;
  if (env === "development") host = "http://localhost:3000";
  const url = `${host}/feeds/tv?slurm=${KEY}`;
  const result = await extract(url, {
    getExtraEntryFields: (feedEntry) => {
      return {
        image: feedEntry["media:content"]["@_url"],
        thumbnail: feedEntry["media:thumbnail"]["@_url"],
      };
    },
  });
  result.entries = result.entries.splice(0, limit);
  res.json(result);
}
