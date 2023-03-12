# Social utilities

[![scheduled-syndication](https://github.com/cdransf/social-utils/actions/workflows/scheduled.yaml/badge.svg)](https://github.com/cdransf/social-utils/actions/workflows/scheduled.yaml)

Utilities running on Vercel that support functionality on other web properties, namely:

- Server side APIs used to source, modify and combine data from other services
- Serving static assets and scripts

---

## APIs

### [Books](pages/api/books.ts)

| Request type | URI          | Params |
| ------------ | ------------ | ------ |
| `GET`        | `/api/books` | None   |

This API returns the books I'm currently reading on [Oku](https://oku.club), transformed from the RSS feed available on the appropriate collection.

### [Movies](pages/api/movies.ts)

| Request type | URI           | Params |
| ------------ | ------------- | ------ |
| `GET`        | `/api/movies` | None   |

This API returns the movies I've recently logged on [Letterboxd](https://letterboxd.com), transformed from the RSS feed available on my profile.

### [Movies](pages/api/music.ts)

| Request type | URI          | Params                                                                |
| ------------ | ------------ | --------------------------------------------------------------------- |
| `GET`        | `/api/music` | `{ type?: string; limit?: string; format?: string; period?: string }` |

This API returns the music I've recently listened to and scrobbled to [Last.fm](https://last.fm). It supports several parameters, namely `type` which is used to determine what whether albums, artists or tracks are returned. The `limit` parameter controls the number of entries in te response. The `format` parameter controls the response format (XML or JSON) and the `period` parameter controls the time period covered in the response.

### [TV](pages/api/tv.ts)

| Request type | URI       | Params |
| ------------ | --------- | ------ |
| `GET`        | `/api/tv` | None   |

This API returns the tv episodes I've recently logged on [Trakt](https://trakt.tv) fetched from their API.

### [Webmentions](pages/api/webmentions.ts)

| Request type | URI       | Params               |
| ------------ | --------- | -------------------- |
| `GET`        | `/api/tv` | `{ target: string }` |

This returns webmentions for a given post on my site, with the `target` parameter accepting a url for the target post.
