import React from 'react'
import ourExp1 from '../assets/expert 1.jpg'
import ourExp2 from '../assets/expert2.png'
import ourExp3 from '../assets/expert3.png'
const OurExperienceSpecialist = () => {
    return (
        <div id="team">
            <section id='ourexperience' className='ourexperience'>
                <div className='container'>
                    <p className='our-experience-title text-center h3'>Our Experience Specialist</p>
                    <p className='our-experience-para text-center container'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </p>
                    <div className='row specialist-main'>
                        <div className='col-lg-4 specialist'>
                            <img src={ourExp2} className='img-fluid special-img' alt='' />
                            <div className='specialist-info'>
                                <p className='specialist-name'>Name</p>
                                <p className='specialist-text'>text</p>
                            </div>
                        </div>
                        <div className='col-lg-4 specialist'>
                            <img src={ourExp2} className='img-fluid special-img' alt='' />
                            <div className='specialist-info'>
                                <p className='specialist-name'>Name</p>
                                <p className='specialist-text'>text</p>
                            </div>
                        </div>
                        <div className='col-lg-4 specialist'>
                            <img src={ourExp3} className='img-fluid special-img' alt='' />
                            <div className='specialist-info'>
                                <p className='specialist-name'>Name</p>
                                <p className='specialist-text'>text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurExperienceSpecialist