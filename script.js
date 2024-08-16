// Movies array (This would typically come from a database or API)
const movies = [
    {
        title: "Deadpool & Wolverine",
        poster: "https://i.postimg.cc/Prp1MyMT/Deadpool-Wolverine-poster.jpg",
        link: "movie1.html"
    },
   
    // Add more movies as needed
];

// Function to render movies on the homepage
function renderMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        movieDiv.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.poster}" alt="${movie.title} Poster">
                <h3>${movie.title}</h3>
            </a>
        `;

        movieList.appendChild(movieDiv);
    });
}

// Initially render all movies
renderMovies();


// Function to handle scroll animation
function handleScrollAnimation() {
    const movies = document.querySelectorAll('.movie.hidden');
    
    movies.forEach(movie => {
        const moviePosition = movie.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (moviePosition < windowHeight - 50) {
            movie.classList.remove('hidden');
        }
    });
}
