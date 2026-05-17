import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner'
import Servicecomponents from '../../components/Servicecomponents'
import Misson from '../../components/Misson'
import Process from '../../components/Process'
import Recent from '../../components/Recent'
import Slider from '../../components/Slider'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>

      <div data-aos="fade-right">
        <Banner />
      </div>

      <div data-aos="zoom-in">
        <Servicecomponents />
      </div>

      <div data-aos="fade-left">
        <Misson />
      </div>

      <div data-aos="flip-up">
        <Process />
      </div>

      <div data-aos="fade-up">
        <Recent />
      </div>

      <div data-aos="zoom-out">
        <Slider />
      </div>

    </>
  )
}

export default Home 