import React from 'react'
import AOS from 'aos';
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
        secondP: ", we sail through the waters of the Elaphite Islands and the Dubrovnik Reefs. The ride, which takes about one hour and fifteen minutes, ends with a trip to the historic old town, and it's famous port called Porat. When sailing into the city, we sail around the walls of the city, which offers an unforgettable panoramic experience.",
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
        secondP: ", and visit their historic old settlements. During the voyage, you can see the unspoiled beauty of the coast, which incurred as a result of tectonic shifts during the creation of islands and the influence of the sea. The view of the bays, slopes, gorges, caves and rocks is what makes this excursion unique, as well as the view of the open sea.",
        btnLink: "/elaphiti"
    },
    {
        offerClass: "offer",
        figClass: "ston-offer-img",
        decsTitle: "Ston excursion",
        descLead: "Historical Croatian town",
        firstP: "The town of ",
        link: "http://www.ston.hr/?l=eng",
        linkP: "Ston",
        secondP: " is known for its salt pans, whose origins date back to 14th century, and for its walls, which are the second-longest walls in the world. Ston is also the second city in Europe to be built with plumbing and sewerage. Ston is especially known for its gastronomy, because the Bay of Mali Ston is one of the largest mussel farming areas, and the Pelješac peninsula is one of the best vineyards in Croatia and this part of Europe.",
        btnLink: "/ston"
    }
]

const Offer = () => {
	const renderedOffers = offers.map((offer, index) => {
		return (           
			<div className={offer.offerClass}>
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
							<a href={offer.btnLink}>
								<button>See more</button>
							</a>
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
