const links = document.querySelectorAll("[href^='#']");
links.forEach(link => link.addEventListener("click", (event) => {
  event.preventDefault();
  const target = document.getElementById(event.target.getAttribute("href").slice(1));
  window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}));