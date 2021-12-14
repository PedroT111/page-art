import React from "react";

const GalleryImages = ({Items}) => {
    return(
        <img  className={Items.className} src={Items.img} alt={Items.title}/>
    );
}

export default GalleryImages;