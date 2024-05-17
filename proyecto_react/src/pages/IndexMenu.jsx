import React from "react";
import Card from "../components/Card";

function IndexMenu(){
    return(
        <div>
            <Card link="/welcome" title="Usuari"></Card>
            <Card link="/movies/list" title="Lista pelicul·les"></Card>
            <Card link="/movies/add" title="Afegir pelicul·les"></Card>
        </div> 
    );
}

export default IndexMenu;