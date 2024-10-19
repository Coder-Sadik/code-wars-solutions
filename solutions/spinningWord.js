function spinWords(string) {
	let array = string.split(" ");
	array.forEach((e, i) => {
		e.length >= 5
			? (array[i] = e.split("").reverse().join(""))
			: (array[i] = e);
	});
	return array.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

