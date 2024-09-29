//Take a ten minutes walk solution
function isValidWalk(walk) {
	let dx = 0,
		dy = 0,
		dt = walk.length;
	if (dt !== 10) {
		return false;
	}
	walk.forEach((direction) => {
		switch (direction) {
			case "n":
				dx++;
				break;
			case "s":
				dx--;
				break;
			case "e":
				dy++;
				break;
			case "w":
				dy--;
				break;
			default:
				break;
		}
	});

	return dt === 10 && dx === 0 && dy === 0;
}
