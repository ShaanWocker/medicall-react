import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Compliance() {
  return (
    <>
      <Header text='Compliance' />
      <div className='container'>
        <div className='d-grid gap-3 m-3 p-3 '>
          <button
            type='button'
            class='btn btn-secondary btn-lg '
            style={{ backgroundColor: '#677c1c' }}
          >
            Block level button
          </button>
          <button
            type='button'
            class='btn btn-secondary btn-lg '
            style={{ backgroundColor: '#677c1c' }}
          >
            Block level button
          </button>
        </div>
      </div>
    </>
  );
}

export default Compliance;
