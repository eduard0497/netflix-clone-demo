import React, { useState, useEffect } from "react";
import "./CategoryRowCSS.css";
import YouTube from "react-youtube";

const movieTrailer = require("movie-trailer");

const baseUrl = "https://image.tmdb.org/t/p/original/";

function CategoryRow({ title, link, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      let res = await fetch(link);
      let data = await res.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, [link]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  return (
    <div className="row__container">
      <h1>{title}</h1>
      <div className="row__cards">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__card ${isLargeRow && "row__cardLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default CategoryRow;
