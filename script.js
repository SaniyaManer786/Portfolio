var typed = new Typed("#typing", {
  strings: [
    "Web Developer",
    "WordPress Developer",
    "Machine Learning Enthusiast"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1200,
  loop: true
});

// scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
});