import React, { useState } from "react";
import { connect } from "react-redux";
import { FaTrash, FaThumbsUp, FaThumbsDown } from "react-icons/fa";


const MovieCard = props => {
  const { movie = {}, deleteMovie = () => {} } = props;
  const {
    id,
    title,
    category,
    image,
    likes,
    dislikes,
  } = movie;

  const [isLiked, updateLike] = useState(true);
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);

  const handleLike = () => {
    let currentLikedBands = props.likedBands;
    if (!isLiked) {
        setLike(prevCount => prevCount + 1);
        {dislike === 0 ?
          setDislike(prevCount => prevCount)
          :
          setDislike(prevCount => prevCount - 1)
        }
        updateLike(true);

    if (!currentLikedBands.includes(title))
        props.updateLikedBands([...currentLikedBands, title]);
    } else {
        setDislike(prevCount => prevCount + 1);
        {like === 0 ?
          setLike(prevCount => prevCount)
          :
          setLike(prevCount => prevCount - 1)
        }
        updateLike(false);

      if (currentLikedBands.includes(title))
        props.updateLikedBands(currentLikedBands.filter(band => band !== title));
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card movie-card text-center my-3 mx-1 p-2">
            <h5 className="card-title pt-2">{title}</h5>
            <img
                className="card-img-top img-responsive"
                src={image}
                alt={title}
            />
            <div className="card-body">
                <p className="card-text"><strong>Categories:</strong> {category}</p>
                <p>
                    <button className={isLiked ? "active-btn btn" : "btn"} onClick={handleLike}>
                        <FaThumbsUp /> {like}        
                    </button>
                    <button className={!isLiked ? "inactive-btn btn" : "btn"} onClick={handleLike}>
                        <FaThumbsDown /> {dislike}        
                    </button>
                </p>
                <div className="text-center">
                    <span className="btn btn-delete" onClick={() => deleteMovie(id)}>
                        Supprimer <FaTrash />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: id => {
      dispatch({
        type: "DELETE_MOVIE",
        id: id
      });
    },
  };
};

const SmartMovieCard = connect(null, mapDispatchToProps)(MovieCard);

export default SmartMovieCard;
