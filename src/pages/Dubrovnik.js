import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Content from "../components/SubPages/Content"
import Map from "../components/SubPages/Map"
import Gallery from "../components/SubPages/Gallery"

import dubrovnikMap from "../images/karta1.png"
import smallMap from "../images/map-small.png"
import openMap from "../images/Dubrovnik/map2.png"

const content = {
    header: "DUBROVNIK BY BOAT",
    title: "THE PEARL OF THE MEDITERRANEAN",
    firstP: "On the way to",
    link: "http://www.tzdubrovnik.hr/lang/en/index.html",
    linkP: "Dubrovnik",
    secondP: "we sail through the waters of the Elaphite Islands and the Dubrovnik Reefs. The ride, which takes about one hour and fifteen minutes, ends with a trip to the historic old town, and it's famous port called Porat. When sailing into the city, we sail around the walls of the city, which offers an unforgettable panoramic experience.",
    thirdP: "This is an opportunity to get a full experience of Dubrovnik's specificity and to visit the city from land and sea.",
    forthP: "In addition to a day tour of the city, we also organize an evening visit to the city, because in this way you can visit one of the performances of the famous Dubrovnik Summer Games and taste the gastronomic offer of the city in its specific ambiance.",
    fifthP: "Don't miss this unique opportunity.",
    heroClass: "hero-single dubrovnik",
    class: "dubrovnik"
} 

const map = {
    map: dubrovnikMap,
    smallMap: smallMap,
    openMap: openMap,
    alt: "map-dubrovnik"
}

const Dubrovnik = () => {
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

export default Dubrovnik
