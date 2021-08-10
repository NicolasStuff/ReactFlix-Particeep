import React from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";

const TitleFilter = ({ value, onChangeText }) => {
  return (
    <form className="search-box">
      <input
        className="search-input"
        type="search"
        placeholder="Rechercher " 
        aria-label="Search"
        value={value}
        onChange={event => onChangeText(event.target.value)}
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};

const mapStateToProp = state => {
  return {
    value: state.titleFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: newText => {
      dispatch({
        type: "SET_TITLE_FILTER",
        title: newText
      });
    }
  };
};

const TitleFilterContainer = connect(mapStateToProp, mapDispatchToProps)(
  TitleFilter
);

export default TitleFilterContainer;
