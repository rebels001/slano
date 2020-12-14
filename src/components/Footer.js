import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="footer-content">
					<div className="contact">
						<h3 id="contact">Contact us: </h3>
						<h4>
							<i className="fab fa-whatsapp" />
							<i className="fab fa-viber" />
							+385 98 294 555
						</h4>
						<h4>
							<i className="fas fa-phone-alt" />
							+385 98 345 455
						</h4>
						<h4>
							<i className="fas fa-mail-bulk" />
							slanoboatexcursions@gmail.com
						</h4>
					</div>
					<div className="second-nav">
						<h3>Explore more:</h3>
						<ul>
							<li>
								<Link to="/dubrovnik">- Dubrovnik by boat</Link>
							</li>
							<li>
								<Link to="/elaphiti">- Elaphite islands cruise</Link>
							</li>
							<li>
								<Link to="/ston">- Ston excursion</Link>
							</li>
						</ul>
					</div>
					<div className="social-media">
						<h3>Follow us on:</h3>
						<a href="https://www.facebook.com/SlanoBoatExcursions/">
							<i className="fab fa-facebook" />
						</a>
						<a href="https://www.instagram.com/slano_boat_excursions/">
							<i className="fab fa-instagram" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
