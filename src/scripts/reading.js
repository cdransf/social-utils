(function () {
  const nowReadingWrapper = document.getElementById("now-reading");
  if (nowReadingWrapper) {
    try {
      const localStorageKey = "CD_NOW_READING";
      const cachedTemplate = localStorage.getItem(localStorageKey);

      if (window.localStorage && cachedTemplate) {
        nowReadingWrapper.innerHTML = "";
        nowReadingWrapper.insertAdjacentHTML("beforeEnd", cachedTemplate);
      }

      fetch("https://utils.coryd.dev/api/books")
        .then((response) => response.json())
        .then((data) => {
          const books = data.entries;
          const booksList = books.map((entry, index) => {
            const book = (book) => {
              return `<a href='${book.link}'>${book.title}</a>`;
            };
            const getLink = (index) => {
              if (index !== books.length - 1 && index !== books.length - 2) {
                return `<span>${book(entry)}, </span>`;
              } else if (index === books.length - 1 && books.length > 1) {
                return `<span> and ${book(entry)}</span>`;
              } else {
                return `<span>${book(entry)}</span>`;
              }
            };

            return getLink(index);
          });

          const template = `<p style='margin:.5em;padding:0 .5em;display:inline-block'><i class='fa-solid fa-book-open'></i> ${booksList.join(
            " "
          )}</p>`;

          if (window.localStorage)
            localStorage.setItem(localStorageKey, template);
          nowReadingWrapper.innerHTML = "";
          nowReadingWrapper.insertAdjacentHTML("beforeEnd", template);
        });
    } catch (e) {
      nowReadingWrapper.innerHTML = "";
    }
  }
})();
