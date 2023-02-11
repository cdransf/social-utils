import jsYaml from "js-yaml";
import siteMetadata from "@/data/siteMetadata";
import { listsToMarkdown } from "@/utils/transforms";
import { getRandomIcon } from "@/utils/icons";
import { nowResponseToMarkdown } from "@/utils/transforms";
import { ALBUM_DENYLIST } from "@/utils/constants";

export default async function handler(req: any, res: any) {
  const env = process.env.NODE_ENV;
  const { APP_KEY_OMG, API_KEY_OMG } = process.env;
  const ACTION_KEY = req.headers.authorization?.split(" ")[1];

  let host = siteMetadata.siteUrl;
  if (env === "development") host = "http://localhost:3000";

  try {
    if (ACTION_KEY === APP_KEY_OMG) {
      const now = await fetch(
        "https://api.omg.lol/address/cory/pastebin/now.yaml"
      )
        .then((res) => res.json())
        .then((json) => {
          const now = jsYaml.load(json.response.paste.content);
          Object.keys(jsYaml.load(json.response.paste.content)).forEach(
            (key) => {
              now[key] = listsToMarkdown(now[key]);
            }
          );

          return { now };
        });

      const books = await fetch(`${host}/api/books`)
        .then((res) => res.json())
        .then((json) => {
          const data = json.entries
            .slice(0, 5)
            .map((book: { title: string; link: string }) => {
              return {
                title: book.title,
                link: book.link,
              };
            });
          return {
            json: data,
            md: data
              .map((d: any) => {
                return `- [${d.title}](${d.link}) {${getRandomIcon("books")}}`;
              })
              .join("\n"),
          };
        });

      const movies = await fetch(`${host}/api/movies`)
        .then((res) => res.json())
        .then((json) => {
          const data = json.entries
            .slice(0, 5)
            .map(
              (movie: { title: string; link: string; description: string }) => {
                return {
                  title: movie.title,
                  link: movie.link,
                  desc: movie.description,
                };
              }
            );
          return {
            json: data,
            md: data.length
              ? data
                  .map((d: any) => {
                    return `- [${d.title}](${d.link}): ${
                      d.desc
                    } {${getRandomIcon("movies")}}`;
                  })
                  .join("\n")
              : "Looks like I haven't been watching any movies :(",
          };
        });

      const tv = await fetch(`${host}/api/tv`)
        .then((res) => res.json())
        .then((json) => {
          const data = json.entries
            .splice(0, 5)
            .map(
              (episode: {
                title: string;
                link: string;
                image: string;
                thumbnail: string;
              }) => {
                return {
                  title: episode.title,
                  link: episode.link,
                  image: episode.image,
                  thumbnail: episode.thumbnail,
                };
              }
            );
          return {
            json: data,
            html: data.length
              ? data
                  .map((d: any) => {
                    return `<div class="container"><a href=${d.link} title='${d.title} by ${d.artist}'><div class='cover'></div><div class='details'><div class='text-main'>${d.title}</div></div><img src='${d.thumbnail}' alt='${d.title}' /></div></a>`;
                  })
                  .join("\n")
              : `<p>Looks like I haven't been watching any tv :(</p>`,
            md: data.length
              ? data
                  .map((d: any) => {
                    return `- [${d.title}](${d.link}) {${getRandomIcon("tv")}}`;
                  })
                  .join("\n")
              : "Looks like I haven't been watching any tv :(",
          };
        });

      const musicArtists = await fetch(
        `https://utils.coryd.dev/api/music?type=artists&period=7day&limit=8`
      )
        .then((res) => res.json())
        .then((json) => {
          const data = json.topartists.artist.map((a: any) => {
            return {
              artist: a.name,
              link: `https://rateyourmusic.com/search?searchterm=${encodeURIComponent(
                a.name
              )}`,
              image: `${host}/api/media?artist=${a.name
                .replace(/\s+/g, "-")
                .toLowerCase()}`,
            };
          });
          return {
            json: data,
            html: data.length
              ? data
                  .map((d: any) => {
                    return `<div class="container"><a href=${d.link} title='${d.artist}'><div class='cover'></div><div class='details'><div class='text-main'>${d.artist}</div></div><img src='${d.image}' alt='${d.artist}' /></div></a>`;
                  })
                  .join("\n")
              : `<p>Looks like I haven't been listening to anything :(</p>`,
            md: data.length
              ? data
                  .map((d: any) => {
                    return `- [${d.artist}](${d.link}) {${getRandomIcon(
                      "music"
                    )}}`;
                  })
                  .join("\n")
              : "Looks like I haven't been listening to anything :(",
          };
        });

      const musicAlbums = await fetch(
        `https://utils.coryd.dev/api/music?type=albums&period=7day&limit=8`
      )
        .then((res) => res.json())
        .then((json) => {
          const data = json.topalbums.album.map((a: any) => ({
            title: a.name,
            artist: a.artist.name,
            link: `https://rateyourmusic.com/search?searchterm=${encodeURIComponent(
              a.name
            )}`,
            image: !ALBUM_DENYLIST.includes(
              a.name.replace(/\s+/g, "-").toLowerCase()
            )
              ? a.image[a.image.length - 1]["#text"]
              : `${host}/api/media?album=${a.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
          }));
          return {
            json: data,
            html: data.length
              ? data
                  .map((d: any) => {
                    return `<div class="container"><a href=${d.link} title='${d.title} by ${d.artist}'><div class='cover'></div><div class='details'><div class='text-main'>${d.title}</div><div class='text-secondary'>${d.artist}</div></div><img src='${d.image}' alt='${d.title} by ${d.artist}' /></div></a>`;
                  })
                  .join("\n")
              : `<p>Looks like I haven't been listening to anything :(</p>`,
            md: data.length
              ? data
                  .map((d: any) => {
                    return `- [${d.title}](${d.link}) by ${
                      d.artist
                    } {${getRandomIcon("music")}}`;
                  })
                  .join("\n")
              : "Looks like I haven't been listening to anything :(",
          };
        });

      fetch("https://api.omg.lol/address/cory/now", {
        method: "post",
        headers: {
          Authorization: `Bearer ${API_KEY_OMG}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: nowResponseToMarkdown({
            now: now as { now: { about: string; making: string } },
            books,
            movies,
            tv,
            music: {
              artists: musicArtists,
              albums: musicAlbums,
            },
          }),
          listed: 1,
        }),
      });

      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
