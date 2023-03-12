export type Artist = {
  streamable: string;
  image: {
    size: string;
    "#text": string;
  }[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };
  name: string;
};

export type Artists = {
  topartists: {
    artist: Artist[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      total: string;
      perPage: string;
    };
  };
};
