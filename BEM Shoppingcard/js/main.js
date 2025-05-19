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
  ["Monster Energy zero sugar", 1.39, "Monster Energy zero sugar.webp", true],
  ["Monster Energy mango loco", 1.39, "monster-energy-mango-loco.jpg", true],
  ["Monster Energy assault", 1.39, "monster-pl-assault.webp", false]
];

productenLijst.forEach((producten) => {
    console.log(producten);
});