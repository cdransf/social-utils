(function () {
  const nowPlayingWrapper = document.getElementById("now-playing");
  if (nowPlayingWrapper) {
    try {
      const localStorageKey = "CD_NOW_PLAYING";
      const cachedTemplate = localStorage.getItem(localStorageKey);

      if (window.localStorage && cachedTemplate) {
        nowPlayingWrapper.innerHTML = "";
        nowPlayingWrapper.insertAdjacentHTML("beforeEnd", cachedTemplate);
      }

      fetch("https://utils.coryd.dev/api/music?limit=1")
        .then((response) => response.json())
        .then((data) => {
          const track = data.recenttracks.track[0];
          const artistName = track.artist["#text"];
          const template = `<p style='margin:.5em;padding:0 .5em;display:inline-block'><i class='fa-solid fa-headphones'></i> <a href='${
            track.url
          }'>${
            track.name
          }</a> by <a href='https://ddg.gg?q=!rym ${encodeURIComponent(
            artistName
          )}'>${artistName}</a></p>`;

          if (window.localStorage)
            localStorage.setItem(localStorageKey, template);

          nowPlayingWrapper.innerHTML = "";
          nowPlayingWrapper.insertAdjacentHTML("beforeEnd", template);
        });
    } catch (e) {
      nowPlayingWrapper.innerHTML = "";
    }
  }
})();
