/* fibonacci sequence */

function nthFib(n) {
	var fibs = [0, 1];

	for(; n > 1; n-- ){
		fibs.push(fibs.shift() + fibs[0]);
	}

	return fibs[n];
}