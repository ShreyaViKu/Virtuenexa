document.getElementById('movie-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const releaseDate = document.getElementById('release-date').value;
    addMovieToList(title, genre, releaseDate);
    document.getElementById('title').value = '';
    document.getElementById('release-date').value = '';
});

function addMovieToList(title, genre, releaseDate) {
    const movieList = document.getElementById('movie-list');
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.innerHTML = `
        <span class="title">${title}</span>
        <span class="genre">${genre}</span>
        <span class="release-date">${releaseDate}</span>
        <div class="actions">
            <button onclick="editMovie(this)"><i class="fas fa-edit"></i></button>
            <button onclick="deleteMovie(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;
    movieList.appendChild(movieItem);
}

function deleteMovie(button) {
    const movieItem = button.parentElement.parentElement;
    movieItem.remove();
}

function editMovie(button) {
    const movieItem = button.parentElement.parentElement;
    const title = movieItem.querySelector('.title').textContent;
    const genre = movieItem.querySelector('.genre').textContent;
    const releaseDate = movieItem.querySelector('.release-date').textContent;
    document.getElementById('title').value = title;
    document.getElementById('genre').value = genre;
    document.getElementById('release-date').value = releaseDate;
    movieItem.remove();
}

function filterMovies() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const movieItems = document.querySelectorAll('.movie-item');
    movieItems.forEach(item => {
        const title = item.querySelector('.title').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortMovies() {
    const genre = document.getElementById('sort-genre').value;
    const movieItems = document.querySelectorAll('.movie-item');
    movieItems.forEach(item => {
        const itemGenre = item.querySelector('.genre').textContent;
        if (genre === 'All' || itemGenre === genre) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
