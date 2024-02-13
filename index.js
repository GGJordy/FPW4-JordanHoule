// https://www.omdbapi.com/?i=tt3896198&apikey=8545f7f7&s=star_wars

const moviesListEl = document.querySelector('.movie__cards--container')
const moviesWrapper = document.querySelector('.movies__loading')

// GET MOVIES FROM API

async function getMovies(name) {
   moviesListEl.classList += ' movies__loading'
    const movies = await fetch(`https://www.omdbapi.com/?apikey=8545f7f7&s=${name}`)
    moviesListEl.classList.remove('movies__loading')
    const moviesData = await movies.json();
    moviesListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}


// CLEAN UP THE CODE -- MAKE IT SEXY

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

   setTimeout(() => {getMovies(movieName);}, 1000);
    
}

// AUDIO EASTER EGG

// const loudAsHell = document.getElementById("myAudio");

// function setVolume() {
//     loudAsHell.volume = 0.1;
// }

// setVolume();
