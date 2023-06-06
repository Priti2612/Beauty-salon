import React, { useState } from 'react'

const MakeAnApoointment = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  })
  const handleChange = (e)=>{
    let newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  const submit = (e) =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div id="contact">
        <section id='makeappointment' className='makeappointment'>
            <div className='container'>
                <p className='h3 make-appointment-title text-center'>Make An Appointment</p>
                <p className='make-appointment-para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
           
            <div className='contact-form mx-auto'>
              <div className='container'>

                <div className='row form-make'>
                  <div className='col-lg-6'>
                    <input type='text' id='name' value={data.name} onChange={handleChange} placeholder='Name'></input>
                  </div>
                  <div className='col-lg-4'>
                    <input type='email' id='email' value={data.email} onChange={handleChange} placeholder='Email'></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <input type='tel' id='phone' value={data.phone} onChange={handleChange} placeholder='Phone'></input>
                  </div>
                  <div className='col-lg-4'>
                    <input type='text' id='message' value={data.message} onChange={handleChange} placeholder='Message'></input>
                  </div>
                </div>
                <div className='contact-form-submit mt-3 mb-4'>

                <button onClick={submit} className='submit-button mx-auto'>Send</button>
                </div>
              </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default MakeAnApoointment