console.log("link");

function myRandomDiceOne (){
    return Math.floor(Math.random()*6) + 1;
}

//test button
/*function throwOne(event){
    //document.getElementById("diceOne").innerHTML = "A";
    var diceThrowOne
    for (diceThrowOne = 0; diceThrowOne < 10; diceThrowOne++){
        diceThrowOne = (Math.floor(Math.random()*6) + 1);
        // break;
        document.getElementById("diceOne").innerHTML = diceThrowOne;
        console.log(diceThrowOne);
    }
}*/
//myPlayerOne function


var myPlayerOne = function (event){
    var myDiceOne = 0;
    var myDiceOne = myRandomDiceOne();
    //console.log("my dice one", myDiceOne);
    var diceOneResult = document.getElementById('diceOne');
    diceOneResult.style.visibility = "visible";
    diceOneResult.innerHTML = myDiceOne;
    //console.log("=====", myDiceOne);
    console.log("myPlayerOne",myDiceOne);
    return myDiceOne;
}


//eventlistener to button one, add the throwdice function
var myButtonOne = document.getElementById("playOneButton");
    console.log("=====",myButtonOne);
    myButtonOne.addEventListener('click',myPlayerOne);

//playerTwo function
var myplayerTwo = function (event){
    var myDiceTwo = 0;
    var myDiceTwo = myRandomDiceOne();
    //console.log("my dice two", myDiceTwo);
    var diceTwoResult = document.getElementById("diceTwo");
    diceTwoResult.style.visibility = "visible"
    diceTwoResult.innerHTML = myDiceTwo;
    //console.log("=====", myDiceTwo);
    console.log("myplayerTwo", myDiceTwo);
    return myDiceTwo;
}

var myButtonTwo = document.getElementById("playerTwoButton");
    console.log("xxxxxx", myButtonTwo);
    myButtonTwo.addEventListener("click",myplayerTwo);

//end player Two

//reset function make number hiddden
function myReset(){
    var diceOneResult = document.getElementById('diceOne');
        diceOneResult.textContent = "";
    var diceTwoResult = document.getElementById("diceTwo");
        diceTwoResult.textContent = ""
}

var resetButton = document.getElementById("reset");
    console.log("~~~~~~",resetButton);
    resetButton.addEventListener("click", myReset);

// var checkScore = function (diceOneResult,diceTwoResult){
//     if (diceOneResult === NaN && diceTwoResult === NaN ){

//     }
//     else if (diceOneResult <= diceTwoResult){
//     console.log("player one Win");
//     } else if (diceTwoResult >= diceOneResult) {
//         console.log("player two wins");
//     }
//  return checkScore;
// }

//console.log("=======",myPlayerOne);
// checkScore(myPlayerOne, myplayerTwo);

// if (myPlayerOne === myplayerTwo){
//     console.log("Draw");
// } else if (myPlayerOne < myplayerTwo ){
//     console.log("playerTwo");
// }  else if (myPlayerOne > myplayerTwo){
//     console.log("PlayerOne win");
// }