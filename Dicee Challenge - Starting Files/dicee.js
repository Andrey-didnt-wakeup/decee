var random = Math.floor(Math.random() *6) +1;
var randomDice = "dice" + random + ".png";
var randomSource = "images/" + randomDice;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource);


var random2 = Math.floor(Math.random() *6)+1;
var randomSource2 = "images/dice"+ random2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

 if (random > random2){
   document.querySelector("h1").innerHTML = " Игрок 1 - настойщий диднт вейкап!!";
 } else if (random2 > random){
   document.querySelector("h1").innerHTML = "Игрок 2 - настойщий диднтвейкаповец!!";
 }
 else{
   document.querySelector("h1").innerHTML = "Крутые";
 }
