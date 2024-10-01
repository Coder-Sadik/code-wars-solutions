function solution(str, ending) {
	let i = str.length - ending.length;
	console.log(i);

	for (const char of ending) {
		if (str[i] !== char) {
			return false;
		} else i++;
	}
	return true;
}
console.log(solution("sadik", "ik"));
