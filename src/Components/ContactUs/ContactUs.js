// ContactUs.js

import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './contact.css'
import Head from '../Head/Head';
import image from './image (2).png'
const ContactUs = () => {
  return (
    <div className="contact-us">
      <Head />
      <div className='staticdata'>
        Welcomet to hobbies <br>
        </br>

        <div className='help'>
          <img src={image} height={'250px'}
          width={'500px'}/><br></br>
        we are always here to help you <br></br>
        feel free to contact us on below detail 

        </div>
      </div>
        <div className='Heading'>
      <h2 className='inf'>Get in Touch</h2>
      <h2 className='inf'>Where we Are</h2>
      </div>

      <div className="contact-details">
        <div className="column">
          <p>
            <strong>Email:</strong>
          </p>
          <p>
            <a href="jalpatel110504r@email.com" className='elink'>jalpatel110504@email.com</a>
          </p>
        </div>

        <div className="column">
          <p>
            <strong>Social Media:</strong>
          </p>
          <p className="social-icon">
            <a href="https://www.instagram.com/jal_1331/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </p>
        </div>

        <div className="column">
          <p>
            <strong>Address:</strong>
          </p>
          <p>B404 Sumeru Heights, Nadiad, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
