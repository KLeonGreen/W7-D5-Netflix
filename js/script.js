const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
  },
};

const displayComedyMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Comedy", options);
  const movies = await response.json();
  console.log(movies);

  movies.forEach((movie) => {
    console.log(movie);
    const rowOfMovies = document.querySelector("#comedy");
    rowOfMovies.innerHTML += `
                                    
                                    <div class="col-md-2" href="./details.html">
                                    <a href="./details.html?movieID=${movie._id}&&movieCAT=${movie.category}">
                                    <img class="movie-cover" src=${movie.imageUrl} />
                                    </a>
                                    
                                   
                                    </div>`;
  });
};
const displayHorrorMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Horror", options);
  const movies = await response.json();
  console.log(movies);

  movies.forEach((movie) => {
    console.log(movie);
    const rowOfMovies = document.querySelector("#horror");
    rowOfMovies.innerHTML += `
                                    
                                    <div class="col-md-2" href="./details.html">
                                    <a href="./details.html?movieID=${movie._id}&&movieCAT=${movie.category}">
                                    <img class="movie-cover" src=${movie.imageUrl} />
                                    </a>
                                    
                                   
                                    </div>`;
  });
};
const displayRomanticMovies = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/Romantic", options);
  const movies = await response.json();
  console.log(movies);

  movies.forEach((movie) => {
    console.log(movie);
    const rowOfMovies = document.querySelector("#romantic");
    rowOfMovies.innerHTML += `
                                    
                                    <div class="col-md-2" href="./details.html">
                                    <a href="./details.html?movieID=${movie._id}&&movieCAT=${movie.category}">
                                    <img class="movie-cover" src=${movie.imageUrl} />
                                    </a>
                                    
                                   
                                    </div>`;
  });
};

window.onload = async () => {
  displayComedyMovies();
  displayHorrorMovies();
  displayRomanticMovies();
};
