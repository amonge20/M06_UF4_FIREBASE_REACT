import React, { useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import firebaseConfig from '../config/config';
import { Link } from 'react-router-dom';
import '../components/styles/MoviesList.css';

// Inicializa Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const db = getFirestore(app);

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const snapshot = await getDocs(collection(db, 'movies'));
            const moviesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMovies(moviesData);
        };
        fetchMovies();
    });

    const handleDelete = async (movieId) => {
        try {
            await deleteDoc(doc(db, 'movies', movieId));
            setMovies(movies.filter(movie => movie.id !== movieId));
            console.log('Movie deleted successfully!');
        } catch (error) {
            console.error('Error deleting movie: ', error);
        }
    };

    return (
        <div className="movies-list">
            <h2>Movie List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Director</th>
                        <th>Año</th>
                        <th>Valoracion</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td><img src={movie.image} alt={movie.title} /></td>
                            <td>{movie.title}</td>
                            <td>{movie.director}</td>
                            <td>{movie.year}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <button onClick={() => handleDelete(movie.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/movies/add" className='ListaPeliculaBoton'>Añadir Pelicula</Link>
            <Link to="/" className='ListaPeliculaBoton'>Volver</Link>
        </div>
    );
}

export default MoviesList;