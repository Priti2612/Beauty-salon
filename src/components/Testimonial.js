import React from 'react'
import Testsub from './Testsub'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <section className='testimonial' id='testimonial'>
            <div className='container-fluid p-5'>
                <p className='testimonial-title text-center'>Testimonial</p>
                <p className='testimnial-t '>- TESTIMONIALS</p>
                <p className='testimnial-t2 '>Don't take our word for it</p>
            </div>
            <Testsub />
        </section>
    </div>
  )
}

export default Testimonial