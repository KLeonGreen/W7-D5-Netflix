const param = new URLSearchParams(window.location.search);
const movieID = param.get("movieID");
const movieCAT = param.get("movieCAT");
console.log(movieID);
console.log(movieCAT);

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
    "Content-Type": "application/json",
  },
};

const getMovie = async () => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieCAT}`, options);
  const movies = await response.json();
  //   console.log(movies[1]._id);
  const clickedMovie = movies.filter((movie) => movie._id === movieID);
  const clickedMovieObject = clickedMovie[0];
  return clickedMovieObject;
};

const displayMovie = (clickedMovieObject) => {
  document.querySelector(".row").innerHTML = `  <div class="col-6 mt-5">
                            <h1>Product Details</h1>
                            <div class="card mt-5">
                                <img src=${clickedMovieObject.imageUrl} alt="" />
                            </div>
                            </div>
                            <div id="display-product" class="col-6 mt-5" style="display: flex; align-items: center">
                            <div class="card card-body">
                            <h1>${clickedMovieObject.name}</h1>
                            <h3>${clickedMovieObject.category}</h3>
                            <h6 style="margin-block-start: 1em">
                            ${clickedMovieObject.description}
                            </h6>
                            <div class="mt-4">
                            <button class="btn btn-outline-info" onclick = "editMovie()">Edit</button>
                            <button class="btn btn-danger" onclick ="deleteMovie()">Delete</button>
                            </div>
                        </div>
                        </div>`;
};

window.onload = async () => {
  const clickedMovieObject = await getMovie();
  displayMovie(clickedMovieObject);
};

const deleteMovie = async () => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
      "Content-Type": "application/json",
    },
  };

  try {
    if (confirm("Are you sure?")) {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieID}`, options);

      if (response.ok) {
        window.location.assign("./index.html");
      } else {
        console.log("something went wrong");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
const editMovie = () => {
  window.location.assign(`../backoffice.html?movieID=${movieID}&&movieCAT=${movieCAT}`);
};
