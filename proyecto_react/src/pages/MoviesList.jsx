import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import MovieCard from '../components/MovieCard';
import firebaseConfig from '../config/config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const snapshot = await db.collection('movies').get();
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
          rate={movie.rating}
          direction={movie.director}
        />
      ))}
    </div>
  );
}

export default MoviesList;