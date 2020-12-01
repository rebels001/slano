import React from 'react'
import Lightbox, { SRLWrapper } from "simple-react-lightbox"

const Gallery = () => {
    return (
        <div class="gallery">
            <Lightbox>
                <SRLWrapper>
                <a class="image-link" href="../../images/Dubrovnik/roofs.jpg" data-lightbox="example-set">
                    <img class="image" src="../../images/Dubrovnik/roofs.jpg" alt="dubrovnik-roofs"/>
                </a>
                {/*<a class="image-link" href="images/Dubrovnik/ship2.jpg" data-lightbox="example-set">
                    <img class="image" src="images/Dubrovnik/ship2.jpg" alt=""/>
                </a>*/}
                <a class="image-link" href="../../images/ship1.jpg" data-lightbox="example-set">
                    <img class="image" src="../../images/ship1.jpg" alt="ship"/>
                </a>
                <a class="image-link" href="../../images/Dubrovnik/dubrovnik-4708784_640.jpg" data-lightbox="example-set">
                    <img class="image" src="../../images/Dubrovnik/dubrovnik-4708784_640.jpg" alt="" />
                </a>
                <a class="image-link" href="../../images/Dubrovnik/croatia-3605569_640.jpg" data-lightbox="example-set">
                    <img class="image" src="../../images/Dubrovnik/croatia-3605569_640.jpg" alt="" />
                </a>
                <a class="image-link" href="../../images/Dubrovnik/dubrovnik-3587679_640.jpg" data-lightbox="example-set">
                    <img class="image" src="../../images/Dubrovnik/dubrovnik-3587679_640.jpg" alt="" />
                </a>
                </SRLWrapper>
            </Lightbox>           
    </div>         
    )
}

export default Gallery
