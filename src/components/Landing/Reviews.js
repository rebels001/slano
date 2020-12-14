import React from 'react'
import OwlCarousel from "react-owl-carousel"

import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import AOS from 'aos';
AOS.init({
	useClassNames: true,
	initClassName: false,
	animatedClassName: 'animated',
	easing: 'ease-in-out-cubic',
	duration: 1600
});

const reviews = [
    {
        text: "An absolute must if you have a little desire for adventure. It was one of the most beautiful days in and around Slano. crew incl. Entertainment was just great, thank you for this great day",
        author: "Kathrin"
    },
    {
        text: "Excellent day with a smiling and warm team. Perfect welcome. Thank you Rebecca💕. top crew. Thanks boys. Perfect day program with visit to the typical islands. We bring your smiles back to France. Nathalie and Corinne (alcohol & no alcohol🍻👍) ",
        author: "Nathalie"
    },
    {
        text: "Petar and Vice are deadly duo! Great trip, I'll be back soon. Highly recommended!!",
        author: "Marko"
    },
    {
        text: "A great trip with lovely people. Well worth the money, highly recommended",
        author: "Henderson"
    }
]

const responsive = {
    0:{
        items:1
    },
    800:{
        items:2
    },
    1000:{
        items:3
    }
}


const Reviews = () => {
    const renderedReviews = reviews.map((review, index) => {
        return (
            <div className="item">
                <div className="rating">
                    <span>★★★★★</span>
                </div>
                <p>{review.text}</p>
                <div className="writer">
                    <span className="name">- {review.author}</span>
                </div>
            </div>           
        )
    })

    return (
        <div>
            <div className="reviews animated" data-aos="fade-top">
                <h1>Guest reviews</h1>        
                <OwlCarousel items="3" nav="null" loop="true" responsive={responsive} className="owl-carousel owl-theme">
                    {renderedReviews}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Reviews
