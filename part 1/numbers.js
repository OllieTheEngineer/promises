

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
let URL = "http://numbersapi.com/";

$.getJSON(`${URL}/${favoriteNum}?json`)
    .then(res => {
    console.log(res);
  });

let favoriteNums = [28,26,17];
$.getJSON(`${URL}/${favoriteNums}?json`)
    .then(res => {
    console.log(res);
  });
 
  // **** NEED EXPLANATION ON THIS ONE ****
  // Promise.all(
  //   Array.from({ length: 4 }, () => {
  //     return $.getJSON(`${baseURL}/${favNumber}?json`);
  //   })
  // ).then(facts => {
  //   facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  // });  
  