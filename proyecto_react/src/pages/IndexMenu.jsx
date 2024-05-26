import React from "react";
import Card from "../components/Card";
import '../components/styles/IndexMenu.css';

function IndexMenu() {
    return (
        <div id="index-menu">
            <Card link="/welcome" title="Usuari" />
            <Card link="/movies/list" title="Lista pelicul·les" />
            <Card link="/movies/add" title="Afegir pelicul·les" />
        </div>
    );
}

export default IndexMenu;