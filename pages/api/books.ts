import { extract } from "@extractus/feed-extractor";
import siteMetadata from "@/data/siteMetadata";

export default async function handler(req: any, res: any) {
  const env = process.env.NODE_ENV;
  let host = siteMetadata.siteUrl;
  if (env === "development") host = "http://localhost:3000";
  const url = `${host}/feeds/books`;
  const result = await extract(url);
  res.json(result);
}
