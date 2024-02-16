
const moviesListEl = document.querySelector('.movie__cards--container')
const moviesWrapper = document.querySelector('.movies__loading')



// GET MOVIES FROM API

async function getMovies(name) {
    moviesListEl.innerhtml = "";
    const movies = await fetch(`https://www.omdbapi.com/?apikey=8545f7f7&s=${name}`)
    const moviesData = await movies.json();
    moviesListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}


// CLEAN UP THE CODE -- MAKE IT SEXY (dynamic)

function moviesHTML(movie) {
    return `<div class="movie__card">
    <figure class="movie__poster--wrapper">
    <img src=${(movie.Poster !== 'N/A') ? movie.Poster : "./SWassets/GGJordylogo--white.svg"} class="movie__poster" alt="">
    </figure>
    <div class="movie__details">
    <h3>Title: <span class="blue">${movie.Title}</span></h3>
    <h4>Year: <span class="blue">${movie.Year}</span></h4>
    <h4>Trailer: <a href="https://www.youtube.com/results?search_query=${movie.Title}+trailer" target="_blank" class="card__links">Watch Now</a></h4>
    </div>
    </div>`
}


// SEARCH BAR FUNCTIONALITY

async function onSearchChange(name) {
   const movieName = name.target.value;
   showLoading(true);
   setTimeout(() => {getMovies(movieName);}, 1000)
   
   
}


// LOADING SCREEN 

function showLoading(isLoading) {
    moviesWrapper.style.display = "block"
}


