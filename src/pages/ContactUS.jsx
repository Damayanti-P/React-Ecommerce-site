import React, { useState } from 'react'

import { Button } from 'antd'

const ContactUS = () => {
  const [FormState,setFormState]=useState({
    name:'',
    email:'',
    subject:'',
    msg:''
    })
    const changeHandler=(e)=>
    {

    }
  return (
    <>
      <section className='contactUS'>
        <div className='ContactForm'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='contactForm'>
                  <form id='contact-form' noValidate>
                    {/* Row 1 of form */}
                    <br/><br/>
                    <div className='row formRow'>
                      <div className='col-6'>
                        <input
                          type='text'
                          name='name'
                          className='form-control formInput'
                          placeholder='Name'
                        ></input>
                      </div>
                      <div className='col-6'>
                        <input
                          type='email'
                          name='email'
                          className='form-control formInput'
                          placeholder='Email address'
                        ></input>
                      </div>
                    </div>
                    <br/>
                    {/* Row 2 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <input
                          type='text'
                          name='subject'
                          className='form-control formInput'
                          placeholder='Subject'
                        ></input>
                      </div>
                    </div>
                    <br/>
                    {/* Row 3 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <textarea
                          rows={6}
                          name='message'
                          className='form-control formInput'
                          placeholder='Message'
                        ></textarea>
                      </div>
                    </div>
                    <br/>
                    <Button type="primary"  >
                      Let's Connect !!!
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default ContactUS
