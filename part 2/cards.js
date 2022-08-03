// ** first attempt **

// let URL = "http://deckofcardsapi.com/api/deck/";
// let randomCard;

// $.getJSON(URL, data =>{
//     randomCard= data;
// });

// console.log(randomCard);

let deckURL = "https://deckofcardsapi.com/api/deck/new";

$.getJSON(`${deckURL}/draw/`)
    .then( data =>{
        let {suit, value} = data.cards[0];
        console.log (`${value} of ${suit}`);
});

let cardId;
$.getJSON(`${deckURL}/shuffle/`).then(res =>{
    cardId = res.cardId;
})
let cardOne;
$.getJSON(`${deckURL}/draw/`)
    .then(data =>{
        cardOne = data.cards[0];
        return $.getJSON(`${deckURL}/${cardId}/draw/`);
    })
    .then(data =>{
        let cardTwo = data.cards[0];
        let cards;
        for(let card of cards){
            card += cardTwo;
            console.log(`${card.value} of ${card.suit}`)
        };
    });