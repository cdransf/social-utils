document.addEventListener("DOMContentLoaded", (event) => {
  (function () {
    const formatDate = (date) => {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [month, day, year].join("-");
    };
    const webmentionsWrapper = document.getElementById("webmentions");
    const webmentionsLikesWrapper = document.getElementById(
      "webmentions-likes-wrapper"
    );
    const webmentionsBoostsWrapper = document.getElementById(
      "webmentions-boosts-wrapper"
    );
    const webmentionsCommentsWrapper = document.getElementById(
      "webmentions-comments-wrapper"
    );
    if (webmentionsWrapper && window) {
      try {
        fetch("https://utils.coryd.dev/api/webmentions?domain=blog.coryd.dev")
          .then((response) => response.json())
          .then((data) => {
            const mentions = data.children;
            if (mentions.length === 0 || window.location.pathname === "/") {
              webmentionsWrapper.remove();
              return;
            }

            let likes = "";
            let boosts = "";
            let comments = "";

            mentions.map((mention) => {
              if (
                mention["wm-property"] === "like-of" &&
                mention["wm-target"].includes(window.location.href)
              ) {
                likes += `<a href="${mention.url}" rel="noopener noreferrer"><img class="avatar" src="${mention.author.photo}" alt="${mention.author.name}" /></a>`;
              }

              if (
                mention["wm-property"] === "repost-of" &&
                mention["wm-target"].includes(window.location.href)
              ) {
                boosts += `<a href="${mention.url}" rel="noopener noreferrer"><img class="avatar" src="${mention.author.photo}" alt="${mention.author.name}" /></a>`;
              }

              if (
                mention["wm-property"] === "in-reply-to" &&
                mention["wm-target"].includes(window.location.href)
              ) {
                comments += `<div class="webmention-comment"><a href="${
                  mention.url
                }" rel="noopener noreferrer"><div class="webmention-comment-top"><img class="avatar" src="${
                  mention.author.photo
                }" alt="${
                  mention.author.name
                }" /><div class="time">${formatDate(
                  mention.published
                )}</div></div><div class="comment-body">${
                  mention.content.text
                }</div></a></div>`;
              }
            });

            webmentionsLikesWrapper.innerHTML = "";
            webmentionsLikesWrapper.insertAdjacentHTML("beforeEnd", likes);
            webmentionsBoostsWrapper.innerHTML = "";
            webmentionsBoostsWrapper.insertAdjacentHTML("beforeEnd", boosts);
            webmentionsCommentsWrapper.innerHTML = "";
            webmentionsCommentsWrapper.insertAdjacentHTML(
              "beforeEnd",
              comments
            );
            webmentionsWrapper.style.opacity = 1;

            if (likes === "")
              document.getElementById("webmentions-likes").innerHTML === "";
            if (boosts === "")
              document.getElementById("webmentions-boosts").innerHTML === "";
            if (comments === "")
              document.getElementById("webmentions-comments").innerHTML === "";

            if (likes === "" && boosts === "" && comments === "")
              webmentionsWrapper.remove();
          });
      } catch (e) {
        webmentionsWrapper.remove();
      }
    }
  })();
});
