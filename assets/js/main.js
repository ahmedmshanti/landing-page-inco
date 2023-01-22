let btn = document.querySelector("button");
let listItem = document.querySelector("ul");
let btnIcon = document.querySelector("button.btnColor");
let iconColor = document.querySelector("div.icon-color");
let spans = document.querySelectorAll(".spanColor");
let root = document.querySelector(":root");
let darkSet = document.querySelector(".dark");
let navBar = document.querySelector("nav");
let btnUp = document.querySelector(".btnUp");
let btnDown = document.querySelector(".btnDown");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav .container ul li a");
let Search = document.querySelector(".search i");
let inputSearch = document.querySelector("nav .container ul .search input");

btn.onclick = function () {
  listItem.classList.toggle("show");
};
Search.onclick = function () {
  if (inputSearch.classList.toggle("search")) {
    inputSearch.style.display = "block";
  } else {
    inputSearch.style.display = null;
  }
};

btnIcon.onclick = function () {
  iconColor.classList.toggle("showIcon");
  spans.forEach((span) => {
    span.onclick = function () {
      root.style.setProperty("--main-color", span.dataset.color);
      root.style.setProperty("--first-color", span.dataset.color);
      darkSet.style.setProperty("--bcolor", span.dataset.color);
    };
  });
};

//

document.querySelector(".btn_dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector(".btn_dark").innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.querySelector(".btn_dark").innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});

//

window.onscroll = () => {
  if (window.scrollY >= 300) {
    navBar.style.backgroundColor = "#ddd";
    btnUp.style.display = "block";
  } else {
    navBar.style.backgroundColor = null;
    btnUp.style.display = null;
  }

  //

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 300) {
      links.forEach((link) => {
        if (link.getAttribute("href") == "#" + section.getAttribute("id")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
btnDown.onclick = function () {
  window.scrollBy({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};

//

ScrollReveal().reveal(".card-people", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});

ScrollReveal().reveal(".details-creative", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});

ScrollReveal().reveal(".details-creative2", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".content-container", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});

ScrollReveal().reveal(".content-user", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".details-works", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
ScrollReveal().reveal(".trade-mark", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay: 600,
});
