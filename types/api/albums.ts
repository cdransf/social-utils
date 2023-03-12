export type Album = {
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
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

export type Albums = {
  topalbums: {
    album: Album[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      total: string;
      perPage: string;
    };
  };
};
