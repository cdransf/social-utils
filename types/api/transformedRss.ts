export type TransformedRss = {
  title: string;
  link: string;
  description: string;
  language: string;
  generator: string;
  published: string;
  entries: {
    id: string;
    title: string;
    link: string;
    published: string;
    description: string;
    image?: string;
    thumbnail?: string;
  }[];
};
