const array = [
	-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
	19, 20,
];

console.log("start");

const rangeExtraction = (array) => {
	let start = array[0],
		end = array[0],
		result = [];

	for (let i = 1; i <= array.length; i++) {
		// check the current value is consecutive to previous
		if (array[i] === array[i - 1] + 1) continue;

		// if value is not consecutive
		end = array[i - 1];

		if (start === end) {
			result.push(start.toString());
		} else if (start === end - 1) {
			// two consecutive numbers can't be a range
			result.push(start.toString(), end.toString());
		} else {
			result.push(`${start}-${end}`);
		}

		if (i < array.length) {
			start = array[i];
		}
	}

	return result.join(",");
};

console.log(rangeExtraction(array));
