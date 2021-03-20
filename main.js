// tady je místo pro náš program

let p = document.querySelector(".odstavec");
let clickRed = document.querySelector(".click-red");
let bigger = document.querySelector(".bigger");
let nadpis = document.querySelector(".hlavni-nadpis");


// ztuční při najetí myši
function ztucni(){
    p.style.fontWeight = "bold";
}

function vrat(){
    p.style.fontWeight = "normal";
}

// změna písma na červenou
clickRed.addEventListener("click", function(){
    p.classList.toggle("odstavec-cerveny");
});


// zvětšující tlačítko
bigger.addEventListener("click", function(){
    let x = window.getComputedStyle(nadpis).getPropertyValue("font-size");
    let fontSize = parseFloat (x);
    nadpis.style.fontSize = (fontSize + 1) + "px"; 
});

//audio soubory
function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function ztisit(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

function hlasitostAkorat(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function hlasitostMax(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

function naZacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
}