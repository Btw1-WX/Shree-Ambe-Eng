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

// TYPEIT

new TypeIt("#type1", {
  speed: 180,
  loop: true,
  waitUntilVisible: true,
})
  .type("Shree Ambe", { delay: 500 })
  .pause(1200)
  .delete(10)
  .go();

new TypeIt("#type2", {
  speed: 180,
  loop: true,
  waitUntilVisible: true,
})
  .type("Machines", { delay: 500 })
  .pause(1200)
  .delete(8)
  .go();

new TypeIt("#type3", {
  speed: 180,
  loop: true,
  waitUntilVisible: true,
})
  .type("Solutions", { delay: 500 })
  .pause(1200)
  .delete(9)
  .go();
