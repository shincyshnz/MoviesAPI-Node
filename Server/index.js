const express = require("express");
const app = express();
const moviesList = require("./movies.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get("/api/movies", (req, res) => {
    const { movieName } = req.query;
    let filteredMovies = [];
    if (movieName) {
        filteredMovies = moviesList.filter((movie) => {
            return movie.title.toLowerCase().includes(movieName.toLowerCase())
        });
    } else {
        filteredMovies = moviesList;
    }

    res.json({
        results: filteredMovies,
    });
});


const PORT = 3005
app.listen(PORT, () => console.log(`Server started at ${PORT}`));