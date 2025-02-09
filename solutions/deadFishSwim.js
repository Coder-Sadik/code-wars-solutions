function parse(data) {
	let n = 0,
		output = [];
	for (let char of data) {
		switch (char) {
			case "i":
				n++;
				break;
			case "d":
				n--;
				break;
			case "s":
				n = n * n;
				break;
			case "o":
				output.push(n);
				break;

			default:
				break;
		}
	}

	return output;
}

console.log(parse("iiisdoso"));
