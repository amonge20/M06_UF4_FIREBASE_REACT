import React, { useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseConfig from '../config/config';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
//Inicialitza Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
  
const db = getFirestore(app);
=======
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  
const db = firebase.firestore();
>>>>>>> 4bc696a0c2d756b2ec5cb1d767e022a4dfaf730b
  
const MoviesAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    director: '',
    image: '',
    rating: '',
    year: '',
    duration: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'movies'), formData);
      console.log('Movie added successfully!');
    } catch (error) {
      console.error('Error adding movie: ', error);
    }
  };
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('movies').add(formData)
      .then(() => {
        console.log('Movie added successfully!');
      })
      .catch((error) => {
        console.error('Error adding movie: ', error);
      });
    };
>>>>>>> 4bc696a0c2d756b2ec5cb1d767e022a4dfaf730b
  
  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="titulo">Titulo </label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="descripcion">Descripcion </label>
          <input type="text" name="descripcion" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="director">Director </label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="URL">Imagen URL </label>
          <input type="text" name="URL" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="valoracion">Valoración </label>
          <input type="text" name="valoracion" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="any">Año </label>
          <input type="text" name="any" onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="duracion">Duración </label>
          <input type="text" name="duracion" onChange={handleChange} />
        </div>
        <button type="submit">Añadir Pelicula</button>
        <Link to="/">Cancelar</Link>
      </form>
    </div>
  );
}
  
export default MoviesAdd;