
//Cards Array
var cards = [ 	{rank:"queen",
				rank:"queen",
				suit:"hearts",
				cardImage:"images/queen-of-hearts.png"},
				
				{rank:"queen", 
				suit:"diamonds",
				cardImage:"images/queen-of-diamonds.png"},

				{rank:"king",
				suit:"hearts",
				cardImage:"images/king-of-hearts.png"},

				{rank:"king",
				suit:"diamonds",
				cardImage:"images/king-of-diamonds.png"}
			];



var cardsInPlay = []

function createBoard() {

	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.src="images/cardback.png";									
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);
      }
}
 
 function checkForMatch() {

	if(cardsInPlay.length > 1) {	

		if (cardsInPlay[0].rank === cardsInPlay[1].rank){
	
			console.log("You found a match!");
			console.log("");
			setTimeout(clearBoard, 1000);
	
		} else {
 	 
 	 		console.log("Sorry, try again.");
 	 		console.log(" ");
 	 		setTimeout(clearBoard, 1000);

		}

		cardsInPlay = [];

	} else {

		console.log("Pick another card");
		console.log("");

	}

}

 function flipCard() {


	var a=this.getAttribute('data-id');
	console.log("User flipped " + cards[a].rank);
	
	//show flipped card...
	this.src=cards[a].cardImage;
	//lobby
	cardsInPlay.push(cards[a]);
	
	console.log("Image: " + cards[a].cardImage);
	console.log("Suit: " + cards[a].suit);


	checkForMatch();

}
	
function clearBoard() {

	document.getElementById("game-board").innerHTML="";
	createBoard();
}

	
	createBoard();





