// ** first attempt **

// let URL = "http://deckofcardsapi.com/api/deck/";
// let randomCard;

// $.getJSON(URL, data =>{
//     randomCard= data;
// });

// console.log(randomCard);

let deckURL = "http://deckofcardsapi.com/api/deck/draw/?count=2";
let randomCard;

$.getJSON(`${deckURL}`)
    .then( data =>{
    randomCard = data;
});

console.log(randomCard);