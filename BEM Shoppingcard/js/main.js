const counter = document.getElementById("data-counter");

const VoegToe = document.getElementsByClassName("details__button--enabled");

// function for a button counter
function ProductToeVoegen(){
    for(let i=0; i <= 0; i++){
        counter.innerHTML++;
    }
}


function MinKnop(){
    for(let i=0; i <= 0; i++){
        if (counter.innerHTML > 0){
            counter.innerHTML--;
        }
    }
}

const productenLijst = 
[
  ["Monster Energy zero sugar", 1.39, "images/Monster Energy zero sugar.webp", true],
  ["Monster Energy mango loco", 1.39, "images/monster-energy-mango-loco.jpg", true],
  ["Monster Energy assault", 1.39, "images/monster-pl-assault.webp", false]
];

const productCardDummie = document.getElementsByClassName("product__card")[0];

const product__container = document.getElementsByClassName("product__container")[0];

productCardDummie.remove();

productenLijst.forEach(producten => {
    
    if (producten[3] == true) {
        const waar = document.getElementsByClassName(".details__button--enabled");
        waar.innerText = "Voeg toe";
    }

    console.log(producten);
    const clone = productCardDummie.cloneNode(true);
    product__container.appendChild(clone);
    clone.querySelector(".details__text").textContent = producten[0];
    clone.querySelector(".details__prijs").textContent = producten[1];
    clone.querySelector(".product__img--zero-sugar").src = producten[2];
    clone.querySelector(".details__button--enabled").centent = producten[3];
});