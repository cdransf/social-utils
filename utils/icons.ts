export const getRandomIcon = (type: string) => {
  const icons = {
    books: [
      "book",
      "book-bookmark",
      "book-open",
      "book-open-reader",
      "bookmark",
    ],
    music: [
      "music",
      "headphones",
      "record-vinyl",
      "radio",
      "guitar",
      "compact-disc",
    ],
    movies: ["film", "display", "video", "ticket"],
    tv: ["tv", "display", "video"],
  };

  return icons[type][Math.floor(Math.random() * (icons[type].length - 1 - 0))];
};
