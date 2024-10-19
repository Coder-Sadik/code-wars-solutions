//best practice
function arrayDiff(a, b) {
	return a.filter((element) => !b.includes(element));
}

console.log(arrayDiff([1, 2, 2, 4, 6, 7, 4, 6, 7, 3], [2, 4, 6, 7]));

//my noob solution 😐
// without using filter method

// function arrayDiff(a, b) {
// 	b.forEach((eleB) => {
// 		remove(a, eleB);
// 	});
// 	return a;
// }

// function remove(ara, value) {
// 	ara.forEach((element, index) => {
// 		if (element === value) {
// 			ara.splice(index, 1);
// 			remove(ara, value);
// 		}
// 	});
// 	return ara;
// }
