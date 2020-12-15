import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    console.log(this.props.movie)
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-card-image" src={imagePath} alt={title} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p>Genre: {genre}</p>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <span className="rating">Rating: {rating}</span>
        <Link to={`/movies/${id}`} className="detailes" >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
