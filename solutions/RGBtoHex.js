function range(n) {
	if (n < 0) {
		n = 0;
	} else if (n > 255) {
		n = 255;
	} else n = n;

	return n;
}

function rgb(r, g, b) {
	let hex =
		range(r).toString(16).padStart(2, "0") +
		range(g).toString(16).padStart(2, "0") +
		range(b).toString(16).padStart(2, "0");
	
	return hex.toUpperCase();
}

console.log(rgb(300, 255, 255));

