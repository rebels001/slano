import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Content from "../components/SubPages/Content"
import Map from "../components/SubPages/Map"
import Gallery from "../components/SubPages/Gallery"

//import dubrovnikMap from "../images/karta1.png"
import dubrovnikMap from "../images/Dubrovnik-nove/karta.jpg"
import openMap from "../images/Dubrovnik-nove/karta.jpg"
import plakatDubrovnik from "../images/Dubrovnik-nove/dubrovnik-plakat.png"

import elaphiteMap from "../images/Elafiti-nove/karta2.jpg"
import elaphitiopenMap from "../images/Elafiti-nove/karta-mala.png"
import epalhitiPlakat from "../images/Elafiti-nove/elafiti-plakat.png"

import img1 from "../images/Dubrovnik-nove/1.jpg"
import img2 from "../images/Dubrovnik-nove/2.jpg"
import img3 from "../images/Dubrovnik-nove/3.jpg"
import img4 from "../images/Dubrovnik-nove/4.jpg"
import img5 from "../images/Dubrovnik-nove/5.jpg"
import imgDub6 from "../images/Dubrovnik-nove/6.jpg"
import imgDub7 from "../images/Dubrovnik/croatia-3605569_640.jpg"
import imgDub8 from "../images/Dubrovnik/dubrovnik-4708784_640.jpg"

import img6 from "../images/Elafiti-nove/1.jpg"
import img7 from "../images/Elafiti-nove/2.jpg"
import img8 from "../images/Elafiti-nove/3.png"
//import img9 from "../images/Elafiti/DSCF9939.JPG"
import img10 from "../images/Elafiti/lopud-1.jpg"
import img11 from "../images/Elafiti/LOPUD-Sunj-D85_5178-Pano_ACR-aleksandar-gospic.jpg"
import img12 from "../images/Elafiti/P6260063 (1).JPG"
//import img13 from "../images/Elafiti/P6290083.JPG"
//import img14 from "../images/Elafiti/ship.jpg"
import img15 from "../images/Elafiti/P7070468.JPG"
import img16 from "../images/Elafiti/P7120425.JPG"
import img17 from "../images/Elafiti/1280951147.jpg"
import img18 from "../images/Elafiti/20664751_347332562356035_4285216456550861844_n.jpg"

const subpages = [
    {
        name: "dubrovnik",
        content: {
            header: "DUBROVNIK BY BOAT",
            title: "THE PEARL OF THE MEDITERRANEAN",
            firstP: "On the way to",
            link: "http://www.tzdubrovnik.hr/lang/en/index.html",
            linkP: "Dubrovnik",
            secondP: "we sail through the waters of the Elaphite Islands and the Dubrovnik Reefs. The ride, which takes about one hour and  forty-five minutes , ends with a trip to the historic old town, and it's famous port called Porat. When sailing into the city, we sail around the walls of the city, which offers an unforgettable panoramic experience.",
            thirdP: "This is an opportunity to get a full experience of Dubrovnik's specificity and to visit the city from land and sea.",
            fifthP: "Don't miss this unique opportunity.",
            startTime: "09:00",
            pickUpTime: "09:10",
            infoFirstP: "in ",
            infoFirstPBold: "OLD TOWN",
            infoArrivalTimeP: "16:45",
            price: "40€ (301.38kn)",
            heroClass: "hero-single dubrovnik",
            class: "dubrovnik",
            plakat: plakatDubrovnik,
            bookingWidget: <booking-widget widget-id="a147a76f-4c2b-4216-bee5-277d141b009e"></booking-widget>
        },
        map: {
            map: dubrovnikMap,
            smallMap: openMap,
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
            },
            {
                img: imgDub6,
            },
            {
                img: imgDub7,
            },
            {
                img: imgDub8,
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
            secondP: "and island Šipan and visit their historic old settlements. During the voyage, you can see the unspoiled beauty of the coast, which incurred as a result of tectonic shifts during the creation of islands and the influence of the sea. The view of the bays, slopes, gorges, caves and rocks is what makes this excursion unique, as well as the view of the open sea.",
            thirdP: "The highlight of the trip is to swim from an anchored boat in one of these beautiful bays.",
            fourthP: "You will also enjoy eating freshly made risotto frutti di mare served with chilled white wine, refreshing water and smile.",
            startTime: "09:30",
            pickUpTime: "09:40",
            infoFirstP: "on island",
            infoFirstPBold: " Lopud",
            infoSecondPBold: "45 minutes ",
            infoSecondP: "free time on island ",
            infoSecondPSecondBold: "Šipan",
            infoThirdP: "Stop for swimming around anchored boat in one of beautiful bays of island ",
            infoThirdPBold: "Jakljan",
            infoArrivalTimeP: "17:00",
            price: "50€ (376.73kn)",
            infoLunch: " and",
            infoLunchBold: " LUNCH ",
            infoLunchSecond: "- our recognizable dalmatian seafood risotto",
            infoVegeLunch: "*vegetarian lunch option is available",
            heroClass: "hero-single elaphiti",
            class: "elaphiti",
            plakat: epalhitiPlakat,
            bookingWidget: <booking-widget widget-id="5dd86369-993b-428e-b4d8-56e8dcd68dca"></booking-widget>
        }, 
        map: {
            map: elaphiteMap,
            smallMap: elaphitiopenMap,
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
                img: img10,
            },
            {
                img: img11,
            },
            {
                img: img12,
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
