import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom';

ReactDOM(
  <BrowserRouter>
    <Routes>
      <Route path='/welcome' element={<Welcome name="User"/>} />
      <Route path='/MovieCard/addCard' element={<MovieCard name="addCard" />} />
      <Route path='/MovieCard/listCard' element={<MovieCard name="listCard"  />} />
      <Route path='/MoviesAdd' element={<MoviesAdd />} />
      <Route path='/MoviesList' element={<MoviesList />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;