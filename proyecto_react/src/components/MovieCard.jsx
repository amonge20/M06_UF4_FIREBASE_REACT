import React from "react";

function MovieCard({ title, image, rate, direction }){
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>Rate: {rate}</p>
            <p>Direction: {direction}</p>
        </div>
    );
}

export default MovieCard;