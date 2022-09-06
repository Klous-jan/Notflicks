const sliders1 = document.querySelector(".carouselBox1");
var scrollPerClick1;
var imagePadding1 = 20;

showMovieData1();

var scrollAmount1 = 0;

function sliderScrollLeft1() {
    sliders1.scrollTo({
        top: 0,
        left: (scrollAmount1 -= scrollPerClick1),
        behavior: "smooth",
    });

    if (scrollAmount1 < 0) {
        scrollAmount1 = 0;
    }
}

function sliderScrollRight1() {
    if (scrollAmount1 <= sliders1.scrollWidth - sliders1.clientWidth) {
        sliders1.scrollTo({
            top: 0,
            left: (scrollAmount1 += scrollPerClick1),
            behavior: "smooth",
        })
    }
}

async function showMovieData1() {
    const api_key = "c410e49d7b8a0b61da272540eac14079";
    var result = await axios.get(

        "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&api_key=" +
        api_key +
        "&sort_by=revenue.desc&with_cast=3896"
    );
    result = result.data.results;

    result.map(function(cur, index) {
        sliders1.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        );
    })
    scrollPerClick1 = document.querySelector(".img-1").clientWidth + imagePadding1;
}

// Carousel 2

const sliders2 = document.querySelector(".carouselBox2");
var scrollPerClick2;
var imagePadding2 = 20;

showMovieData2();

var scrollAmount2 = 0;

function sliderScrollLeft2() {
    sliders2.scrollTo({
        top: 0,
        left: (scrollAmount2 -= scrollPerClick2),
        behavior: "smooth",
    });

    if (scrollAmount2 < 0) {
        scrollAmount2 = 0;
    }
}

function sliderScrollRight2() {
    if (scrollAmount2 <= sliders2.scrollWidth - sliders2.clientWidth) {
        sliders2.scrollTo({
            top: 0,
            left: (scrollAmount2 += scrollPerClick2),
            behavior: "smooth",
        })
    }
}

async function showMovieData2() {
    const api_key = "c410e49d7b8a0b61da272540eac14079";
    var result = await axios.get(

        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    );
    result = result.data.results;

    result.map(function(cur, index) {
        sliders2.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        );
    })
    scrollPerClick2 = document.querySelector(".img-1").clientWidth + imagePadding2;
}

// Carousel 3

const sliders3 = document.querySelector(".carouselBox3");
var scrollPerClick3;
var imagePadding3 = 20;

showMovieData3();

var scrollAmount3 = 0;

function sliderScrollLeft3() {
    sliders3.scrollTo({
        top: 0,
        left: (scrollAmount3 -= scrollPerClick3),
        behavior: "smooth",
    });

    if (scrollAmount3 < 0) {
        scrollAmount3 = 0;
    }
}

function sliderScrollRight3() {
    if (scrollAmount3 <= sliders3.scrollWidth - sliders3.clientWidth) {
        sliders3.scrollTo({
            top: 0,
            left: (scrollAmount3 += scrollPerClick3),
            behavior: "smooth",
        })
    }
}

async function showMovieData3() {
    const api_key = "c410e49d7b8a0b61da272540eac14079";
    var result = await axios.get(

        "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    );
    result = result.data.results;

    result.map(function(cur, index) {
        sliders3.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        );
    })
    scrollPerClick3 = document.querySelector(".img-1").clientWidth + imagePadding3;
}