import siteMetadata from "@/data/siteMetadata";

export default async function handler(req: any, res: any) {
  const env = process.env.NODE_ENV;
  let host = siteMetadata.siteUrl;
  if (env === "development") host = "http://localhost:3000";
  const ARTIST = req.query.artist;
  const ALBUM = req.query.album;
  const MEDIA = ARTIST ? "artists" : "albums";
  const MEDIA_VAL = ARTIST ? ARTIST : ALBUM;

  const data = await fetch(`${host}/media/${MEDIA}/${MEDIA_VAL}.jpg`)
    .then((response) => {
      if (response.status === 200)
        return `${host}/media/${MEDIA}/${MEDIA_VAL}.jpg`;
      fetch(
        `${host}/api/omg/paste-edit?paste=404-images&editType=append&content=${MEDIA_VAL}`
      ).then((response) => response.json());
      return `${host}/media/404.jpg`;
    })
    .then((image) => image);
  res.redirect(data);
}
