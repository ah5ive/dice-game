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
var myDiceOne = 0;
var myDiceTwo = 0;

function myPlayerOne (event){
    var myDiceOne = myRandomDiceOne();
    console.log("my dice one", myDiceOne);
    var diceOneResult = document.getElementById('diceOne');
    diceOneResult.innerHTML = myDiceOne;
    console.log("=====", myDiceOne);
    //break;
}

//eventlistener to button one, add the throwdice function
var myButtonOne = document.getElementById("playOneButton");
    //console.log("=====",myButtonOne);
    myButtonOne.addEventListener('click',myPlayerOne);

//playerTwo function
function myplayerTwo(event){
    var myDiceTwo = myRandomDiceOne();
    var diceTwoResult = document.getElementById("diceTwo");
    diceTwoResult.innerHTML = myDiceTwo;
    console.log("=====", myDiceTwo);
}

var myButtonTwo = document.getElementById("playerTwoButton");
    console.log("xxxxxx", myButtonTwo);
    myButtonTwo.addEventListener("click",myplayerTwo);

//end player Two

//reset function make number hiddden
function myReset(){
    var diceOneResult = document.getElementById('diceOne');
        diceOneResult.style.visibility = "hidden";
    var diceTwoResult = document.getElementById("diceTwo");
        diceTwoResult.style.visibility = "hidden"
}

var resetButton = document.getElementById("reset");
    console.log("~~~~~~",resetButton);
    resetButton.addEventListener("click", myReset);

