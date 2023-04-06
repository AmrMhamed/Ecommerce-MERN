import React from 'react';
import moza from '../../assests/fashion1.jpg';
import elwad from '../../assests/fashion2.jpg';

import './fashion.css';

const Fashion = () => {
  return (
    <div className='e-commerce-fashion'>
      <div className="fashion-left">
        <img src={moza} alt="" className='moza' style={{borderRadius:'4rem'}}/>
      </div>

      <div className="fashion-right">
        <div className="fashion-container">
            <h1>Fashion you can celebrate.</h1>
            <p>All of our materials are hand picked, and our clothes are handcrafted. We use only the best fabrics available so that you can not only look good, but feel good too.</p>
        </div>
        <img src={elwad} alt="" className='elwad' style={{borderRadius:'4rem'}}/>
      </div>
    </div>
  )
}

export default Fashion
