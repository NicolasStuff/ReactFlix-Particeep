import { createStore, combineReducers } from "redux";
import movies from "../json/movies";

console.log("movies stores", movies);

const titleFilterReducer = (state = "", action) => {
  if (action.type === "SET_TITLE_FILTER") {
    return action.title;
  }
  return state;
};

const moviesReducer = (state = [], action) => {
  if (action.type === "SHOW_MOVIE") {
    return state.concat(action.movie);
  }
  if (action.type === "DELETE_MOVIE") {
    return state.filter((m) => {
      if (m.id === action.id) {
        return false;
      }
      return true;
    });
  }
  return state;
};

const store = createStore(
  combineReducers({
    movies: moviesReducer,
    titleFilter: titleFilterReducer,
  })
);

movies.then((result) => {
  result.forEach((el) =>
    store.dispatch({
      type: "SHOW_MOVIE",
      movie: {
        id: el.id,
        title: el.title,
        category: el.category,
        likes: el.likes,
        dislikes: el.dislikes,
        image: el.image,
      },
    })
  );
});
console.log(store.getState());

export default store;
