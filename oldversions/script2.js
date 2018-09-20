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


var diceOne = null;
    console.log("diceOne", diceOne)
var diceTwo = null;
    console.log("diceTwo", diceTwo);
//dice one
// var diceOneResult = document.getElementById('diceOne');
//     diceOneResult.style.visibility = "visible";
//     diceOneResult.innerHTML = diceOne;
//     //console.log("=====", myDiceOne);
//     console.log("myPlayerOne",diceOne);
//roll dice one
var myPlayerOne = function (event){
    diceOne = myRandomDice();
    console.log("my dice one", diceOne);
    var diceOneResult = document.getElementById('diceOne');
    diceOneResult.style.visibility = "visible";
    diceOneResult.style.fontSize = "180px";
    diceOneResult.innerHTML = diceOne;
    //console.log("=====", myDiceOne);
    console.log("myPlayerOne",diceOne);
    checkScore(diceOne,diceTwo);
    return diceOne;



    // if(diceTwo != null){
    //     checkScore(diceOne,diceTwo);
    //     console.log("p2null");
    // };
}

var myButtonOne = document.getElementById("playOneButton");
    console.log("=====",myButtonOne);
    myButtonOne.addEventListener('click',myPlayerOne);

//dice two
// var diceTwoResult = document.getElementById("diceTwo");
//     diceTwoResult.style.visibility = "visible"
//     diceTwoResult.innerHTML = diceTwo;
//     //console.log("=====", diceTwo);
//     console.log("myplayerTwo", diceTwo);


var myplayerTwo = function (event){
    diceTwo = myRandomDice();
    //console.log("my dice two", myDiceTwo);
    var diceTwoResult = document.getElementById("diceTwo");
    diceTwoResult.style.visibility = "visible"
    diceTwoResult.style.fontSize = "180px";
    diceTwoResult.innerHTML = diceTwo;
    //console.log("=====", myDiceTwo);
    console.log("myplayerTwo", diceTwo);

    checkScore(diceOne,diceTwo);
    return diceTwo;

}

var myButtonTwo = document.getElementById("playerTwoButton");
    console.log("xxxxxx", myButtonTwo);
    myButtonTwo.addEventListener("click",myplayerTwo);

//reset the deck
function myReset(){
    diceOne = null;
    //console.log("reset1",diceOne);
    diceTwo = null;
    //console.log("reset2",diceTwo);

    var diceOneResult = document.getElementById('diceOne');
        diceOneResult.textContent = "";

    var diceTwoResult = document.getElementById("diceTwo");
        diceTwoResult.textContent = "";

    var showResult = document.getElementById("whoWins");
        showResult.textContent = "Who Wins?";
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
    if (diceOne != null && diceTwo != null){
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
