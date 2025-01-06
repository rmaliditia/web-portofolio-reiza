// Navigation Top
document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementById("navbarMenu").querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
});

// Navigation Bottom

const navLinks = document.querySelectorAll(".navbarMenu-bottom a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));

    link.classList.add("active");
  });
});

// Gsap
// Default GSAP settings
gsap.defaults({ ease: "none" });

// Animasi teks
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
tl.to(".intro .intro1", {
  duration: 3.7,
  text: "a UI/UX Designer and Frontend Developer",
  delay: 0.3,
});

// Skills Start

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtns = document.querySelectorAll(".toggleBtn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleBtns.forEach((b) => b.classList.remove("active"));
      document.querySelector(".techstack").classList.remove("active");
      document.querySelector(".tools").classList.remove("active");

      this.classList.add("active");
      document.querySelector("." + this.dataset.target).classList.add("active");
    });
  });
});
