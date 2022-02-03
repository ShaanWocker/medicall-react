import React from 'react';
import Header from '../components/Header';

function Contact() {
  return (
    <>
      <Header text='Contact us' />

      <div className='container  mt-5'>
        <p className='contact-engagement text-start'>
          We would appreciate the opportunity to unpack the value of Restricted
          Medical Schemes with you and empower healthcare consultants with the
          tools to engage with all their members.
        </p>
      </div>

      <div className='container'>
        <div className='row contact-info p-5'>
          <div className='col-6 mt-3 text-start '>
            <h3>
              Restricted Medical Scheme <br /> Management
            </h3>

            <strong>Chris van Wyk</strong>
            <br />

            <strong>Cell: 083 458 5403</strong>
            <br />
            <strong>Email: chris@cedarhc.co.za</strong>
          </div>
          <div className='col-6 mt-3 text-start'>
            <h3>Member Care Line Service</h3>
            <br />
            <strong>Josef de Beer</strong>
            <br />
            <strong>Cell: 083 450 0390</strong>
            <br />
            <strong>Email: josef@cedarhc.co.za</strong>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='contact-heding text-black mt-5 mb-5'>
          <h1>Have a question for us?</h1>
        </div>
        <div className='container mb-5'>
          <div className='input-field mt-5 mb-5 '>
            <div class='input-group mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='First Name'
                aria-label='First Name'
              />

              <input
                type='text'
                class='form-control'
                placeholder='Last Name'
                aria-label='Last Name'
              />
            </div>
            <input
              type='text'
              class='form-control'
              placeholder='How can we assist?'
              aria-label='help'
            />
            <br />
            <div class='input-group'>
              <textarea
                class='form-control'
                aria-label='With textarea'
                placeholder='Please tell us more'
              ></textarea>
            </div>
          </div>
          <button type='button' class='btn btn-secondary btn-lg'>
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
