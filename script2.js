console.log("link");

//counterone
var winCountOne = 0;
var getWinCountOne = document.getElementById("scoreOne");
    getWinCountOne.innerHTML = "wins:" + winCountOne;

//counttertwo
var winCountTwo = 0;
var getWinCountTwo = document.getElementById("scoreTwo");
    getWinCountTwo.innerHTML = "wins:" + winCountTwo;

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
    diceTwoResult.innerHTML = diceTwo;
    //console.log("=====", myDiceTwo);
    console.log("myplayerTwo", diceTwo);

    checkScore(diceOne,diceTwo);
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


var checkScore = function (diceOne,diceTwo){
    //NESTED IF else statement if not don't work
    if (diceOne != null && diceTwo != null){
        console.log("null");
        if (diceOne < diceTwo){
        console.log("player one win")
        } else if (diceOne > diceTwo){
        console.log("player two win")
        } else if (diceOne === diceTwo){
        console.log("It's a draw.")
        }
    }
    return checkScore;
}

