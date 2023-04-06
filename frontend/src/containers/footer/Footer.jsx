import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook , BsTwitter , BsInstagram} from 'react-icons/bs';

import './footer.css';

const Footer = () => {


return (
    <div className="e-commerce-footer">
        <div className="footer-links-container">
            <div className="footer-links-div">
                <h4>Shop</h4>
                <p><Link to='/men'>Men</Link></p>
                <p><Link to='/women'>Women</Link></p>
                <p><Link to='/accessories'>Accessories</Link></p>
                <p><Link to='/collections'>Collections</Link></p>
            </div>

            <div className="footer-links-div">
                <h4>Learn</h4>
                <p>Product care</p>
                <p>Theme Features</p>
                <p>Careers</p>
                <p>Our story</p>
            </div>


            <div className="footer-links-div">
                <h4>Support</h4>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Shipping and returns</p>
                <p>Order status</p>
                <p>Terms of use</p>
                <p>Privacy policy</p>
            </div>
        </div>
        <div className="footer-sign-social">
            <h3>Sign up for our Newsletter</h3>
            <p>Be the first to hear about Austin Vogue Demo’s latest and greatest deals and products</p>
            <div className='footer-form'>
            <input type="email" placeholder='Your email' className='footer-input'/>
            <button className='footer-btn'>Join</button>
            </div>
            <div className="social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <BsFacebook className='footer-icon'/>
                    <BsTwitter className='footer-icon'/>
                    <BsInstagram className='footer-icon'/>
                </div>
            </div>
       
        </div>
    </div>
)
}

export default Footer;