import React from 'react';

/* Framer Motion */
import { motion } from 'framer-motion';

/* Images */
import spoon from '../../assets/images/spoon.png';
import welcome from '../../assets/images/welcomeImage.png';

const Header = () => (
  <div className="app__header app__wrapper section__padding bg-[#0C0C0C]" id="home">

    <div className="app__wrapper_info">

      <div className="">
        <div className="flex">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1 }}
            className="p__header"
          >
            Y
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.15 }}
            className="p__header"
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.25 }}
            className="p__header"
          >
            u
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.35 }}
            className="p__header">
            r
          </motion.span>

          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.45 }}
            className="p__header ml-[5px]"
          >
            d
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.5 }}
            className="p__header"
          >
            a
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.55 }}
            className="p__header"
          >
            i
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.6 }}
            className="p__header"
          >
            l
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.65 }}
            className="p__header"
          >
            y
          </motion.span>

          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.7 }}
            className="p__header ml-[5px]"
          >
            c
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.75 }}
            className="p__header">
            r
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.8 }}
            className="p__header"
          >
            u
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.85 }}
            className="p__header"
          >
            m
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.9 }}
            className="p__header"
          >
            b
          </motion.span>

          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 1.95 }}
            className="p__header ml-[5px]"
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2 }}
            className="p__header"
          >
            f
          </motion.span>

          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header ml-[5px]"
          >
            s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            w
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            e
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            e
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            t
          </motion.span>
          <motion.span initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header">
            n
          </motion.span>
          <motion.span initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            e
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, marginTop: '-20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ type: 'spring', bounce: 0.75, duration: 1, delay: 2.5 }}
            className="p__header"
          >
            s
          </motion.span>
        </div>

        <img src={spoon} alt="spoon_image" className="spoon__img" />
      </div>

      <br />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'fade', duration: 1, delay: 0.15 }}
        className="app__header-h1 uppercase text-[#DCCA87] font-bold tracking-[0.04em] text-[90px] leading-[117px] font-serif custom:text-[50px] leading-[90px] lg:leading-[117px] text-[90px]"
      >
        Welcome to The Crumbly!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 0.25 }}
        className="p__opensans"
        style={{ margin: '2rem 0' }}
      >Happiness is the smell of a freshly baked bread! Bread is Love, Bread is Life.
        <br /> Made handful with Love.
      </motion.p>

      <br />

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 0.35 }}
        href="#menu"
        className="custom__button px-5 py-3 text-lg tracking-wide font-semibold text-gray-800 bg-[#F5EFDB] border-[1px] border-gray-300 font-serif"
      >
        Explore Menu
      </motion.a>

    </div>

    <div className="app__wrapper_img">

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'fade', duration: 1, delay: 0.15 }}
        src={welcome}
        className="w-[80%]"
        alt="header_img" />

    </div>

  </div>
);

export default Header;
