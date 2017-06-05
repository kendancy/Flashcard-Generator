//FlashCard.js
//Generate a basic flashcard or a ClozeCard flashcard

var BasicCard = require("./BasicCard");
//var BasicCard = function(front, back) {
//    this.front =  front;
//    this.back =  back;
//}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?",
    "George Washington"
)

console.log("===========================");
console.log("Basic Card front and back");
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("===========================");

var ClozeCard = require("./ClozeCard");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.",
    "George Washington"
)

var brokenCloze =  new ClozeCard (
    "This doesn't work",
    "oops"
)

var partial = firstPresidentCloze.partial(firstPresidentCloze.text, firstPresidentCloze.cloze);

console.log("===========================");
console.log("Cloze Cards cloze text partial");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.text);
console.log(partial);
console.log("===========================");

var partial = brokenCloze.partial(brokenCloze.text, brokenCloze.cloze);

console.log("===========================");
console.log("Cloze Cards cloze text partial");
console.log(brokenCloze.cloze);
console.log(brokenCloze.text);
console.log(partial);
console.log("===========================");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.",
    "first president"
)
var partial = firstPresidentCloze.partial(firstPresidentCloze.text, firstPresidentCloze.cloze);

console.log("===========================");
console.log("Cloze Cards cloze text partial");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.text);
console.log(partial);
console.log("===========================");

