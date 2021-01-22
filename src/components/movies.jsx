import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {getMovie, getMovies} from '../services/fakeMovieService'

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState ({movies})
    }

    render() { 
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie=>(
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={()=> this.handleDelete(movie)} 
                        className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}

                </tbody>
            </Table>
          );
    }
}
 
export default Movies;