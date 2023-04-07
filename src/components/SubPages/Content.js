import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import Lightbox, { SRLWrapper } from "simple-react-lightbox"

AOS.init({
	useClassNames: true,
	initClassName: false,
	animatedClassName: 'animated',
	easing: 'ease-in-out-cubic',
	duration: 1300
});

const Content = ({ content }) => {	
	const [bookingWidget, setBookingWidget] = useState();

	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = "https://widgets.regiondo.net/booking/v1/booking-widget.min.js";
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
			document.body.removeChild(script);
		}
	}, []);

	useEffect(() => {
		setBookingWidget()
		setTimeout(() => {
			setBookingWidget(content.bookingWidget)
		}, 200);
	}, [content])

	return (
		<div>
			<div className={content.heroClass} />

			<div className="wrapper">
				<div className="title">
					<h1 className={content.class}>{content.header}</h1>
				</div>

				<div className="flex animated" data-aos="fade-top">
					<div className='content-container'>
						<div className="description">
							<h2>{content.title}</h2>
							<span className="line" />
							<p>
								{content.firstP} <a href={content.link}>{content.linkP}</a> {content.secondP}
							</p>
							<p>{content.thirdP}</p>
							<p>{content.fourthP}</p>
							<p>{content.fifthP}</p>
						</div>

						<div className="info">
							<p>- <b>START</b> from <b>Slano</b> at <b>{content.startTime}</b></p>
							<p>- Pick up point <b>Hotel Osmine</b> at <b>{content.pickUpTime}</b></p>
							<p>- <b>3 hours</b> free time {content.infoFirstP} <b>{content.infoFirstPBold}</b></p>
							{content.infoSecondP && <p>- <b>{content.infoSecondPBold} </b>{content.infoSecondP} <b>{content.infoSecondPSecondBold}</b></p>}
							{content.infoThirdP && <p>- {content.infoThirdP} <b>{content.infoThirdPBold}</b></p>}
							<p>-	<b>ARRIVAL</b> in <b>Slano</b> around <b>{content.infoArrivalTimeP}</b></p>
							<br/>
							<p><b>PRICE: {content.price} per adult</b></p>
							<span>*Children up to <b>3</b> years of age - <b>FREE</b></span>
							<span>*Children from <b>3 to 12</b> years of age - <b>50% DISCOUNT</b></span>
							<br/>
							<p><b>INCLUDED: </b></p>
							<span><b>DRINKS</b> (homemade rakija, wine, water) 
							{content.infoLunch &&
								(
									<>{content.infoLunch} <b>{content.infoLunchBold}</b> {content.infoLunchSecond}</>
								)}
							</span>
							{content.infoVegeLunch && <span>{content.infoVegeLunch}</span>}
							<br/>
							<p><b>RESERVATIONS & INFORMATIONS</b></p>
							<div className="contact">
								<span>
									<i className="fas fa-phone-alt" />
									<i className="fab fa-whatsapp" />
									<i className="fab fa-viber" />
									+385 98 294 555
								</span>
								<span>
									<i className="fas fa-mail-bulk" />
									slanoboatexcursions@gmail.com
								</span>
							</div>
							<br/>
							<span>*The captain reserves the right to change the route in case of bad weather or other unfavorable conditions in ports to ensure the safety of the ship and passengers.</span>
							<p></p>
						</div>
					</div>

					<div className='img-container'>
						{bookingWidget}
						<Lightbox>
							<SRLWrapper>
								<img src={content.plakat} alt=""/>
							</SRLWrapper>
						</Lightbox>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Content;