import React from 'react'
import Review from "./Review"

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

const Reviews = () => {
    return (
        <div>
            <div class="reviews">
                <h1>Guest reviews</h1>
                <Review reviews={reviews}/>
            </div>
        </div>
    )
}

export default Reviews
