import React from "react";

function MovieCard({ title, image, rate, direction, year }){
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>Director: {direction}</p>
            <p>Año: {year}</p>
            <p>Valoracion: {rate}</p>
        </div>
    );
}

export default MovieCard;