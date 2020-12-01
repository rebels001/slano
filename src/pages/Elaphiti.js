import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Content from "../components/SubPages/Content"
import Map from "../components/SubPages/Map"
import Gallery from "../components/SubPages/Gallery"

import elaphiteMap from "../images/Elafiti/map.png"
import smallMap from "../images/Elafiti/map-small.png"
import openMap from "../images/Elafiti/map-small.png"

const content = {
    header: "ELAPHITE ISLANDS CRUISE",
    title: "UNIQUE ISLANDS OF CROATIA",
    heroClass: "elaphiti",
    firstP: "On this excursion, we will visit two of the most beautiful islands in the archipelago of the Elaphite Islands, the islands of ",
    link: "http://www.tzdubrovnik.hr/lang/en/get/okolica_dubrovnika/62179/otok_lopud.html",
    secondLink: "http://www.tzdubrovnik.hr/lang/en/get/okolica_dubrovnika/62186/otok_sipan.html",
    linkP: "Lopud",
    and: " and ",
    secondLinkP: "Šipan",
    secondP: ", and visit their historic old settlements. During the voyage, you can see the unspoiled beauty of the coast, which incurred as a result of tectonic shifts during the creation of islands and the influence of the sea. The view of the bays, slopes, gorges, caves and rocks is what makes this excursion unique, as well as the view of the open sea.",
    thirdP: "The highlight of the trip is to swim from an anchored boat in one of these beautiful bays. During your bath, we have organized a lunch for you, which is one of the specialties of Dalmatian cuisine. The Dalmatian seafood risotto with wine from their own cellar will be prepared and served by the ship's crew.",
    heroClass: "hero-single elaphiti",
    class: "elaphiti"
} 

const map = {
    map: elaphiteMap,
    smallMap: smallMap,
    openMap: openMap,
    alt: "map-elaphiti"
}

    
const Elaphiti = () => {
    return (
        <div>
            <Nav />
            <Content content={content} />
            <Map map={map} />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Elaphiti
