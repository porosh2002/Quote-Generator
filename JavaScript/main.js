$(".srvc_links_nv").click(() => {
  document.querySelector(".nav_mega").classList.toggle("nav_mega_2");
  $(".cancel_icon").click(() => {
    document.querySelector(".nav_mega").classList.add("nav_mega_2");
  });
  $(".mega_links").click(() => {
    document.querySelector(".nav_mega").classList.add("nav_mega_2");
  });
});
window.addEventListener("scroll", () => {
  const e = document.querySelector(".nav_sec");
  window.scrollY > 90 && (e.style.backgroundColor = "#fff");
  if (window.scrollY > 120) {
    e.classList.add("nav_shadow");
  }
  if (window.scrollY < 120) {
    e.classList.remove("nav_shadow");
  }
});
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 4,
  autoplay: 3000,
  breakpoints: {
    800: {
      perView: 3,
    },
    600: {
      perView: 2,
    },
    400: {
      perView: 1,
    },
  },
}).mount();