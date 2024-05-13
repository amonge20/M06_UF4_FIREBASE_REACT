import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../config/config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  
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
  
    return (
      <div>
        <h2>Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="director" placeholder="Director" onChange={handleChange} />
          <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
          <input type="text" name="rating" placeholder="Rating" onChange={handleChange} />
          <input type="text" name="year" placeholder="Year" onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
  
  export default MoviesAdd;