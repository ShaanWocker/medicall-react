import React from 'react';

function LiveStatsList({ cases }) {
  console.log(cases);
  return (
    <div>
      {cases && (
        <div className='container text-black'>
          <div className='row' style={{ textAlign: 'center' }}>
            <h5
              style={{ color: '#626262' }}
              className='live-stats-heading mb-5'
            >
              <i> Live Statistics from our Consulting and Service Integrator</i>
            </h5>
          </div>
          <div className='row mb-5'>
            <div className='col'>
              <h6 className='bold'>New Cases Today</h6>
              <p>{cases.newCases.today}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>New Cases This Week</h6>
              <p>{cases.newCases.thisweek}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>New Cases This Month</h6>
              <p>{cases.newCases.thismonth}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>New Cases Year</h6>
              <p>{cases.newCases.thisyear}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>Cases Closed Today</h6>
              <p>{cases.closedCases.today}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>New Cases Week</h6>
              <p>{cases.closedCases.thisweek}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>Cases Closed This Month</h6>
              <p>{cases.closedCases.thismonth}</p>
            </div>
            <div className='col'>
              <h6 className='bold'>Cases Closed This year</h6>
              <p>{cases.closedCases.thisyear}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveStatsList;
