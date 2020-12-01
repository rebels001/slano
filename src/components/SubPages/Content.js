import React, { Fragment } from 'react'

const Content = ({ content }) => {
    return (
    <div>        
        <div class={content.heroClass}></div>

        <div class="wrapper">
            <div class="title">
                <h1 class={content.class}>{content.header}</h1>
            </div>

            <div class="flex">
                <div class="description">
                    <h2>{content.title}</h2>
                    <span class="line"></span>
                    <p>{content.firstP} <a href={content.link}>{content.linkP}</a> {content.secondP}</p>
                    <p>{content.thirdP}</p>
                    <p>{content.fourthP}</p>
                    <p>{content.fifthP}</p>        
                </div>

                <div class="info">
                    <h2>Departure time:</h2>
                    <h2>Arrival time:</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content
