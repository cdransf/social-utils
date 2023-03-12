export default async function loadWebmentions(target: string) {
  const KEY_CORYD = process.env.API_KEY_WEBMENTIONS_CORYD_DEV;
  const data = await fetch(
    `https://webmention.io/api/mentions.jf2?token=${KEY_CORYD}&target=${target}&per-page=1000`
  ).then((response) => response.json());
  return data;
}
