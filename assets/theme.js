document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});

document.addEventListener("scroll", () => {
  const lifestyle = document.querySelector(".lifestyle");
  if (!lifestyle) return;

  const top = lifestyle.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    lifestyle.classList.add("visible");
  }
});
