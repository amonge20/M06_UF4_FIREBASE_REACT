import React from "react";
import { Link } from "react-router-dom";
import './styles/Welcome.css';

function Welcome({ username }) {
    return (
        <div className="welcome-container">
            <h1 id="welcome-message">Hola {username}, Pel·lícules per a l’estiu</h1>
            <Link to="/" className="welcome-button">Volver</Link>
        </div>
    );
} 

export default Welcome;