import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "s-maxage=86400");

  const MASTODON_META = {
    subject: "acct:coryd@social.lol",
    aliases: [
      "https://coryd.dev",
      "https://social.lol/@coryd",
      "https://social.lol/users/coryd",
    ],
    links: [
      {
        rel: "http://webfinger.net/rel/avatar",
        type: "image/webp",
        href: "https://coryd.dev/static/images/avatar.webp",
      },
      {
        rel: "http://webfinger.net/rel/profile-page",
        type: "text/html",
        href: "https://coryd.dev",
      },
      {
        rel: "http://webfinger.net/rel/profile-page",
        type: "text/html",
        href: "https://social.lol/users/coryd",
      },
      {
        rel: "self",
        type: "application/activity+json",
        href: "https://social.lol/users/coryd",
      },
      {
        rel: "http://ostatus.org/schema/1.0/subscribe",
        template: "social.lol/authorize_interaction?uri={uri}",
      },
    ],
  };

  res.status(200).json(MASTODON_META);
}
