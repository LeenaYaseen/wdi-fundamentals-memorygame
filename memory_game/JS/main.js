console.log("Up and running!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

flipCard(0);
flipCard(2);

function checkForMatch()
{

	if (cardsInPlay[0] === cardsInPlay[1])
	 	{
  			console.log("You found a match!");
  		}

	else 
		{
  			console.log("Sorry, try again.");
		}
}

function flipCard(cardId)
{
    console.log("User flipped" + " " + cards[cardId])

	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2)
	{

		checkForMatch();

		if (cardsInPlay[0] === cardsInPlay)
 		{

 			//alert("you found a match!");
 		}
 		else
 		{
 			//alert("Sorry, try again.");
 		}
 	}
}

