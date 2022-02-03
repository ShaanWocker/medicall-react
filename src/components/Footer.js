import React from 'react';
import logo from '../assets/images/medicall.png';
import watermark from '../assets/images/watermark.png';

function Footer() {
  return (
    <footer
      className='bg-light pt-5 bg-bottom-right-700'
      style={{ backgroundImage: 'url(' + watermark + ')' }}
    >
      <div className='footer-wrapper center'>
        <div className='container mt-5 '>
          <div className='row'>
            <div className='footer-wrapper col-4'>
              <img src={logo} alt='' class=' pb-5' />
            </div>
            <div className='footer-wrapper-text col-8'>
              <h4>Member Care Line: 0860 101 333</h4>
              <h5>
                We offer Independent Scheme Management Services to Restricted
                Medical Schemes and Independent Member Care Line Services to
                select Healthcare Consultants.
              </h5>
              <h5>
                We deliver continued value and improvement through our
                independent analysis &amp; reporting of trends to our clients.
              </h5>
            </div>
          </div>
          <div className='container'>
            <div className='row py-5'>
              <h6 className='text-dark text-start'>
                © 2022 Medi Call | All Rights Reserved | Website Design ℵ by
                Cyclonic Media
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
