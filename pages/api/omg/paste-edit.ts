export default async function handler(req: any, res: any) {
  const KEY = process.env.API_KEY_OMG;
  const PASTE = req.query.paste;
  const EDIT_TYPE = req.query.editType;
  const CONTENT = req.query.content?.toLowerCase();

  if (!PASTE && (EDIT_TYPE !== "prepend" || EDIT_TYPE !== "append"))
    res.status(401).json({ success: false });

  const pasteContent = await fetch(
    `https://api.omg.lol/address/cory/pastebin/${PASTE}`
  ).then((response) => response.json());
  const data = {
    title: PASTE,
    content:
      EDIT_TYPE === "prepend"
        ? `${CONTENT}\n` + pasteContent.response.paste.content
        : pasteContent.response.paste.content + `\n${CONTENT}`,
  };

  fetch("https://api.omg.lol/address/cory/pastebin/", {
    method: "post",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  res.status(200).json({ success: true });
}
