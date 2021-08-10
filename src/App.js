import React from "react";
import { Provider } from "react-redux";
import MovieApp from "./components/MovieApp";
import movieAppStore from "./store/store";

const App = () => (
  <Provider store={movieAppStore}>
    <MovieApp />
  </Provider>
);

export default App;