import React from 'react'
import Lightbox, { SRLWrapper } from "simple-react-lightbox"

const Map = ({ map }) => {
    return (
        <Lightbox>
            <img src={map.map} class="map big-map" alt={map.alt} />

            <SRLWrapper>
                <a class="image-link small-map" href={map.smallMap} data-lightbox="example-set">
                    <img src={map.openMap} class="map" alt={map.alt} />
                </a>
            </SRLWrapper>
        </Lightbox>
    )
}

export default Map
