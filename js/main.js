

const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [] 

//if (cardsInPlay.length === 2);{
    //console.log("yes")}

if (cardsInPlay[0] === cardsInPlay[2]){
	 alert("Sorry, try again");}
 
else {
 	alert("you've found a match!.");
 }


function checkForMatch(){
 if (cardsInPlay[0] === cardsInPlay[1]){
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");}
}
function flipCard(cardId) {
console.log("User flipped" +  + "queen"[0]);
cardsInPlay.push(cards[0]);

const cardOne = 'queen';{
cards.push('cardOne');
console.log("User flipped queen");}

const cardTwo = 'king';{
cards.push('cardTwo');
console.log("User flipped king");}

checkForMatch();
}
flipCard([0]);
flipCard([2]);


