import React, { useEffect, useState } from "react";
import "./Banner.css";
import links from "./links";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      let res = await fetch(links.trending);
      let data = await res.json();
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="fading__area"></div>
    </header>
  );
}

export default Banner;
