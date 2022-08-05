import { useState, useEffect } from "react";

const Viewer = ({BreedDog, ImageUrl}) => {

    return(
        <div className="viewerDog">
            <img src={ImageUrl}/>
            <h1><small>Breed:</small> {BreedDog}</h1>
        </div>
    )
}

export default Viewer;