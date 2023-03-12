export type Media = {
  mbid: string;
  name: string;
  url: string;
  image: { size: string; "#text": string }[];
  artist?: {
    url: string;
    name: string;
  };
  playcount?: string;
};
