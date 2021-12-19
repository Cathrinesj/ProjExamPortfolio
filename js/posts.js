//Fetch Post
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");
const postContainer = document.querySelector(".post-details");

const url = "https://feminite.no/wp-json/wp/v2/posts/" + idPost;

async function fetchPost() {
  try {
    const response = await fetch(url);
    const postDetails = await response.json();

    postContainer.innerHTML = "";

    document.title = `Wanderlust | ${postDetails.title.rendered}`;

    postContainer.innerHTML += `<div class="blogpost">
    <h1>${postDetails.title.rendered}</h1>
    ${postDetails.content.rendered}
    </div>
    `;
  } catch (error) {
    console.log(error);
    postContainer.innerHTML =
      "Sorry,seems to be some problems here. We are working on it!";
  } finally {
  }
}

fetchPost();

//Icons

topIcon = document.querySelector(".fa-caret-square-up");
shareIcon = document.querySelector(".fa-share-alt-square");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topIcon.style.display = "block";
    shareIcon.style.display = "block";
  } else {
    topIcon.style.display = "none";
    shareIcon.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollFunction();

//Image modal

async function makeModal() {
  await fetchPost();

  const modal = document.getElementById("myModal");
  const img = document.querySelectorAll("figure img");
  const modalImg = document.getElementById("imgModal");

  img.forEach(function (images) {
    images.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
  });
}

makeModal();

//close modal

const close = document.querySelector(".modal");
const modal = document.getElementById("myModal");

close.onclick = function () {
  modal.style.display = "none";
};

//Commentform

const form = document.querySelector("form");
const name = document.querySelector("#name");
const comment = document.querySelector("#comment");
const newComment = document.querySelector(".newComment");
const button = document.querySelector("button");

function checkIfButtonDisabled() {
  if (checkLength(name.value, 1) && checkLength(comment.value, 1)) {
    button.disabled = false;
  } else {
    newComment.innerHTML = "";
    button.disabled = true;
  }
}

name.addEventListener("keyup", checkIfButtonDisabled);
comment.addEventListener("keyup", checkIfButtonDisabled);

function commentSubmit(event) {
  event.preventDefault();
  newComment.innerHTML = location.reload();
  form.reset();
}

form.addEventListener("submit", commentSubmit);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

//Latest Posts

const urlPosts = "https://feminite.no/wp-json/wp/v2/posts?_embed";
const latestPosts = document.querySelector(".blog-latest-posts");

async function getLatestposts() {
  try {
    const response = await fetch(urlPosts);
    const getResults = await response.json();

    latestPosts.innerHTML = "";

    for (let i = 0; i < getResults.length; i++) {
      if ((getResults.length = 3)) {
        break;
      }
    }

    createLatestposts(getResults);
  } catch (error) {
    console.log(error);
    latestPosts.innerHTML =
      "Sorry,seems to be some problems here. We are working on it!";
  }
}

getLatestposts();

function createLatestposts(content) {
  content.forEach(function (post) {
    latestPosts.innerHTML += `<div class="latest-post">
    <a href="posts.html?id=${post.id}">
    <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}"/>
    <h2>${post.title.rendered}</h2>
    </div>`;
  });
}
