import React from 'react'
import offerright from "../assets/offerMain.jpg"
import offerleft from "../assets/offer.png"
const Offers = () => {
  return (
    <>
    <section className='offer container'>
        <div className='offer-info'>
            <p className='offer-title'>Our Special Offers</p>
            <p className='offer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <img src={offerleft} className='offer-left-img'/>
        </div>
        <div className='.heart'>
            <img className='offer-right-img' src={offerright}/>
        </div>
    </section>
    </>
  )
}

export default Offers