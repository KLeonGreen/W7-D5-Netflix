const param = new URLSearchParams(window.location.search);
const movieID = param.get("movieID");
const movieCAT = param.get("movieCAT");
console.log(movieCAT);

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
    "Content-Type": "application/json",
  },
};

window.onload = async () => {
  if (movieID) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieCAT}`, options);
    const movies = await response.json();
    const movieToEdit = movies.filter((movie) => movie._id === movieID);
    const movie = movieToEdit[0];

    console.log(movie);

    let submitBtn = document.querySelector("#create-product");
    let collapse = document.querySelector("#collapseExample");
    let collapsebtn = document.querySelector("#collapse-btn");
    collapsebtn.textContent = "Edit Movie";
    submitBtn.textContent = "Confirm Edit Movie";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-outline-info");
    collapse.classList.add("show");

    document.querySelector("#product-name").value = movie.name;
    document.querySelector("#product-description").value = movie.description;
    document.querySelector("#select-cat").value = movie.category;
    document.querySelector("#product-image").value = movie.imageUrl;
  }
};

async function addNewMovie() {
  const newMovie = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    category: document.querySelector("#select-cat").value,
    imageUrl: document.querySelector("#product-image").value,
  };

  const options = {
    method: movieID ? "PUT" : "POST",
    body: JSON.stringify(newMovie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjgxNTk1MzIsImV4cCI6MTY2OTM2OTEzMn0.ik9L5QbPowWKJtq9ou81X31GdbAxzvghTURqSgYMUAM",
      "Content-Type": "application/json",
    },
  };

  try {
    const selectApi = movieID ? `https://striveschool-api.herokuapp.com/api/movies/${movieID}` : "https://striveschool-api.herokuapp.com/api/movies";

    const response = await fetch(selectApi, options);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert(movieID ? "Product added successfully" : "Product added successfully");
      window.location.assign("./index.html");
    } else {
      throw new error("Something Went Wrong");
    }
  } catch (error) {
    console.error(error);
  }
}
