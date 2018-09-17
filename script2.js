console.log("link");

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
    diceOneResult.innerHTML = diceOne;
    //console.log("=====", myDiceOne);
    console.log("myPlayerOne",diceOne);
    return diceOne;
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
    diceTwoResult.innerHTML = diceTwo;
    //console.log("=====", myDiceTwo);
    console.log("myplayerTwo", diceTwo);
    return diceTwo;
}

var myButtonTwo = document.getElementById("playerTwoButton");
    console.log("xxxxxx", myButtonTwo);
    myButtonTwo.addEventListener("click",myplayerTwo);

//reset
function myReset(){
    diceOne = null;
    console.log("reset1",diceOne)
    diceTwo = null;
    console.log("reset2",diceTwo)
    var diceOneResult = document.getElementById('diceOne');
        diceOneResult.textContent = "";
    var diceTwoResult = document.getElementById("diceTwo");
        diceTwoResult.textContent = ""
}

var resetButton = document.getElementById("reset");
    console.log("~~~~~~",resetButton);
    resetButton.addEventListener("click", myReset);


var checkScore = function (diceOneResult,diceTwoResult){
    if (diceOneResult == diceTwoResult){

    }
//     else if (diceOneResult <= diceTwoResult){
//     console.log("player one Win");
//     } else if (diceTwoResult >= diceOneResult) {
//         console.log("player two wins");
//     }
    console.log("draw",checkScore);
    return checkScore;
}

checkScore(diceOne,diceTwo);