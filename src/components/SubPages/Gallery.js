import React from 'react'
import Lightbox, { SRLWrapper } from "simple-react-lightbox"

const Gallery = ({ gallery }) => {
    const renderedImages = gallery.map((image) => {
        return (
            <a className="image-link" href={image.img} data-lightbox="example-set">
                <img className="image" src={image.img} alt="dubrovnik-roofs"/>
            </a>
        )
    })

    return (
        <div className="gallery">
            <Lightbox>
                <SRLWrapper>
                    {renderedImages}
                </SRLWrapper>
            </Lightbox>           
        </div>         
    )
}

export default Gallery
