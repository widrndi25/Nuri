function scrollHandler() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var element = document.getElementById("intro");

  if (scrollPosition > 200) {
    element.classList.add("introAnimation");
  }
}

window.addEventListener("scroll", scrollHandler);
