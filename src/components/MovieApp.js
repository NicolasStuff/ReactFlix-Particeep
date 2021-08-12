import React from "react";
import Header from "./MovieHeader.js";
import MovieList from "./MovieList.js";
// import Pagination from "./Pagination.js";

const MovieApp = () => {
    return (
      <div className="container-flud backgroundBlack">
        <Header />
        <MovieList />
      </div>
    );
}

export default MovieApp;
