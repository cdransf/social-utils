import { MASTODON_INSTANCE } from "./config";
const KEY = process.env.API_KEY_MASTODON;

const createMastoPost = async (content: string) => {
  const formData = new FormData();
  formData.append("status", content);

  const res = await fetch(`${MASTODON_INSTANCE}/api/v1/statuses`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: formData,
  });
  return res.json();
};

export default createMastoPost;
