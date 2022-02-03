import React from 'react';
import people from '../assets/people.svg';
import headset from '../assets/headset.svg';

function TwoColumnHeading() {
  return (
    <div className='container-fluid twoColumnHeading-container  mt-5 '>
      <div className='row row-cols-2 twoColumnHeading mb-5 bg-light '>
        <div className='col mb-4 mt-4 container-list-column-heading'>
          <div className='col mb-4 mt-4 '>
            <div className='icon1 '>
              <img src={people} className='card-img-top' alt='...' />
            </div>

            <h3>
              Independent Restricted Medical Scheme Management, with over 10
              years of experience:
            </h3>
            <ul>
              <li>
                Strategic advice and industry updates for both the board of
                trustees and the employer.
              </li>
              <li>
                Assist the board of trustees with meeting arrangements,
                independent monitoring of all suppliers and deal with statutory
                requirements and communication with Regulators.
              </li>
              <li>Independent advice on industry best-practices.</li>
              <li>
                Strategic advice and industry updates for both the board of
                trustees and the employer.
              </li>
              <li>Assist with alignment of supplementary products.</li>
              <li>
                Offer accredited consulting services to employees, enabling
                balanced representation of restricted & open medical schemes
                within the employer.
              </li>
              <li>
                Empower the board of trustees with independent analysis and
                reporting.
              </li>
              <li>Communication to members and employers.</li>
            </ul>
          </div>
        </div>
        <div className='col mb-4 mt-4'>
          <div>
            <img src={headset} className='card-img-top' alt='...' />
          </div>
          <h3>
            Independent Restricted Medical Scheme Management, with over 10 years
            of experience:
          </h3>
          <ul>
            <li>
              Strategic advice and industry updates for both the board of
              trustees and the employer.
            </li>
            <li>
              Assist the board of trustees with meeting arrangements,
              independent monitoring of all suppliers and deal with statutory
              requirements and communication with Regulators.
            </li>
            <li>Independent advice on industry best-practices.</li>
            <li>
              Strategic advice and industry updates for both the board of
              trustees and the employer.
            </li>
            <li>Assist with alignment of supplementary products.</li>
            <li>
              Offer accredited consulting services to employees, enabling
              balanced representation of restricted & open medical schemes
              within the employer.
            </li>
            <li>
              Empower the board of trustees with independent analysis and
              reporting.
            </li>
            <li>Communication to members and employers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnHeading;
