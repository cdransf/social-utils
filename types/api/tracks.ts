export type Track = {
  artist: {
    mbid: string;
    "#text": string;
  };
  streamable: string;
  image: {
    size: string;
    "#text": string;
  }[];
  mbid: string;
  album: {
    mbid: string;
    "#text": string;
  };
  name: string;
  "@attr"?: {
    nowplaying: string;
  };
  url: string;
};

export type Tracks = {
  recenttracks: {
    track: Track[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      total: string;
      perPage: string;
    };
  };
};
