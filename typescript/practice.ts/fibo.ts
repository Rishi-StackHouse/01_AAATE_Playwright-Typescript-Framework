function fibonacci(num: number): number[] {
	
	let a=0, b=1;
	const result: number[] = [];
	
	for (let i=0; i < num; i++ ) {
		result[i] = a;
		const next = a+b;
		a = b;
		b =next;
	}
	return result;
}


console.log(fibonacci(8));  