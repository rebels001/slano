import React, { useEffect } from 'react'
import Hero from "../components/Landing/Hero"
import Offers from "../components/Landing/Offers"
import Reviews from "../components/Landing/Reviews"

const Landing = () => {
	React.useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = "https://widgets.regiondo.net/catalog/v1/catalog-widget.min.js";
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
			document.body.removeChild(script);
		}
	}, []);
	
	
	return (
		<div>
			<Hero />
			<Offers />
			<product-catalog-widget widget-id="9f714710-502f-4f2a-add7-c27562c845e8"></product-catalog-widget>
			<Reviews />
		</div>
	)
}

export default Landing
