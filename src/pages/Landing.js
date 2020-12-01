import React from 'react'
import Nav from "../components/Nav"
import Hero from "../components/Landing/Hero"
import Offers from "../components/Landing/Offers"
import Reviews from "../components/Landing/Reviews"
import Footer from "../components/Footer"

const Landing = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Offers />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Landing
