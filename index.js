let homeDisplay = document.querySelector('#homeScore');
let guestDisplay = document.querySelector('#guestScore');

let homeScore = 0;
let guestScore = 0;



const home1Point = () => {
    homeScore++
    homeDisplay.textContent = homeScore;
}

const home2Point = () => {
    homeScore+=2;
    homeDisplay.textContent = homeScore;
}

const home3Point = () => {
    homeScore+=3
    homeDisplay.textContent = homeScore;
}

const guest1Point = () => {
    guestScore++
    guestDisplay.textContent = guestScore;
}

const guest2Point = () => {
    guestScore+=2;
    guestDisplay.textContent = guestScore;
}

const guest3Point = () => {
    guestScore+=3
    guestDisplay.textContent = guestScore;
}

const reset = () => {
    homeScore = 0;
    guestScore = 0;
    guestDisplay.textContent = guestScore;
    homeDisplay.textContent = homeScore;
}