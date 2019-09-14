
//Cards Array
let cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank:"queen", 
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"},
{
rank:"king",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
}
];



let cardsInPlay = []
function createBoard(){
for (let i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.src="images/cardback.png";									//Mike Added
// cardElement.setAttribute("src").value = "/images/cardback.png";
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard)
document.getElementById('game-board').appendChild(cardElement);
      }
}
 function checkForMatch(){
 var cardImage=document.createElement('img');							//Mike Added
 cardImage.src="images/queen-of-hearts.png";							//Mike Added
 // cardImage.setAttribute("src").value = "images/queen-of-hearts.png";	
if (cardsInPlay[0] === cardsInPlay[1]){
console.log("You found a match!");}
else {
 console.log("Sorry, try again.");}
}


function flipCard() {
this.getAttribute('data-id');

console.log("User flipped" + + cards[a].rank);
cardsInPlay.push(cards[0].rank);
console.log(cardImage);
console.log(suit);

}
createBoard();
checkForMatch();


//CardOne



/*let cardsInPlay = [] 
{

if (cardsInPlay.length === 2);{
    console.log("yes")}
if (cardsInPlay[0] === cardsInPlay[3]){
 	alert("Sorry, try again");}
else {
 	alert("you've found a match!.");
  }
}
const cardOne = "queen";{
cards.push('queen');
console.log("User flipped queen");}
//CardTWO
const cardTwo = 'king';{
cards.push('cardTwo');
console.log("User flipped king");}*/	
