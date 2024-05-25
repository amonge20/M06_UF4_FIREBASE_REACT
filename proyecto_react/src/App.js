import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./components/Welcome";
import MoviesAdd from "./components/MoviesAdd";
import MoviesList from "./pages/MoviesList";
import IndexMenu from './pages/IndexMenu';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IndexMenu />} />
          <Route path="/welcome" element={<Welcome username="User" />} />
          <Route path="/movies/list" element={<MoviesList />} />
          <Route path="/movies/add" element={<MoviesAdd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;