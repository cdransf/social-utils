import { extract } from "@extractus/feed-extractor";
import siteMetadata from "@/data/siteMetadata";
import { Albums, Artists, TransformedRss } from "@/types/api";
import { Tracks } from "@/types/api/tracks";

export default async function loadNowData(endpoints?: string) {
  const selectedEndpoints = endpoints?.split(",") || null;
  const TV_KEY = process.env.API_KEY_TRAKT;
  const MUSIC_KEY = process.env.API_KEY_LASTFM;
  const env = process.env.NODE_ENV;
  let host = siteMetadata.siteUrl;
  if (env === "development") host = "http://localhost:3000";

  let artistsJson = null;
  let albumsJson = null;
  let booksJson = null;
  let moviesJson = null;
  let tvJson = null;
  let currentTrackJson = null;

  // artists
  if ((endpoints && selectedEndpoints.includes("artists")) || !endpoints) {
    const artistsUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=cdme_&api_key=${MUSIC_KEY}&limit=8&format=json&period=7day`;
    artistsJson = await fetch(artistsUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        return {};
      });
  }

  // albums
  if ((endpoints && selectedEndpoints.includes("albums")) || !endpoints) {
    const albumsUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=cdme_&api_key=${MUSIC_KEY}&limit=8&format=json&period=7day`;
    albumsJson = await fetch(albumsUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        return {};
      });
  }

  // books
  if ((endpoints && selectedEndpoints.includes("books")) || !endpoints) {
    const booksUrl = `${host}/feeds/books`;
    booksJson = await extract(booksUrl).catch((error) => {
      console.log(error);
      return {};
    });
  }

  // movies
  if ((endpoints && selectedEndpoints.includes("movies")) || !endpoints) {
    const moviesUrl = `${host}/feeds/movies`;
    moviesJson = await extract(moviesUrl).catch((error) => {
      console.log(error);
      return {};
    });
    moviesJson.entries = moviesJson.entries.splice(0, 5);
  }

  // tv
  if ((endpoints && selectedEndpoints.includes("tv")) || !endpoints) {
    const tvUrl = `${host}/feeds/tv?slurm=${TV_KEY}`;
    tvJson = await extract(tvUrl).catch((error) => {
      console.log(error);
      return {};
    });
    tvJson.entries = tvJson.entries.splice(0, 5);
  }

  // current track
  if ((endpoints && selectedEndpoints.includes("currentTrack")) || !endpoints) {
    const currentTrackUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cdme_&api_key=${MUSIC_KEY}&limit=1&format=json&period=7day`;
    currentTrackJson = await fetch(currentTrackUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        return {};
      });
  }

  const res: {
    artists?: Artists;
    albums?: Albums;
    books?: TransformedRss;
    movies?: TransformedRss;
    tv?: TransformedRss;
    currentTrack?: Tracks;
  } = {};
  if (artistsJson) res.artists = artistsJson?.topartists.artist;
  if (albumsJson) res.albums = albumsJson?.topalbums.album;
  if (booksJson) res.books = booksJson?.entries;
  if (moviesJson) res.movies = moviesJson?.entries;
  if (tvJson) res.tv = tvJson?.entries;
  if (currentTrackJson)
    res.currentTrack = currentTrackJson?.recenttracks?.track?.[0];

  // unified response
  return res;
}
