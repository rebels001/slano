import React, { useEffect } from 'react'
import Content from "../components/SubPages/Content"
import Map from "../components/SubPages/Map"
import Gallery from "../components/SubPages/Gallery"

import dubrovnikMap from "../images/karta1.png"
import smallMap from "../images/map-small.png"
import openMap from "../images/Dubrovnik/map2.png"
import { useParams } from 'react-router-dom'

import elaphiteMap from "../images/Elafiti/map.png"
import elaphiteSmallMap from "../images/Elafiti/map-small.png"
import elaphitiopenMap from "../images/Elafiti/map-small.png"

import stonMap from "../images/map-ston.png"
import stonSmallMap from "../images/map-small.png"
import stonOpenMap from "../images/map-small-ston.png"

import img1 from "../images/Dubrovnik/roofs.jpg"
import img2 from "../images/ship1.jpg"
import img3 from "../images/Dubrovnik/dubrovnik-4708784_640.jpg"
import img4 from "../images/Dubrovnik/croatia-3605569_640.jpg"
import img5 from "../images/Dubrovnik/dubrovnik-3587679_640.jpg"

import img6 from "../images/Elafiti/50 (1).JPG"
import img7 from "../images/Elafiti/DSCF1196.JPG"
import img8 from "../images/Elafiti/DSCF9881.JPG"
import img9 from "../images/Elafiti/DSCF9939.JPG"
import img10 from "../images/Elafiti/lopud-1.jpg"
import img11 from "../images/Elafiti/LOPUD-Sunj-D85_5178-Pano_ACR-aleksandar-gospic.jpg"
import img12 from "../images/Elafiti/P6260063 (1).JPG"
import img13 from "../images/Elafiti/P6290083.JPG"
import img14 from "../images/Elafiti/ship.jpg"
import img15 from "../images/Elafiti/P7070468.JPG"
import img16 from "../images/Elafiti/P7120425.JPG"
import img17 from "../images/Elafiti/1280951147.jpg"
import img18 from "../images/Elafiti/20664751_347332562356035_4285216456550861844_n.jpg"

import img19 from "../images/ston/1280px-Mali_Ston-04.jpg"
import img20 from "../images/ston/ship.jpg"
import img21 from "../images/Ston.jpg"

const subpages = [
    {
        name: "dubrovnik",
        content: {
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
        },
        map: {
            map: dubrovnikMap,
            smallMap: smallMap,
            openMap: openMap,
            alt: "map-dubrovnik"
        },
        gallery: [
            {
                img: img1,
            },
            {
                img: img2,
            },
            {
                img: img3,
            },
            {
                img: img4,
            },
            {
                img: img5,
            }
        ]
    },
    {
        name: "elaphiti",
        content: {
            header: "ELAPHITE ISLANDS CRUISE",
            title: "UNIQUE ISLANDS OF CROATIA",
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
        }, 
        map: {
            map: elaphiteMap,
            smallMap: elaphiteSmallMap,
            openMap: elaphitiopenMap,
            alt: "map-elaphiti"
        },
        gallery: [
            {
                img: img6,
            },
            {
                img: img7,
            },
            {
                img: img8,
            },
            {
                img: img9,
            },
            {
                img: img10,
            },
            {
                img: img11,
            },
            {
                img: img12,
            },
            {
                img: img13,
            },
            {
                img: img14,
            },
            {
                img: img15,
            },
            {
                img: img16,
            },
            {
                img: img17,
            },
            {
                img: img18,
            }
        ]
    },
    {
        name: "ston",
        content: {
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
        },
        map: {
            map: stonMap,
            smallMap: stonSmallMap,
            openMap: stonOpenMap,
            alt: "map-ston"
        },
        gallery: [
            {
                img: img19,
            },
            {
                img: img20,
            },
            {
                img: img21,
            }
        ]
    }
]  

const SubPages = () => {
    const { subpageParam } = useParams()
    const subpage = subpages.filter(subpage => subpage.name === subpageParam)[0]

    useEffect(() => {
        window.scrollTo(0,0)
    },[subpage])

    return (
        <div>
            <Content content={subpage.content} />
            <Map map={subpage.map} />
            <Gallery gallery={subpage.gallery}/>
        </div>
    )
}

export default SubPages
