var hover = document.querySelectorAll(".hover");
for (var i = 0; i < hover.length; i++) {
  if (hover[i].matches(":hover")) {
    var down = hover[i].querySelector(".card-title").querySelector(".down");
    down.style.transform = "rotate(180deg)";
  }
}
