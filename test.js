window.alert("Roll A Die");
let dice={
	sides:20,
	roll:function(){
		let randomNumber=Math.floor(Math.random()*this.sides)+1;
		return randomNumber;
	}
}

function printNumber(number) {
	let placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
	let result = dice.roll();
	printNumber(result);
};