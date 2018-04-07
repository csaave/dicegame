window.alert("Roll A Die");
window.onload=function(){
let diceNum=6;
let diffDice=[4,6,10,12,16,20];

function diceRandom(numberDice){
	let randomDice=Math.floor(Math.random()*numberDice);
	return randomDice;
}
diceRandom(diceNum);
console.log(diceRandom(diceNum));

let diceSides = diffDice[diceRandom(diceNum)];

function diceRoll(numSides){
	
			let diceResult=Math.floor(Math.random()*diceSides)+1;
	
	return diceResult;
}


function printNumber(rollResult) {
	let placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = rollResult;
}

let button = document.getElementById('button');

button.onclick = function() {
	let result = diceRoll(diceSides);
	printNumber(result);
	console.log(diceScores[result]);
	diceScores[result];

	}

let diceScores = {1:100, 5:50, 7:1000, 10:200, 13:300, 15:400, 18:500, 20:600}
	diceScores["result"];
	
}

/*let = new Object(),
	str="diffDice",
	
	obj= new Object();
	myObj.type

console.log(myObj);*/

/*let rollScore = new Object(diceRoll(1));
let points.score="100";
console.log(diceRandom(rollScore));
*/
/*function Scorecard(){
	let score=
}
*/

/*each 1 = 100
each 5 = 50
each 7 = 1000
each 10= 200
each 13= 300
each 15= 400
each 18= 500
each 20= 600
let a 4 certain numbers lower score (maybe by half or certain points) let one number reset score
hopefully with a lower probability to land on it 
add a score card
add scores together from 1 dice roll to another
odd clicks is player one even clicks player two
*/

