function toCamelCase(str) {
	let array = str.split(/[-_]/);

	let i = 1,
		temp;

	while (i < array.length) {
		temp = array[i].slice(1);

		array[i] = array[i].charAt(0).toUpperCase();
		array[i] = array[i] + temp;

		i++;
	}

	return array.join("");
}

console.log(toCamelCase("the_titanic-was_the_Biggest-ship"));

//****** alternative solution using regEx *******/

// function toCamelCase(str) {
// 	return str.replace(/[_-](.)/g, (_, c) => c.toUpperCase());
// }
