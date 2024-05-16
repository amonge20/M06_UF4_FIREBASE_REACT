import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import MoviesAdd from "./components/MoviesAdd";
import MoviesList from "./pages/MoviesList";
import IndexMenu from "./pages/IndexMenu";
import {Route, Router} from "react-router-dom";

function App(){
  return (
    <div>
      <Router>
        <switch>
          <Route path='/welcome' element={<Welcome name="User"/>} />
          <Route path='/movies/list' element={<MoviesList name="MoviesList" />} />
          <Route path='/movies/add' element={<MoviesAdd name="MoviesAdd"  />} />
        </switch>
      </Router>
    </div>
    );
  }

export default App;