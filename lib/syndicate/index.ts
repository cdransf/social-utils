import { toPascalCase } from "@/utils/formatters";
import { extract, FeedEntry } from "@extractus/feed-extractor";
import { PROMPTS, SERVICES, TAGS } from "./config";
import createMastoPost from "./createMastoPost";

export default async function syndicate(init?: string) {
  const TOKEN_CORYDDEV_GISTS = process.env.TOKEN_CORYDDEV_GISTS;
  const GIST_ID_SYNDICATION_CACHE = "406166f337b9ed2d494951757a70b9d1";
  const GIST_NAME_SYNDICATION_CACHE = "syndication-cache.json";
  const CLEAN_OBJECT = () => {
    const INIT_OBJECT = {};
    Object.keys(SERVICES).map((service) => (INIT_OBJECT[service] = []));
    return INIT_OBJECT;
  };

  async function hydrateCache() {
    const CACHE_DATA = CLEAN_OBJECT();
    for (const service in SERVICES) {
      const data = await extract(SERVICES[service]);
      const entries = data?.entries;
      entries.map((entry: FeedEntry) => CACHE_DATA[service].push(entry.id));
    }
    await fetch(`https://api.github.com/gists/${GIST_ID_SYNDICATION_CACHE}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${TOKEN_CORYDDEV_GISTS}`,
        "Content-Type": "application/vnd.github+json",
      },
      body: JSON.stringify({
        gist_id: GIST_ID_SYNDICATION_CACHE,
        files: {
          "syndication-cache.json": {
            content: JSON.stringify(CACHE_DATA),
          },
        },
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }

  const DATA = await fetch(
    `https://api.github.com/gists/${GIST_ID_SYNDICATION_CACHE}`
  ).then((response) => response.json());
  const CONTENT = DATA?.files[GIST_NAME_SYNDICATION_CACHE].content;

  // rewrite the sync data if init is reset
  if (CONTENT === "" || init === "true") hydrateCache();

  if (CONTENT && CONTENT !== "" && !init) {
    const existingData = await fetch(
      `https://api.github.com/gists/${GIST_ID_SYNDICATION_CACHE}`
    ).then((response) => response.json());
    const existingContent = JSON.parse(
      existingData?.files[GIST_NAME_SYNDICATION_CACHE].content
    );

    for (const service in SERVICES) {
      const data = await extract(SERVICES[service], {
        getExtraEntryFields: (feedEntry) => {
          return {
            tags: feedEntry["cd:tags"],
          };
        },
      });
      const entries: (FeedEntry & { tags?: string })[] = data?.entries;
      if (!existingContent[service].includes(entries[0].id)) {
        let tags = "";
        if (entries[0].tags) {
          entries[0].tags
            .split(",")
            .forEach((a, index) =>
              index === 0
                ? (tags += `#${toPascalCase(a)}`)
                : (tags += ` #${toPascalCase(a)}`)
            );
          tags += ` ${TAGS[service]}`;
        } else {
          tags = TAGS[service];
        }
        const prompt = PROMPTS[service];
        existingContent[service].push(entries[0].id);
        createMastoPost(
          `${prompt} ${entries[0].title} ${entries[0].link} ${tags}`
        );
        await fetch(
          `https://api.github.com/gists/${GIST_ID_SYNDICATION_CACHE}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${TOKEN_CORYDDEV_GISTS}`,
              "Content-Type": "application/vnd.github+json",
            },
            body: JSON.stringify({
              gist_id: GIST_ID_SYNDICATION_CACHE,
              files: {
                "syndication-cache.json": {
                  content: JSON.stringify(existingContent),
                },
              },
            }),
          }
        )
          .then((response) => response.json())
          .catch((err) => console.log(err));
      }
    }
  }
}
