const search = document.querySelector('.search');
const navSearch = document.querySelector('.nav-container');
const movieTitle = document.querySelectorAll('.movie-title');
const movieRating = document.querySelectorAll('.rating');

search.addEventListener('click', (e) => {
	navSearch.classList.toggle('active');
});

async function fetchMovies() {
	const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=5ef5b08552ca40ccb0b55292a80442f0');
	const movies = await response.json();
}
fetchMovies().then((movies) => {
	movies;
});
