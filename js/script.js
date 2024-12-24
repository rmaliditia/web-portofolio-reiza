document.addEventListener("DOMContentLoaded", function () {
  const navbarMenu = document.getElementById("navbarMenu");
  const navLinks = navbarMenu.getElementsByTagName("a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      // Menghapus kelas 'active' dari semua a
      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
      }
      // Menambahkan kelas 'active' ke a yang diklik
      this.classList.add("active");
    });
  }
});

// Gsap
// Default GSAP settings
gsap.defaults({ ease: "none" });

// Animasi teks "a UI/UX Designer and Frontend Developer"
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
tl.to(".intro .intro1", {
  duration: 3.7,
  text: "a UI/UX Designer and Frontend Developer",
  delay: 0.3,
});

// Skills Start
// Add this JavaScript for the toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtns = document.querySelectorAll(".toggleBtn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and sections
      toggleBtns.forEach((b) => b.classList.remove("active"));
      document.querySelector(".techstack").classList.remove("active");
      document.querySelector(".tools").classList.remove("active");

      // Add active class to clicked button and corresponding section
      this.classList.add("active");
      document.querySelector("." + this.dataset.target).classList.add("active");
    });
  });
});
