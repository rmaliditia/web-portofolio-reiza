document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.getElementById("navbarNav");
  const navLinks = navbarNav.getElementsByTagName("a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      // Menghapus kelas 'active' dari semua tautan
      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
      }
      // Menambahkan kelas 'active' ke tautan yang diklik
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

const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
tl2.to(".intro .|", {
  duration: 3,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});
