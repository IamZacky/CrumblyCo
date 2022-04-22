import React, { useEffect } from 'react';

/* Framer Motion */
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

/* Images */
import c from '../../assets/images/C.png';
import rollingPin from '../../assets/images/rollingPin.png';
import spoon from '../../assets/images/spoon.png';

import './AboutUs.css';

const AboutUs = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const rollLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      rollLeft.start({
        opacity: 1,
        x: 0
      });
    }

    if (!inView) {
      rollLeft.start({
        opacity: 1,
        x: -300
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="app__aboutus app__bg flex__center section__padding relative" id="about">
      <div className="app__aboutus-overlay flex__center absolute">
        <img src={c} alt="C_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans text-gray-300">The Crumbly Company offers a wide range of baked products from cakes, cookies,pastries, and even breads. <br />
            For us, using high quality ingredients helps in giving our customers an unforgettable experience.
            Quality is our top priority that is why our products are inspired by the quote “food is not simply an organic fuel to keep body and soul together, it is a perishable art that must be savoured at the peak of perfection” when we decided to make our cookies and products.
          </p>
        </div>

        <div ref={ref} className="app__aboutus-content_knife flex__center">
          <motion.img
            animate={rollLeft}
            transition={{ duration: 1.0025 }}
            src={rollingPin} alt="about_pin"
          />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Mission/Vision</h1>
          <img src={spoon} alt="about_spoon" className="spoon__img" />
          <p className="text-gray-300 font-bold mt-4 tracking-wide">Mission</p>
          <p className="text-gray-300 mt-4">Produce world class quality cookies that will give comfort to every person who eats it. <br /><br />
            To be one of the benchmark in the baking industry.
          </p>
          <p className="text-gray-300 font-bold mt-4 tracking-wide">Vision</p>
          <p className="text-gray-300 mt-4 lg:mb-16 xl:mb-8 2xl:mb-5">To continuously improve so we can attain and maintain our goal to be the benchmark in our industry and exceed our customer’s expectations</p>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
