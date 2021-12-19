// Fetch images

const url = "https://feminite.no/wp-json/wp/v2/posts?_embed";
const carousel = document.querySelector(".carousel");

async function getCarousel() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    carousel.innerHTML = "";

    createCarousel(getResults);
  } catch (error) {
    console.log(error);
    carousel.innerHTML =
      "Sorry,seems to be some problems here. We are working on it!";
  }
}

getCarousel();

function createCarousel(content) {
  content.forEach(function (post) {
    carousel.innerHTML += `<div class="carousel-display">
    <a href="posts.html?id=${post.id}">
    <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post.title.rendered}"/>
    <h2>${post.title.rendered}</h2>
    </div>`;
  });
}

//Create Carousel

async function makeCarousel() {
  await getCarousel();

  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselContent = document.querySelectorAll(".carousel-display");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 1;
  const size = carouselContent[0].clientWidth;

  nextBtn.addEventListener("click", () => {
    if (counter >= carouselContent.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  });
}

makeCarousel();
