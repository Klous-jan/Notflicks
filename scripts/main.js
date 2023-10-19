// --------- Start of Carousel #NumOne ---------
const slidersNumOne = document.querySelector(".CBN1");
var scrollPerClickNumOne;
var imagePaddingNumOne = 20;
var scrollAmountNumOne = 0;

function sliderScrollLeftNumOne() {
	slidersNumOne.scrollTo({
		top: 0,
		left: (scrollAmountNumOne -= scrollPerClickNumOne),
		behavior: "smooth",
	});

	if (scrollAmountNumOne < 0) {
		scrollAmountNumOne = 0;
	}
}

function sliderScrollRightNumOne() {
	if (scrollAmountNumOne <= slidersNumOne.scrollWidth - slidersNumOne.clientWidth) {
		slidersNumOne.scrollTo({
			top: 0,
			left: (scrollAmountNumOne += scrollPerClickNumOne),
			behavior: "smooth",
		});
	}
}

async function showMovieDataNumOne() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&api_key=" + api_key + "&primary_release_date.lte=2014-10-22");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersNumOne.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickNumOne = document.querySelector(".img-1").clientWidth + imagePaddingNumOne * 6.6;
}
showMovieDataNumOne();

// Hide left arrow till right arrow is pressed
function ShowLNumOne() {
	var T = document.getElementById("LNumOne");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #NumOne  ---------
// --------- Start of Carousel #Two ---------
const slidersTwo = document.querySelector(".CBN2");
var scrollPerClickTwo;
var imagePaddingTwo = 20;
var scrollAmountTwo = 0;

function sliderScrollLeftTwo() {
	slidersTwo.scrollTo({
		top: 0,
		left: (scrollAmountTwo -= scrollPerClickTwo),
		behavior: "smooth",
	});

	if (scrollAmountTwo < 0) {
		scrollAmountTwo = 0;
	}
}

function sliderScrollRightTwo() {
	if (scrollAmountTwo <= slidersTwo.scrollWidth - slidersTwo.clientWidth) {
		slidersTwo.scrollTo({
			top: 0,
			left: (scrollAmountTwo += scrollPerClickTwo),
			behavior: "smooth",
		});
	}
}

async function showMovieDataTwo() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&sort_by=popularity.desc");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersTwo.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickTwo = document.querySelector(".img-1").clientWidth + imagePaddingTwo * 6.6;
}
showMovieDataTwo();

// Hide left arrow till right arrow is pressed
function ShowLNumTwo() {
	var T = document.getElementById("LNumTwo");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Two  ---------
// --------- Start of Carousel #Three ---------
const slidersThree = document.querySelector(".CBN3");
var scrollPerClickThree;
var imagePaddingThree = 20;
var scrollAmountThree = 0;

function sliderScrollLeftThree() {
	slidersThree.scrollTo({
		top: 0,
		left: (scrollAmountThree -= scrollPerClickThree),
		behavior: "smooth",
	});

	if (scrollAmountThree < 0) {
		scrollAmountThree = 0;
	}
}

function sliderScrollRightThree() {
	if (scrollAmountThree <= slidersThree.scrollWidth - slidersThree.clientWidth) {
		slidersThree.scrollTo({
			top: 0,
			left: (scrollAmountThree += scrollPerClickThree),
			behavior: "smooth",
		});
	}
}

async function showMovieDataThree() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=" + api_key + "&sort_by=popularity.desc");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersThree.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickThree = document.querySelector(".img-1").clientWidth + imagePaddingThree * 6.6;
}
showMovieDataThree();

// Hide left arrow till right arrow is pressed
function ShowLNumThree() {
	var T = document.getElementById("LNumThree");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Three  ---------
// --------- Start of Carousel #Four ---------
const slidersFour = document.querySelector(".CBN4");
var scrollPerClickFour;
var imagePaddingFour = 20;
var scrollAmountFour = 0;

function sliderScrollLeftFour() {
	slidersFour.scrollTo({
		top: 0,
		left: (scrollAmountFour -= scrollPerClickFour),
		behavior: "smooth",
	});

	if (scrollAmountFour < 0) {
		scrollAmountFour = 0;
	}
}

function sliderScrollRightFour() {
	if (scrollAmountFour <= slidersFour.scrollWidth - slidersFour.clientWidth) {
		slidersFour.scrollTo({
			top: 0,
			left: (scrollAmountFour += scrollPerClickFour),
			behavior: "smooth",
		});
	}
}

async function showMovieDataFour() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=" + api_key + "&sort_by=popularity.desc");
	// var result = await axios.get("https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&api_key=" + api_key + "&primary_release_year=2014");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersFour.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickFour = document.querySelector(".img-1").clientWidth + imagePaddingFour * 6.6;
}
showMovieDataFour();

// Hide left arrow till right arrow is pressed
function ShowLNumFour() {
	var T = document.getElementById("LNumFour");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Four  ---------
// --------- Start of Carousel #Five ---------
const slidersFive = document.querySelector(".CBN5");
var scrollPerClickFive;
var imagePaddingFive = 20;
var scrollAmountFive = 0;

function sliderScrollLeftFive() {
	slidersFive.scrollTo({
		top: 0,
		left: (scrollAmountFive -= scrollPerClickFive),
		behavior: "smooth",
	});

	if (scrollAmountFive < 0) {
		scrollAmountFive = 0;
	}
}

function sliderScrollRightFive() {
	if (scrollAmountFive <= slidersFive.scrollWidth - slidersFive.clientWidth) {
		slidersFive.scrollTo({
			top: 0,
			left: (scrollAmountFive += scrollPerClickFive),
			behavior: "smooth",
		});
	}
}

async function showMovieDataFive() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=" + api_key + "&sort_by=vote_average.desc");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersFive.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickFive = document.querySelector(".img-1").clientWidth + imagePaddingFive * 6.6;
}
showMovieDataFive();

// Hide left arrow till right arrow is pressed
function ShowLNumFive() {
	var T = document.getElementById("LNumFive");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Five  ---------
// --------- Start of Carousel #Six ---------
const slidersSix = document.querySelector(".CBN6");
var scrollPerClickSix;
var imagePaddingSix = 20;
var scrollAmountSix = 0;

function sliderScrollLeftSix() {
	slidersSix.scrollTo({
		top: 0,
		left: (scrollAmountSix -= scrollPerClickSix),
		behavior: "smooth",
	});

	if (scrollAmountSix < 0) {
		scrollAmountSix = 0;
	}
}

function sliderScrollRightSix() {
	if (scrollAmountSix <= slidersSix.scrollWidth - slidersSix.clientWidth) {
		slidersSix.scrollTo({
			top: 0,
			left: (scrollAmountSix += scrollPerClickSix),
			behavior: "smooth",
		});
	}
}

async function showMovieDataSix() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&api_key=" + api_key + "&sort_by=popularity.desc");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersSix.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickSix = document.querySelector(".img-1").clientWidth + imagePaddingSix * 6.6;
}
showMovieDataSix();

// Hide left arrow till right arrow is pressed
function ShowLNumSix() {
	var T = document.getElementById("LNumSix");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Six  ---------
// --------- Start of Carousel #Seven ---------
const slidersSeven = document.querySelector(".CBN7");
var scrollPerClickSeven;
var imagePaddingSeven = 20;
var scrollAmountSeven = 0;

function sliderScrollLeftSeven() {
	slidersSeven.scrollTo({
		top: 0,
		left: (scrollAmountSeven -= scrollPerClickSeven),
		behavior: "smooth",
	});

	if (scrollAmountSeven < 0) {
		scrollAmountSeven = 0;
	}
}

function sliderScrollRightSeven() {
	if (scrollAmountSeven <= slidersSeven.scrollWidth - slidersSeven.clientWidth) {
		slidersSeven.scrollTo({
			top: 0,
			left: (scrollAmountSeven += scrollPerClickSeven),
			behavior: "smooth",
		});
	}
}

async function showMovieDataSeven() {
	const api_key = "c410e49d7b8a0b61da272540eac14079";
	var result = await axios.get("https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&api_key=" + api_key + "&sort_by=revenue.desc");
	result = result.data.results;

	result.map(function (cur, index) {
		slidersSeven.insertAdjacentHTML("beforeend", `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`);
	});
	scrollPerClickSeven = document.querySelector(".img-1").clientWidth + imagePaddingSeven * 6.6;
}
showMovieDataSeven();

// Hide left arrow till right arrow is pressed
function ShowLNumSeven() {
	var T = document.getElementById("LNumSeven");
	T.style.display = "block"; // <-- Set it to block
}
// ---------  End of Carousel #Seven  ---------
