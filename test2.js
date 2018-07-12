const totals = [30, 40, 80, 50, 60, 70, 999, 939495, 23, 4456, 432556, 9685,];

function sumArray(data) {
	sum = data.reduce((a, b) => a + b);
	return sum;
}

sumArray(totals);