import React from 'react';

function GridBlock() {
  return (
    <div
      className='row grid-row py-5 px-5 mb-5 mt-5'
      style={{ backgroundColor: '#677c1c' }}
    >
      <div className='grid-title'>
        <h1>How we empower Restricted Medical Schemes:</h1>
      </div>
      <div className='grid-items  col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>1</p>
          </div>
          <h5 className='icon-text'>
            We define the critical strategies required to unlock value for your
            scheme.
          </h5>
        </div>
      </div>
      <div className='grid-items col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>2</p>
          </div>
          <h5 className='icon-text'>
            We research the best-practise solutions to your problems.
          </h5>
        </div>
      </div>
      <div className='grid-items col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>3</p>
          </div>
          <h5 className='icon-text'>
            We provide a framework to overcome your schemes stumbling blocks.
          </h5>
        </div>
      </div>
      <div className='grid-items col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>4</p>
          </div>
          <h5 className='icon-text'>
            We are independently positioned to source the best practises for
            your scheme.
          </h5>
        </div>
      </div>
      <div className='grid-items col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>5</p>
          </div>
          <h5 className='icon-text'>
            We continuously challenge your existing suppliers to adapt to
            best-practice solutions.
          </h5>
        </div>
      </div>
      <div className='grid-items col-4'>
        <div className='grid-item'>
          <div className='icon'>
            <p className='icon-number'>6</p>
          </div>
          <h5 className='icon-text'>
            We empower the board of trustees with independent analysis and
            reporting.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default GridBlock;
