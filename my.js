// FadeLeft

function revealLeft() {
  var reveals = document.querySelectorAll(".fade-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-fadeLeft");
    } else {
      reveals[i].classList.remove("reveal-fadeLeft");
    }
  }
}

window.addEventListener("scroll", revealLeft);

//fadeRight
function revealRight() {
  var reveals = document.querySelectorAll(".fade-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-fadeRight");
    } else {
      reveals[i].classList.remove("reveal-fadeRight");
    }
  }
}

window.addEventListener("scroll", revealRight);

//fadeUp
function revealUp() {
  var reveals = document.querySelectorAll(".fade-up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-fadeUp");
    } else {
      reveals[i].classList.remove("reveal-fadeUp");
    }
  }
}

window.addEventListener("scroll", revealUp);


//fadeDown
function revealDown() {
  var reveals = document.querySelectorAll(".fade-down");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-fadeDown");
    } else {
      reveals[i].classList.remove("reveal-fadeDown");
    }
  }
}

window.addEventListener("scroll", revealDown);

//bounceInLeft
function revealbounceLeft() {
  var reveals = document.querySelectorAll(".bounce-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-bounceInLeft");
    } else {
      reveals[i].classList.remove("reveal-bounceInLeft");
    }
  }
}

window.addEventListener("scroll", revealbounceLeft);

//bounceInRight
function revealbounceRight() {
  var reveals = document.querySelectorAll(".bounce-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-bounceInRight");
    } else {
      reveals[i].classList.remove("reveal-bounceInRight");
    }
  }
}

window.addEventListener("scroll", revealbounceRight);


const clientsContainer = document.querySelector('.clients-container');
const clientsControlsContainer = document.querySelector('.clients-controls');
const clientsControls = ['previous', 'next'];
const clientsItems = document.querySelectorAll('.clients-item');

class Carousel{
    constructor(container, items,controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }
    updateclients(){
        this.carouselArray.forEach(e1 =>{
            e1.classList.remove('clients-item-1');
            e1.classList.remove('clients-item-2');
            e1.classList.remove('clients-item-3');
            e1.classList.remove('clients-item-4');
            e1.classList.remove('clients-item-5');
            e1.classList.remove('clients-item-6');
        });


        this.carouselArray.slice(0,6).forEach((e1,i)=>{
            e1.classList.add(`clients-item-${i+1}`);
        })
    }

    setCurrentState(direction){
        if(direction.className == 'clients-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateclients();
    }
    setControls(){
        this.carouselControls.forEach(control =>{
            clientsControlsContainer.appendChild(document.createElement('button')).className = `clients-controls-${control}`;
            document.querySelector(`.clients-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...clientsControlsContainer.childNodes];
        triggers.forEach(control=>{
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(clientsContainer,clientsItems,clientsControls);
exampleCarousel.setControls();
exampleCarousel.useControls();



//autoplay
window.onload = setInterval(function () {document.querySelector(".clients-controls-next").click();}, 5000);
document.querySelector(".clients-controls-next").click();

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

  function page_redirect(){
  window.location="index.html";
}
