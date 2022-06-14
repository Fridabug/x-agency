import React from 'react';
import {Link} from 'react-router-dom';

function Side() {
  return (
    <div className='side'>
      <Link to="/contact">
        <p>Let's collaborate</p> 

        <span className='circle'></span>
      </Link>
    </div>
  )
}

export default Side