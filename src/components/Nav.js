import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
	function closeNav()  {
		document.getElementById("nav").checked = false
	}
	
	return (
		<div>
			<nav>
				<input type="checkbox" id={ closeNav ? "nav" : ""} className="hidden" />
				<label htmlFor="nav" onClick={closeNav} className="nav-open"><i /><i /><i />
				</label>
				<div className="nav-container">
					<div className="flex">
						<div className="logo">
							<Link to="/" onClick={closeNav}>
								<h3>Slano boat Excursions</h3>
							</Link>
						</div>
						<ul>
							<li>
								<Link to="/" onClick={closeNav}>Home</Link>
							</li>
							<li>
								<Link to="/dubrovnik" onClick={closeNav}>Dubrovnik by boat</Link>
							</li>
							<li>
								<Link to="/elaphiti" onClick={closeNav}>Elaphite islands cruise</Link>
							</li>
							<li>
								<Link to="/ston" onClick={closeNav}>Ston excursion</Link>
							</li>
							<li>
								<a href="#contact" onClick={closeNav}>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
