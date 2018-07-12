const totals = [30, 40, 80, 50, 60, 70, 999, 939495, 23, 4456, 432556, 9685,];

function origArray() {
	const array = `
	<h1>Original Array</h1>
	<p>${[totals]}</p>
	`
	$('.current').html(array);
	console.log([totals]);
}

function getNumber() {
	$('.js-form').submit(event => {
		event.preventDefault();
		const number = $(event.currentTarget).find('.js-insert');
		const value = number.val();
		number.val("");
		addToArray(value);
	});
}

function addToArray(data) {
	totals.push(data);
	console.log(totals);
}

function updatedArray() {
	const array = `
	<h1>Updated Array</h1>
	<p>${[totals]}</p>
	`
	$('.results').html(array);
}

function showNewArray() {
	$('.js-form').on('click', '.show-new-array', (event => {
		updatedArray();
	}));
}

function sumArray(data) {
	const outPut = data.reduce( (a, b) => a + b);
	const display = `
	<h2>Array Sum</h2>
	<p>${outPut}</p>
	`
	$('.sum').html(display);
}


function displaySum() {
	$('.js-form').on('click', '.addBtn', (event => {
		sumArray(totals);
	}));
}

function app() {
	origArray();
	getNumber();
	showNewArray();
	displaySum();
}

$(app);








// // Shorter Way
// const totals = [30, 40, 80, 50, 60, 70, 999, 939495, 23, 4456, 432556, 9685].reduce( (a, b) => a + b);

// console.log(totals);