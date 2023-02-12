# Social utilities

[![scheduled-cron-job](https://github.com/cdransf/social-utils/actions/workflows/scheduled.yaml/badge.svg)](https://github.com/cdransf/social-utils/actions/workflows/scheduled.yaml)

Utilities running on Vercel that support functionality on [coryd.dev](https://coryd.dev), namely:

- Static pages intended to match the look and feel of coryd.dev
- Server side APIs used to source, modify and combine data from other services
- Serving static assets and scripts

---

## Submodules

Git submodules are used to split out different assets from the core application. Links to the submodules are below, with the exception of `Media` which is a private submodule. `Media` is fetched at build time using [vercel-submodules](https://github.com/junhoyeo/vercel-submodules).

- [Scripts](https://github.com/cdransf/social-utils-scripts)
- [Styles](https://github.com/cdransf/social-utils-styles)
- [Assets](https://github.com/cdransf/social-utils-image-assets)
- Media

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

### [TV](pages/api/tv.ts)

| Request type | URI       | Params |
| ------------ | --------- | ------ |
| `GET`        | `/api/tv` | None   |

This API returns the TV episodes I've recently logged on [Trakt](https://trakt.tv), transformed from the RSS feed available on the recently watched section of my profile.
