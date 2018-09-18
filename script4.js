console.log("link");

//counterone
var winCountOne = 0;
    getWinCoutOne = document.getElementById("scoreOne");
    getWinCoutOne.innerHTML = "Wins: " + winCountOne;
//counttertwo
var winCountTwo = 0;
var getWinCountTwo = document.getElementById("scoreTwo");
    getWinCountTwo.innerHTML = "Wins: " + winCountTwo;

function myRandomDice (){
    return Math.floor(Math.random()*6) + 1;
}

var playerOneResult = 0;
var playerTwoResult = 0;
 //player one dices
var playerOneDiceOne = 0;
var playerOneDiceTwo = 0;
var playerTwoDiceOne = 0;
var playerTwoDiceTwo = 0;

//player one roll 2 dice
var myPlayerOne = function (event){
    playerOneDiceOne = myRandomDice();
    playerOneDiceTwo = myRandomDice();
    console.log(playerOneDiceOne,playerOneDiceTwo);
    //dice one
    var getPlayerOneDoImg = document.getElementById("dieOne1");
    var dieOneName = "dice" + playerOneDiceOne + ".png";
        getPlayerOneDoImg.src = "images/"+ dieOneName;
   //dice two
    var getPlayerOneDtImg = document.getElementById("dieOne2");
    var dieTwoName = "dice" + playerOneDiceTwo + ".png";
        getPlayerOneDtImg.src = "images/"+ dieTwoName;
    //total result
        playerOneResult = playerOneDiceOne += playerOneDiceTwo;
        console.log("myPlayerOneResult",playerOneResult);

        checkScore(playerOneResult,playerTwoResult);
     //remove EventListener
        this.removeEventListener('click',myPlayerOne);

    return playerOneResult;

}
// debugger;
var myButtonOne = document.getElementById("playOneButton");
    console.log("=====",myButtonOne);
    myButtonOne.addEventListener('click',myPlayerOne);

//player two dice
var myPlayerTwo = function(event){
    playerTwoDiceOne = myRandomDice();
    playerTwoDiceTwo = myRandomDice();
    console.log(playerTwoDiceOne, playerTwoDiceTwo);
    //dice 1
    var getPlayerTwoDoImg = document.getElementById("dieTwo1");
    var dieOneName = "dice" + playerTwoDiceOne + ".png";
        getPlayerTwoDoImg.src = "images/"+ dieOneName;
    //dice 2
    var getPlayerTwoDtImg = document.getElementById("dieTwo2");
    var dieOneName = "dice" + playerTwoDiceTwo + ".png";
        getPlayerTwoDtImg.src = "images/"+ dieOneName;

        playerTwoResult =  playerTwoDiceOne += playerTwoDiceTwo;
        console.log("playerTwoResult", playerTwoResult);

        checkScore(playerOneResult,playerTwoResult);

        this.removeEventListener('click',myPlayerTwo);

    return playerTwoResult;

}

    var myButtonTwo = document.getElementById("playerTwoButton");
        console.log("xxxxxx", myButtonTwo);
        myButtonTwo.addEventListener("click",myPlayerTwo);

//reset the deck
function myReset(){
    //reset all dices
    playerOneDiceOne = 0;
    playerOneDiceTwo = 0;
    playerTwoDiceOne = 0;
    playerTwoDiceTwo = 0;
    playerOneResult = 0;
    playerTwoResult = 0;
    // reset player one image holder
    //add back the button one click
    myButtonOne.addEventListener('click',myPlayerOne);
    //add back the button two click
    myButtonTwo.addEventListener("click",myPlayerTwo);
    //dice one
    var getPlayerOneDoImg = document.getElementById("dieOne1");
    var dieOneName = "";
        getPlayerOneDoImg.src = "";
   //dice two
    var getPlayerOneDtImg = document.getElementById("dieOne2");
    var dieTwoName = "";
        getPlayerOneDtImg.src = "";
    // reset player two image holder
    //dice 1
    var getPlayerTwoDoImg = document.getElementById("dieTwo1");
    var dieOneName = "";
        getPlayerTwoDoImg.src = "";
    //dice 2
    var getPlayerTwoDtImg = document.getElementById("dieTwo2");
    var dieOneName = ""
        getPlayerTwoDtImg.src = "";
    //reset text
    var showResult = document.getElementById("whoWins");
        showResult.textContent = "Who Will Win?";

}

//reset button
// var resetButton = document.getElementById("reset");
//     console.log("~~~~~~",resetButton);
//     resetButton.addEventListener("click", myReset);

//restart game
function myRestart(){
    location.reload();
}

var getRestart = document.getElementById("restart");
    console.log("==restart works==", restart);
    getRestart.addEventListener("click",myRestart);


var checkScore = function (diceOne,diceTwo){
    //NESTED IF else statement if not don't work
    if (diceOne != 0 && diceTwo != 0){
        console.log("null");
        if (diceOne > diceTwo){
        var showResult = document.getElementById("whoWins");
            showResult.textContent = "Player One Wins!";
            //reset deck
            //console.log("player one win");
            //add scores
            var addScoreOne = document.getElementById("scoreOne");
            winCountOne++
            addScoreOne.textContent = "Wins: " + winCountOne;
            console.log("==counter1==",winCountOne);
            //need to reset the dices
            setTimeout(myReset, 2000);
        } else if (diceOne < diceTwo){
            console.log("player two win");
            //show result
        var showResult = document.getElementById("whoWins");
            showResult.textContent = "Player Two Wins!";

            console.log("player one win");

            var addScoreTwo = document.getElementById("scoreTwo");
            winCountTwo++
            addScoreTwo.textContent = "Wins: " + winCountTwo;
            console.log("==counter2==",winCountTwo);
            //add scores
            //need to reset the dices
            setTimeout(myReset, 2000);
        } else if (diceOne === diceTwo){
            console.log("It's a draw.");
        //show result
        var showResult = document.getElementById("whoWins");
            showResult.textContent = "Draw";
            //add scores
            //need to reset the dices
            setTimeout(myReset, 2000);
        }
    }
    return checkScore;
};