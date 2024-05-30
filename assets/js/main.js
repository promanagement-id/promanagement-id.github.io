const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

const images = document.querySelectorAll(".home__img");
const dotsContainer = document.getElementById("dotsContainer");
function showImage(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
}
function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      showImage(index);
      updateActiveDot(index);
    });
    dotsContainer.appendChild(dot);
  });
}
function updateActiveDot(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
createDots();
showImage(0);

const numberElements = document.querySelectorAll(".experience__number");
numberElements.forEach((numberElement) => {
  const targetNumber = parseInt(numberElement.textContent);
  let currentNumber = 0;
  const interval = setInterval(() => {
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
    } else {
      currentNumber++;
      numberElement.textContent = currentNumber;
    }
  }, 100);
});

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/* Video 1*/
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");
function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    videoFile.pause();
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}
videoButton.addEventListener("click", playPause);
function finalVideo() {
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}
videoFile.addEventListener("ended", finalVideo);

/* Video 2 */
const videoFile2 = document.getElementById("video-file-2"),
  videoButton2 = document.getElementById("video-button-2"),
  videoIcon2 = document.getElementById("video-icon-2");
function playPause2() {
  if (videoFile2.paused) {
    videoFile2.play();
    videoIcon2.classList.add("ri-pause-line");
    videoIcon2.classList.remove("ri-play-line");
  } else {
    videoFile2.pause();
    videoIcon2.classList.remove("ri-pause-line");
    videoIcon2.classList.add("ri-play-line");
  }
}
videoButton2.addEventListener("click", playPause2);
function finalVideo2() {
  videoIcon2.classList.remove("ri-pause-line");
  videoIcon2.classList.add("ri-play-line");
}
videoFile2.addEventListener("ended", finalVideo2);

/* Video 3 */
const videoFile3 = document.getElementById("video-file-3"),
  videoButton3 = document.getElementById("video-button-3"),
  videoIcon3 = document.getElementById("video-icon-3");
function playPause3() {
  if (videoFile3.paused) {
    videoFile3.play();
    videoIcon3.classList.add("ri-pause-line");
    videoIcon3.classList.remove("ri-play-line");
  } else {
    videoFile3.pause();
    videoIcon3.classList.remove("ri-pause-line");
    videoIcon3.classList.add("ri-play-line");
  }
}
videoButton3.addEventListener("click", playPause3);
function finalVideo3() {
  videoIcon3.classList.remove("ri-pause-line");
  videoIcon3.classList.add("ri-play-line");
}
videoFile2.addEventListener("ended", finalVideo2);
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sections = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sections + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sections + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description,
           .subscribe__description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);

const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
