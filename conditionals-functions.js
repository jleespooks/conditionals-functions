/*
// Equals
let equals = 1 === 1;

// Greater Than
let greaterThan = 5 > 1;

// Less Than
let LessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >=5;

// Less Than Equals
let LessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;



let storeA = 4.40;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("store A is a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}
compareStorePrices(10, 5);
compareStorePrices(7, 10)



function squareNum (number){
	let squared = number * number;
	return squared;
}

let squaredNumber = squareNum(10)
console.log(squaredNumber);

let x = 10;

function addnumber (n, m, x){
	console.log(x);
	let b;
	if (1===1) {
		 b = 8;
	}
	console.log(b);
	return n + m;
}
addnumber(1, 1, 10);



let ourArray = [1, 1, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for (let i = 0; i<arrlen; i++){
	//console.log("i is equal to: " +i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++){
		console.log('j is equal to: ' +j);
	}
}
*/

let x = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1;
}