import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Content from "../components/SubPages/Content"
import Map from "../components/SubPages/Map"
import Gallery from "../components/SubPages/Gallery"

import stonMap from "../images/map-ston.png"
import smallMap from "../images/map-small.png"
import openMap from "../images/map-small-ston.png"

const content = {
    header: "Ston excursions",
    title: "Historical Croatian town",
    firstP: "The town of ",
    link: "http://www.ston.hr/?l=eng",
    linkP: " Ston ",
    secondP: "is known for its salt pans, whose origins date back to 14th century, and for its walls, which are the second-longest walls in the world. Ston is also the second city in Europe to be built with plumbing and sewerage. Ston is especially known for its gastronomy, because the Bay of Mali Ston is one of the largest mussel farming areas, and the Pelješac peninsula is one of the best vineyards in Croatia and this part of Europe.",
    thirdP: "After a tour of the city, we have organized a lunch for you on an anchored boat, which includes tasting local wines and shellfish, the largest gastronomic specialty of the Ston area, as well as some free time for swimming.",
    forthP: "In addition to a day tour of the city, we also organize a nightly visit to the city during which you will have the chance to enjoy the gastronomic offer at one of the Ston restaurants of your choice.",
    heroClass: "hero-single ston",
    class: "ston"
} 

const map = {
    map: stonMap,
    smallMap: smallMap,
    openMap: openMap,
    alt: "map-dubrovnik"
}

const Ston = () => {
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

export default Ston
