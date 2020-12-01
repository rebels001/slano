import React from 'react'

import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"

const Review = ({ reviews }) => {
    const renderedReviews = reviews.map((review, index) => {
        return (
            <div class="item">
                <div class="rating">
                    <span>★★★★★</span>
                </div>
                <p>{review.text}</p>
                <div class="writer">
                    <span class="name">- {review.author}</span>
                </div>
            </div>           
        )
    })

    return (
        <OwlCarousel items="3" nav="null" loop="true" class="owl-carousel owl-theme">
            {renderedReviews}
        </OwlCarousel>
    )
}

export default Review
