function dnaStrand(dna) {
	const map = { A: "T", T: "A", G: "C", C: "G" };

	let reverseDna = dna.replace(/[ATGC]/g, (char) => map[char]);
	return reverseDna;
}
