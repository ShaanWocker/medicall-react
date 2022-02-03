import React from 'react';
import slider1 from '../assets/images/slider-1.jpg';

function FindOutHeading() {
  return (
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide '
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active '>
          <img
            src={slider1}
            className='d-block w-100 '
            alt='Image'
            style={{ height: '500px' }}
          />
        </div>
      </div>
      <div className='carousel-caption col-6 text-start mt-2 py-3'>
        <p>
          Understanding the <br /> value of <br /> Restricted Medical <br />
          Schemes
        </p>
        <a
          className='btn btn-light p-3'
          href='https://medicall.co.za/wp-content/uploads/2021/08/MC-Restricted-vs-Open-Medical-Schemes-4-Aug-2021.pdf'
        >
          FIND OUT HOW WE UNPACK THIS VALUE
        </a>
      </div>
    </div>
  );
}

export default FindOutHeading;
