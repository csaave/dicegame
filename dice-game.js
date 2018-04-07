window.alert("Roll A Die");
function diceRoll(){
	let diceNum=6;
	let diffDice=[4,6,10,12,20]
	let setDice=[]
	for(let i=0;i<diceNum;i++){
		let diceResult=Math.floor(Math.random()*setDice[i])+1;
		diceSetValues.push(diceResult);
	}
	return diceSetValues;
}

function diceSetValues
	
	let sum = 0;
	for(let i = 0; i < diceArray.length; i++){
		sum += diceArray[i];
	}
	
	return sum;


function printNumber(number) {
	let placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
	let result = diceRoll();
	printNumber(result);
}

/*function points(x){
	if(return randomNumber===1){
		playerScore += 100;
	}
	else(return randomNumber===5){
		playerScore += 50;
	}
	else(return randomNumber===7){
		playerScore += 1000;
	}
	else(return randomNumber===10){
		playerScore += 200;
	}
	else(return randomNumber===13){
		playerScore += 300;
	}
	else(return randomNumber===15){
		playerScore += 400;
	}
	else(return randomNumber===18){
		playerScore += 500;
	}
	else(return randomNumber===20){
		playerScore += 600;
	}
}

function Scorecard(){
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
let a 4 certain numbers reset score back to 0 
 add a score card
add scores together from 1 dice roll to another
*/


/*let dice={
	sides:20,
	roll:function(){
		let randomNumber=Math.floor(Math.random()*this.sides)+1;
		return randomNumber;
	}
}*/