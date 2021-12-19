// Fetch bloglist

const baseUrl = "https://feminite.no/wp-json/wp/v2/posts?_embed";
const bloglistContainer = document.querySelector(".bloglist");
const categories = document.querySelectorAll(".categories");

async function getBloglist(url) {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    getResults.forEach(function (post) {
      bloglistContainer.innerHTML += `<a href="posts.html?id=${post.id}"><div class="bloglist-display flex-content border-btm">
    <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}"/>
    <div>
    <h2>${post.title.rendered}</h2>
    ${post.excerpt.rendered} 
    <a href="posts.html?id=${post.id}"><h3>Read More..</h3></a>
    </div>
    </a>`;
    });
  } catch (error) {
    console.log(error);
    bloglistContainer.innerHTML =
      "Sorry,seems to be some problems here. We are working on it!";
  }
}

getBloglist(baseUrl);

// Filter

categories.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "france") {
      newUrl = baseUrl + `&categories=11`;
      button.style.display = "none";
    } else {
      const categoryChosen = event.target.value;
      newUrl = baseUrl + `&categories=${categoryChosen}`;
      button.style.display = "none";
    }
    bloglistContainer.innerHTML = "";
    getBloglist(newUrl);
  };
});

function dropdownFilter() {
  var dropdown = document.querySelector(".filter");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// View more

const button = document.querySelector("button");
let count = 1;

button.addEventListener("click", () => {
  count++;
  const moreUrl = baseUrl + `&page=` + count;
  bloglistContainer.innerHTML += "";
  button.style.display = "none";

  getBloglist(moreUrl);
});
