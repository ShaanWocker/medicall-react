import React from 'react';

import Header from '../components/Header';
import slider from '../assets/images/slider-about.jpg';

function About() {
  return (
    <>
      <Header text='About us' />

      <div className='container'>
        <div className=' mb-3'>
          <div className='row g-0'>
            <div className='col-md-6'>
              <div className='about-card-body text-black text-start'>
                <p className='card-text'>
                  Medi Call was established in 1999 as a support service to
                  healthcare consultants and later started its own healthcare
                  brokerage. The company was then acquired by Cedar Employee
                  Benefits to combine with their Healthcare division to develop
                  and grow their healthcare business.
                </p>
                <p className='card-text'>
                  In 2011 Medi Call became the scheme manager for the Imperial
                  Group Restricted Medical Scheme and continues to add value to
                  this day.
                </p>
                <p>
                  Medi Call has gained <u>unique knowledge and experience</u>{' '}
                  over many years of scheme management services and have become
                  experts in understanding the underlying value of Restricted
                  Medical Schemes.
                </p>
              </div>
            </div>{' '}
            <div className='col-md-6 '>
              <img
                src={slider}
                className='img-fluid about-image rounded-start'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='about-column'>
        <div className='container px-5'>
          <div className='row px-5 pb-5'>
            <div className='col-6 about-row'>
              <h5>
                As independent scheme managers, Medi Call is uniquely positioned
                to advise and support not only the board of trustees, but also
                the employer and its employees. The company independently
                monitors all service suppliers, assisting the trustees in
                improving service delivery continuously. In addition, by
                providing independent analysis Medi Call continuously challenges
                existing suppliers to adapt to best-practice and keep suppliers
                accountable.
              </h5>
            </div>
            <div className='col-6 about-row'>
              <h5>
                As healthcare consultants, Medi Call has a complete
                understanding of supplementary products and services, which
                means that the company can advise trustees and the employer on
                strategies to best serve their employees’ healthcare needs and
                requirements. In addition, by providing independent analysis
                Medi Call continuously challenges existing administrators to
                rectify prevalent problem areas and keep Medical Schemes
                accountable.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
