import React from 'react';
import './signcontainer.css';

const SignContainer = () => {
  return (
    <div className='e-commerce-sign-container'>
       <h1 className='sign-h1'>Let’s be friends!</h1>
       <h4 className='sign-h4'>Sign up for the Austin Vogue Demo newsletter and stay up to date with the latest and greatest!</h4>
       <div className='sign-form'>
            <input type="email" placeholder='Your email' className='sign-cont-input'/>
            <button id='btnsign'>Sign UP</button>
       </div>
    </div>
  )
}

export default SignContainer
