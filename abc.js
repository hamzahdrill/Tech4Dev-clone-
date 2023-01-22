$("#prev").on("click", function () {
  $("#menu ul").animate(
    {
      scrollLeft: "-=400",
    },
    300,
    "swing"
  );
});

$("#next").on("click", function () {
  $("#menu ul").animate(
    {
      scrollLeft: "+=400",
    },
    300,
    "swing"
  );
});

const menu = document.querySelector(".nav-menu");
const navLinks = document.querySelector(".nav");

menu.addEventListener("click", () => {
  if (navLinks.style.transform === "scaleX(1)") {
    navLinks.style.transform = "scaleX(0)";
  } else {
    navLinks.style.transform = "scaleX(1)";
  }
});
