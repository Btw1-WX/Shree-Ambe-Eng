
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
            e1.classList.remove('clients-item-7');
            e1.classList.remove('clients-item-8');
            e1.classList.remove('clients-item-9');
            e1.classList.remove('clients-item-10');
        });


        this.carouselArray.slice(0,10).forEach((e1,i)=>{
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

  function page_redirect(){
    window.location="index.html";
}

 
