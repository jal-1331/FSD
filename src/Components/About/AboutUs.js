import React from 'react';
import './About.css'
import Head from '../Head/Head';
import image from './image (2).png'

const AboutUs = () => {
  return (
    <div className='about'>
    <div>
         <Head />
    </div>
    <div className="about-us">
       
      <h2>Hobbie</h2>
      <img src={image} height={'250px'}
          width={'500px'}/>
      
      <p>Welcome to Hobbie, your go-to platform for managing your activities and exploring hobbies!</p>
      <p>At Hobbie, we believe in the power of shared interests and the joy of discovering new passions. Whether you're into sports, arts, crafts, or anything in between, our platform is designed to help you connect with like-minded individuals and organize your favorite activities.</p>
      <p>Our team is dedicated to providing you with a seamless and enjoyable experience. If you have any questions, feedback, or suggestions, feel free to reach out to us. We're here to support you on your journey to discovering and pursuing your hobbies!</p>
      <p>Happy hobbying!</p>
    </div>
    </div>
  );
};

export default AboutUs;
