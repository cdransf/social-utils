export default async function handler(req: any, res: any) {
  const KEY = process.env.API_KEY_LASTFM;
  const METHODS: { [key: string]: string } = {
    default: "user.getrecenttracks",
    albums: "user.gettopalbums",
    artists: "user.gettopartists",
  };
  const METHOD = METHODS[req.query.type] || METHODS["default"];
  const data = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=${METHOD}&user=cdme_&api_key=${KEY}&limit=${
      req.query.limit || 20
    }&format=${req.query.format || "json"}&period=${
      req.query.period || "overall"
    }`
  ).then((response) => response.json());
  res.json(data);
}
