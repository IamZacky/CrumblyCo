import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <>
      <div className="contact__container">
        <br /><br /><br /><br />
        <div className="app__newsletter custom:w-[90%]" id="contact">
          <div className="app__newsletter-heading">
            <SubHeading title="Contact Us" />
            <h1 className="headtext__cormorant">Contact The Crumbly Company</h1>
            <p className="p__opensans">And never miss our delicious breads!</p>
          </div>
          <div className="app__newsletter-input flex__center flex flex-col gap-4">
            <input type="email" placeholder="Enter your email address" />
            <input type="number" placeholder="Enter your phone number" />
            <textarea className="resize-none" placeholder="Enter your concern or inquiry here" />
            <button type="button" className="custom__button px-5 py-3 text-lg tracking-wide font-semibold text-gray-800 bg-[#F5EFDB] border-[1px] border-gray-300 font-serif">Send Now</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Newsletter;
