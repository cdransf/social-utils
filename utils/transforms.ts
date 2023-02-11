import { NowData } from "@/types/api";

export const listsToMarkdown = (data: string[]) => {
  return data
    .map((d: string) => {
      return `- ${d}`;
    })
    .join("\n");
};

export const nowResponseToMarkdown = (data: NowData) => {
  return `{profile-picture}

# Cory Dransfeldt

<small id='now-updated'>{last-updated}</small>

--- Now ---


<small>(This is a [now page](https://nownownow.com/about), and if you have your own site, [you should make one](https://nownownow.com/about), too.)</small>

<div id="status-container" class="container background-cyan"><script src="https://status.lol/cory.js?link"></script></div>

### Currently

${data.now.now.about}

### Making

${data.now.now.making}

### Listening: artists

<div id="music-albums" class="media-grid">${data.music.artists.html}</div>

### Listening: albums

<div id="music-albums" class="media-grid">${data.music.albums.html}</div>

### Reading

${data.books.md}

### Watching: movies

${data.movies.md}

### Watching: tv

${data.tv.md}

<small>[Back to my omg.lol page!](https://{address}.omg.lol)</small>`;
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-");
};
