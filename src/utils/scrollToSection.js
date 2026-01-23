export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navbar = document.querySelector("header");

  if (!section) return;

  const navbarHeight = navbar?.offsetHeight || 0;
  const sectionTop =
    section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: sectionTop - navbarHeight - 10,
    behavior: "smooth",
  });
};
