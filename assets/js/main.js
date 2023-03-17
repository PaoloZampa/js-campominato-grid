/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */

//mi seleziono il container
const container = document.querySelector(".container");

//numero quadrati in base a difficoltà
let squareNumber1 = 100
let squareNumber2 = 81
let squareNumber3 = 49

//seleziono dropdown menu
//const selectElement = document.querySelector('#game_mode')

//seleziono opzioni drop down menu
/* function getGameMode() {
    for(let i = 0; i < selectElement.length; i++){
        if(selectElement.options[i].value == hardMode){
            selectElement.selectedIndex = i;
            createSquare(squareNumber3);
        } else if (selectElement.options[i].value == mediumMode){
            selectElement.selectedIndex = i;
            createSquare(squareNumber2);
        } else {
            selectElement.selectedIndex = i;
            createSquare(squareNumber1);
        } 
    }
    
} */

/* function selectGameMode() {
    let selectMode = document.querySelector('#game_mode');
    let output = selectMode.value;
    document.querySelector('.square') = output;
} */

//funzione creare cartelle
function createSquare(numb1) {
    for (let i = 0; i < numb1; i++) {
        const cell = `<div class="square w_10"></div>`;
        container.innerHTML += cell;
    }
}

//seleziono una square
const suqareElement = document.querySelectorAll('.square')

//aggiungo funzione al click

for (let i = 0; i < suqareElement.length; i++) {
    const thisSquare = suqareElement[i];
    thisSquare.addEventListener("click", function () {
        thisCell.classList.toggle("bg_green")
        console.log("Changed the color")
    })
}

