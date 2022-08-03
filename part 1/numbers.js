

// $.getJSON(url?json: res =>{
//     favoriteNum = res;
// });
// console.log(favoriteNum);

// let favoriteNum = 7
// let url = "http://numbersapi.com/"

// $.getJSON(url, res =>{
//     favoriteNum = `${res}?json;
// })
// console.log(favoriteNum);

let favoriteNum = 7;
let URL = "http://numbersapi.com";

$.getJSON(`${URL}/${favoriteNum}?json`)
    .then(res => {
      favoriteNum = res;
      console.log(favoriteNum);
  });

let favoriteNums = [28,26,17];
$.getJSON(`${URL}/${favoriteNums}?json`)
    .then(res => {
      favoriteNums = res;
      console.log(favoriteNums);
  });
 
  // **** NEED EXPLANATION ON THIS ONE ****
  Promise.all(
    // creating an array of 4 items [*,*,*,*]
    Array.from({ length: 4 }, () => {
      // returning the facts of favorite number from the api
      return $.getJSON(`${URL}/${favoriteNum}?json`);
    })
    //  creating a function called facts
  ).then(facts => {
    // facts will print each fact about favoritenum from the data of the api
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });  
  
// Promise.all(
//   function resuls(){
//   let facts = "$.getJSON(`${URL}/${favoriteNum}?json`)"
//     for(let fact in facts){
//       fact = facts.data;
//       console.log(fact)
//     }
//   }
// )