const lines = document.querySelectorAll(".line");
const burger = document.querySelector(".burger");

const links = document.querySelectorAll(".nav-links");
const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const skills = document.getElementById("skills");
const home = document.getElementById("home");
const icons = document.querySelectorAll(".icon");

const profile = document.querySelector(".more img");
const details = document.querySelector(".more .details");
const more = document.querySelector(".more");

const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

const skillsContainer = document.querySelector("#skills .content");
const skillDescription = document.querySelector(".skill-description");
const skillGraph = document.querySelector(".skill-graph");

const intro = document.getElementById("intro");
const texts = document.querySelectorAll("#intro span");
const slider = document.querySelector(".slider");

const main = document.querySelector("main");

const py = document.querySelector(".py");
const css = document.querySelector(".css");
const react = document.querySelector(".react");
const node = document.querySelector(".node");
const ui = document.querySelector(".ui");

const navLinks = [home, about, portfolio, skills, contact];

function init() {
  const tl = new TimelineMax({
    onComplete: function () {
      document.body.style.overflow = "auto";
      animateHeader(
        document.querySelector(".title.bottom"),
        "I'm a full stack web developer."
      );
    },
  });
  tl.to(texts, 0.7, { y: 0, stagger: 0.3 })
    .to(intro, 0.6, { y: "-100%" })
    .to(slider, 1, { y: "-100%" }, "-=0.6");
}

init();

let isClose = true;
function handleBurger() {
  if (isClose) {
    lines.forEach((line) => line.classList.add("active"));
    burger.classList.add("active");
  } else {
    lines.forEach((line) => line.classList.remove("active"));
    burger.classList.remove("active");
  }
  isClose = !isClose;
}

function handleScrolling(e) {
  navLinks.forEach((navLink) => {
    const { y } = navLink.getBoundingClientRect();
    if (y < 0) {
      links.forEach((link) => {
        if (link.innerHTML.toLowerCase() === navLink.id.toLowerCase()) {
          links.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }
  });

  // Animate elements
  if (more.getBoundingClientRect().top < 400 && profile.style.opacity == 0) {
    const tl = new TimelineMax();
    tl.fromTo(
      profile,
      0.6,
      { opacity: 0, x: -300 },
      { opacity: 1, x: 0 }
    ).fromTo(
      details,
      0.6,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0 },
      "-=0.6"
    );
  }

  if (about.getBoundingClientRect().top < 400 && icons[0].style.opacity == 0) {
    const tl = new TimelineMax();
    tl.fromTo(icons[0], 1, { opacity: 0, y: 150 }, { opacity: 1, y: 0 })
      .fromTo(icons[1], 1, { opacity: 0, y: -150 }, { opacity: 1, y: 0 }, "-=1")
      .fromTo(icons[2], 1, { opacity: 0, y: 150 }, { opacity: 1, y: 0 }, "-=1")
      .fromTo(
        icons[3],
        1,
        { opacity: 0, y: -150 },
        { opacity: 1, y: 0 },
        "-=1"
      );
  }

  if (
    projectsContainer.getBoundingClientRect().top < 400 &&
    projectsContainer.style.opacity == 0
  ) {
    const tl = new TimelineMax();
    tl.fromTo(
      projectsContainer,
      1,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0 }
    );
  }

  if (
    skillsContainer.getBoundingClientRect().top < 400 &&
    skillDescription.style.opacity == 0
  ) {
    const tl = new TimelineMax();
    tl.fromTo(
      skillDescription,
      0.6,
      { opacity: 0, x: 150 },
      { opacity: 1, x: 0 }
    )
      .fromTo(
        skillGraph,
        0.6,
        { opacity: 0, x: -150 },
        { opacity: 1, x: 0 },
        "-=0.6"
      )
      .fromTo(py, 0.6, { width: 0 }, { width: "80%" })
      .fromTo(css, 0.6, { width: 0 }, { width: "90%" }, "-=0.6")
      .fromTo(react, 0.6, { width: 0 }, { width: "75%" }, "-=0.6")
      .fromTo(node, 0.6, { width: 0 }, { width: "60%" }, "-=0.6")
      .fromTo(ui, 0.6, { width: 0 }, { width: "60%" }, "-=0.6");
  }
}

function animateHeader(element, text) {
  let x = 0;
  function animate() {
    if (x < text.length) {
      element.innerHTML += text.charAt(x);
      x++;
      setTimeout(animate, 100);
    }
  }
  animate();
}

window.addEventListener("scroll", handleScrolling);
burger.addEventListener("click", handleBurger);
