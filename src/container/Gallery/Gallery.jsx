import React, { useEffect } from 'react';

/* Framer Motion */
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

/* Icons */
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {

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
        x: -150
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handleInstagram = () => {
    window.location = "https://www.instagram.com/thecrumblycompany/";
  }

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div ref={ref} className="app__gallery-content">

        <motion.a
          animate={rollLeft}
          href="https://www.facebook.com/thecrumblycompany/"
          rel="noreferrer"
          target="_blank"
        >
          <SubHeading title="See Our Facebook Page" />
        </motion.a>

        <motion.h1
          animate={rollLeft}
          transition={{ type: 'fade', delay: 0.25 }}
          className="headtext__cormorant"
        >
          Photo Gallery
        </motion.h1>

        <motion.p
          animate={rollLeft}
          transition={{ type: 'fade', delay: 0.35 }}
          className="p__opensans"
          style={{ color: '#AAAAAA', marginTop: '2rem' }}
        >
          Check out our photo gallery of our products. Feel free to look out our <br /> social media pages.
        </motion.p>

      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.g1, images.g2, images.g3, images.g4, images.g5, images.g6, images.g7, images.g8].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" onClick={handleInstagram} />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
