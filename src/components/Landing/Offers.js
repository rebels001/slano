import React from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

AOS.init({
	useClassNames: true,
	initClassName: false,
	animatedClassName: 'animated',
	easing: 'ease-in-out-cubic',
	duration: 1600
});

const offers = [
    {
        offerClass: "offer",
        figClass: "dubrovnik-offer-img",
        decsTitle: "Dubrovnik by boat",
        descLead: "The pearl of the Mediterranean",
        firstP: "On the way to ",
        link: "http://www.tzdubrovnik.hr/lang/en/index.html",
        linkP: "Dubrovnik",
        secondP: " we sail through the waters of the Elaphite Islands and the Dubrovnik Reefs. The ride, which takes about one hour and  forty-five minutes , ends with a trip to the historic old town, and it's famous port called Porat. When sailing into the city, we sail around the walls of the city, which offers an unforgettable panoramic experience.",
        btnLink: "/dubrovnik"
    },    
    {
        offerClass: "offer second-offer",
        figClass: "elaphite-offer-img",
        offerOrder: "offer-order",
        decsTitle: "ELAPHITE ISLANDS CRUISET",
        descLead: "Unique islands of Croatia",
        firstP: "On this excursion, we will visit two of the most beautiful islands in the archipelago of the Elaphite Islands, the islands of ",
        link: "http://www.tzdubrovnik.hr/lang/en/get/okolica_dubrovnika/62179/otok_lopud.html",
        secondLink: "http://www.tzdubrovnik.hr/lang/en/get/okolica_dubrovnika/62186/otok_sipan.html",
        linkP: "Lopud",
        and: " and ",
        secondLinkP: "Šipan",
        secondP: " and visit their historic old settlements. During the voyage, you can see the unspoiled beauty of the coast, which incurred as a result of tectonic shifts during the creation of islands and the influence of the sea. The view of the bays, slopes, gorges, caves and rocks is what makes this excursion unique, as well as the view of the open sea.",
        btnLink: "/elaphiti"
    }
]

const Offer = () => {
	const renderedOffers = offers.map((offer, index) => {
		return (           
			<div className={offer.offerClass} key={index}>
				<div className={offer.offerOrder}>
					<figure className={offer.figClass} />
				</div>
				<div className="description animated"  data-aos="fade-top">
					<div>
						<h2>{offer.decsTitle}</h2>
						<h4>{offer.descLead}</h4>
						<span />
						<p>
							{offer.firstP}
							<a href={offer.link}>{offer.linkP}</a>
							{offer.and}
							<a href={offer.secondLink}>{offer.secondLinkP}</a>
							{offer.secondP}
						</p>

						<div className="button">
							<Link to={offer.btnLink}>
								<button>See more</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

		);
	});

	return (
	<div>
		<div>
			<div className="offers">  
				{renderedOffers}
			</div>
		</div>
	</div>)
};

export default Offer;
