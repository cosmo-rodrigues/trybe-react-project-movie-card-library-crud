import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: undefined,
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    const requestMovieDelete = await movieAPI.deleteMovie(id);
    return requestMovieDelete;
  }

  async fetchMovie() {
    this.setState({ loading: true },
      async () => {
        const movies = await movieAPI.getMovie(this.props.match.params.id);
        this.setState({
          movies,
          loading: false,
        });
      });
  }
  render() {
    // Change the condition to check the state
    if (this.state.loading) return <Loading />;

    const { title,
            storyline,
            imagePath,
            genre,
            rating,
            subtitle,
            id,
          } = this.state.movies;

    return (
      <div className="movie-card" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="link" to="/">VOLTAR</Link>
        <Link className="link" to={`./${id}/edit`}>EDITAR</Link>
        <Link className="link" to="/" onClick={this.deleteMovie}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
