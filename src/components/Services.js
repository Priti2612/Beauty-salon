import React from 'react'
import digi1 from '../assets/dig1.png'
import digi2 from '../assets/dig2.png'
import digi3 from '../assets/dig3.png'
import digi4 from '../assets/dig4.png'
import digi5 from '../assets/dig5.png'
const Services = () => {
  return (
    <div id='services'>
        {/* <!-- Our service section starts here --> */}
    <div className="service" >
       <div className="service-flow container">
        <p className="title-flow">Our Service</p>
        <p className="text-flow">
            Spread over two floors, our beautiful spa offer a soothing environment in which you can rest, relax and feel competely rejuvenated.
<br /><br />
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.
        </p>
<div className="dig-div ">
    <div className='dig-main'><div className="digone"><img src={digi1} alt='' className="img-fluid"/></div><p className='dig-title'>Spa</p></div>
    <div className='dig-main'><div className="digtwo"><img src={digi2} alt='' className="img-fluid"/></div><p className='dig-title'>Spa</p></div>
    <div className='dig-main'><div className="digthree"><img src={digi3} alt='' className="img-fluid"/></div><p className='dig-title'>Spa</p></div>
    <div className='dig-main'><div className="digfour"><img src={digi4} alt='' className="img-fluid"/></div><p className='dig-title'>Spa</p></div>
    <div className='dig-main'><div className="digfive"><img src={digi5} alt='' className="img-fluid"/></div><p className='dig-title'>Spa</p></div>
    
</div> 
       </div>       
       <div className="service-massage"></div>       

    </div>
    {/* <!-- Our service section ends here --> */}
    </div>
  )
}

export default Services