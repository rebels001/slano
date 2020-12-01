import React from 'react'

const Offer = ({ offers }) => {
  const renderedOffers = offers.map((offer, index) => {
    return (
        <div class={offer.offerClass}>
          <div class={offer.offerOrder}>
              <figure class={offer.figClass}></figure>
          </div>
          <div class="description">
            <div>
                <h2>{offer.decsTitle}</h2>
                <h4>{offer.descLead}</h4>
                <span></span>
                <p>{offer.firstP}
                  <a href={offer.link}>{offer.linkP}</a> 
                  {offer.and} 
                  <a href={offer.secondLink}>{offer.secondLinkP}</a>
                {offer.secondP}</p>
                
                <div class="button">
                    <a href={offer.btnLink}><button>See more</button></a>
                </div>
            </div>
          </div>
        </div>
    )
  })

  return (
      <div>
        {renderedOffers}
      </div>
  )
}

export default Offer
