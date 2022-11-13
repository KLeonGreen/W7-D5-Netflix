const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
  },
};

const displayMovies = async (genre) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${genre}`, options);
  const movies = await response.json();
  console.log(movies);

  movies.forEach((movie) => {
    console.log(movie);
    const rowOfMovies = document.querySelector(`#${genre}`);
    const posters = document.querySelectorAll(`#posters-${genre}`);
    if (posters.length < 6) {
      rowOfMovies.innerHTML += `
                                    
                                    <div id="posters-${genre}" class="col-md-2" href="./details.html">
                                    <a href="./details.html?movieID=${movie._id}&&movieCAT=${movie.category}">
                                    <img class="movie-cover" src=${movie.imageUrl} />
                                    </a>
                                    
                                   
                                    </div>`;
    } else {
      const rowOfMovies2 = document.querySelector(`#${genre}2`);
      rowOfMovies2.innerHTML += `
                                    
                                    <div id="posters-${genre}" class="col-md-2" href="./details.html">
                                    <a href="./details.html?movieID=${movie._id}&&movieCAT=${movie.category}">
                                    <img class="movie-cover" src=${movie.imageUrl} />
                                    </a>
                                    
                                  
                                    </div>`;
    }
  });
};

window.onload = async () => {
  displayMovies("Comedy");
  displayMovies("Horror");
  displayMovies("Romantic");
};
