import React, { useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import MovieCard from '../components/MovieCard';
import firebaseConfig from '../config/config';
import { Link } from 'react-router-dom';

//Inicialitza Firebase
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
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          direction={movie.director}
          year={movie.year}
          rate={movie.rating}
        />
      ))}
      <Link to="/">Cancelar</Link>
    </div>
  );
}

export default MoviesList;