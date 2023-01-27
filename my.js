function reveal() {
  var reveals = document.querySelectorAll(".why-us-tabs");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal");
    } else {
      reveals[i].classList.remove("reveal");
    }
  }
}

window.addEventListener("scroll", reveal);