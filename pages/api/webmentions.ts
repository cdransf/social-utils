export default async function handler(req: any, res: any) {
  const KEY_CORYD = process.env.API_KEY_WEBMENTIONS_CORYD_DEV;
  const KEY_BLOG = process.env.API_KEY_WEBMENTIONS_BLOG_CORYD_DEV;
  const DOMAIN = req.query.domain;
  const TARGET = req.query.target;
  const data = await fetch(
    `https://webmention.io/api/mentions.jf2?token=${
      DOMAIN === "coryd.dev" ? KEY_CORYD : KEY_BLOG
    }${TARGET ? `&target=${TARGET}` : ""}&per-page=1000`
  ).then((response) => response.json());
  res.json(data);
}
