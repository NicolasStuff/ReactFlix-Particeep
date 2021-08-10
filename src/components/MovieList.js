import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
import { connect } from "react-redux";

const MovieList = ({ movieList, titleSearched }) => {

  // Like and Dislike
  const [likedBands, updateLikedBands] = useState([]);

  // FILTER BY CATEGORY
  const [filter, setFilter] = useState(new Set()); 
  const filterCheck = (value) => {
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.delete(value);
        return newSetFilter;
      });
    } else {
       setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.add(value);
        return newSetFilter;
      });
    }
  }

  return (
    <main className="main-content">

      {/* FILTER */}
      <form className="filter-form">
        <div className="checkbox-select">
          <label htmlFor="Comedy">
            <input type="checkbox" className="mr-2 cat-check" id="comedy" selected={filter.has("Comedy")} onClick={() => filterCheck("Comedy")} /> 
            <span class="checkmark"></span>
            Comedy
          </label>

          <label htmlFor="Animation">
            <input type="checkbox" className="mr-2 cat-check" id="animation" selected={filter.has("Animation")} onClick={() => filterCheck("Animation")} /> 
            Animation
          </label>
          
          <label htmlFor="Thriller">
            <input type="checkbox" className="mr-2 cat-check" id="thriller" selected={filter.has("Thriller")} onClick={() => filterCheck("Thriller")} /> 
            Thriller
          </label>
          
          <label htmlFor="Drame">
            <input type="checkbox" className="mr-2 cat-check" id="drame" selected={filter.has("Drame")} onClick={() => filterCheck("Drame")} /> 
            Drame
          </label>                  
        </div>
      </form>

      {/* MOVIES */}
      <div className="movies">
        <div className="row">
        {movieList
          // Filter by movie title
          .filter(
            el =>
              el.title
                .toLocaleLowerCase()
                .includes(titleSearched.toLocaleLowerCase())
          ) 
          // Filter by category
          .filter(el => {
            if (filter.size > 0 && !filter.has(el.category))
              return false;
            return true;
          })
          .map((el) => {
            return <MovieCard key={el.id} movie={el} updateLikedBands={updateLikedBands} likedBands={likedBands} />;
          })}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    movieList: state.movies,
    titleSearched: state.titleFilter
  };
};


const MovieListContainer = connect(mapStateToProps)(
  MovieList
);

export default MovieListContainer;
