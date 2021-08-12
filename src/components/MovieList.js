import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
import { connect } from "react-redux";
import Select from "react-select";

const MovieList = ({ movieList, titleSearched }) => {
  // Like and Dislike
  const [likedBands, updateLikedBands] = useState([]);

  console.log("MOVIE LIST", movieList);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState({ value: 4 });

  // FILTER BY CATEGORY
  const [filter, setFilter] = useState(new Set());

  const filterCheck = (value) => {
    if (filter.has(value)) {
      setFilter((prevFilter) => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.delete(value);
        return newSetFilter;
      });
    } else {
      setFilter((prevFilter) => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.add(value);
        return newSetFilter;
      });
    }
  };

  var movieCategoryDuplicated = [];

  for (var i =0; i < movieList.length ; i++) {
    if(movieList[i].category) {
      // console.log('des display categories',movieList[i].category)
      movieCategoryDuplicated.push(movieList[i].category);
    }
  }
  console.log('movieCategoryDuplicated', movieCategoryDuplicated)

 
  function uniq(a) {
    console.log('remove duplicate', Array.from(new Set(a)))
    return Array.from(new Set(a));
  }

  var movieCategoryWithoutDuplicate = uniq(movieCategoryDuplicated)
  console.log("filterCheck", filter);

  // PAGINATION
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage.value;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.value;
  const currentPosts = movieList.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  const options = [
    { value: 4, label: "4 éléments sur la page" },
    { value: 8, label: "8 éléments sur la page" },
    { value: 12, label: "12 éléments sur la page" },
  ];

  var totalPosts = movieList.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage.value); i++) {
    pageNumbers.push(i);
  }

  console.log("totalPosts", totalPosts);

  return (
    <main className="main-content">
      {/* FILTER */}
      <form className="filter-form">
        <div className="checkbox-select bodyFlex justifiedContent">
          {movieCategoryWithoutDuplicate.map((el) => {
              return (
                <label htmlFor={el}>
                <input
                  type="checkbox"
                  className="mr-2 cat-check"
                  id={el.length}
                  selected={filter.has(el)}
                  onClick={() => filterCheck(el)}
                    />
                    {el}
                  </label>
              );
            })}
          <Select
            options={options}
            className="selection"
            onChange={setPostsPerPage}
          />
        </div>
      </form>

      {/* MOVIES */}
      <div className="movies">
        <div className="row">
          {currentPosts
            // Filter by movie title
            .filter((el) =>
              el.title
                .toLocaleLowerCase()
                .includes(titleSearched.toLocaleLowerCase())
            )
            // Filter by category
            .filter((el) => {
              if (filter.size > 0 && !filter.has(el.category)) return false;
              return true;
            })
            .map((el) => {
              return (
                <MovieCard
                  key={el.id}
                  movie={el}
                  updateLikedBands={updateLikedBands}
                  likedBands={likedBands}
                />
              );
            })}
        </div>
      </div>

      {/* PAGINATION */}

      <div className="bodyFlex justifiedContent pageNumber">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movies,
    titleSearched: state.titleFilter,
  };
};

const MovieListContainer = connect(mapStateToProps)(MovieList);

export default MovieListContainer;
