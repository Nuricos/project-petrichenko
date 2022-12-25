"use strict";

function getSum(arr) {
	let sum = 0;

	for(let elem of arr) {
		sum += elem;
	}
	return sum;
}

getSum([1,2,3,4,5,6]);