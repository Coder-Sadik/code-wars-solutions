function solution(str, ending) {
	let l1 = str.length;
	let l2 = ending.length;
	let i = l1 - l2;

	for (const char of ending) {
		if (str[i] !== char) {
			return false;
		} else i++;
	}
	return true;
}
console.log(solution("abcde", "e"));
