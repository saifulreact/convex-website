import React, { useEffect } from 'react'
import Banner from '../../components/Banner'
import Servicecomponents from '../../components/Servicecomponents'
import Misson from '../../components/Misson'
import Process from '../../components/Process'
import Recent from '../../components/Recent'
import Slider from '../../components/Slider'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <Banner />

      <div data-aos="fade-right">
        <Servicecomponents />
      </div>

      <div data-aos="fade-left">
        <Misson />
      </div>

      <div data-aos="zoom-in">
        <Process />
      </div>

      <div data-aos="fade-up">
        <Recent />
      </div>

      <div data-aos="flip-left">
        <Slider />
      </div>
    </>
  )
}

export default Home