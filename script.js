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

function playerOne (event){
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

    myButtonOne.addEventListener('click',playerOne);

//button works

//create throwdice funtion

