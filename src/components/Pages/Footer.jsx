import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';

// css
import './Footer.css';

/* Images */
import logo from '../../assets/images/logo.png';
import spoon from '../../assets/images/spoon.png';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Philippines</p>
        <p className="p__opensans">+63 999 9999 999</p>
        <p className="p__opensans">+63 999 9999 999</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={logo} alt="footer_logo" />
        <p className="p__opensans">&quot;What we have here just ain't about simple breads, this is not your ordinary bakery.&quot;</p>
        <img src={spoon} className="spoon__img" style={{ marginTop: 15 }} alt="ihihih" />
        <div className="app__footer-links_icons flex gap-4 justify-center items-center">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Open Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 The Crumbly Company. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
