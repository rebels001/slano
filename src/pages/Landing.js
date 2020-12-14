import React from 'react'
import Hero from "../components/Landing/Hero"
import Offers from "../components/Landing/Offers"
import Reviews from "../components/Landing/Reviews"

const Landing = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <div>
            <Hero />
            <Offers />
            <Reviews />
        </div>
    )
}

export default Landing
