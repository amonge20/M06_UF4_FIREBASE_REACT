import React from "react";
import { Link } from "react-router-dom";

function Card({ link, title }) {
    return (
        <div className="card">
            <Link to={link}>
                <div className="card-body">
                    <h3>{title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Card;