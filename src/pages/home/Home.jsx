import React from 'react'
import Banner from '../../components/Banner'
import Servicecomponents from '../../components/Servicecomponents'
import Misson from '../../components/Misson'
import Process from '../../components/Process'
import Recent from '../../components/Recent'
import Slider from '../../components/Slider'

const Home = () => {
  <script>
  AOS.init();
</script>
  return (
    <>
      <Banner data-aos="fade-right"/>
      <Servicecomponents/>
      <Misson/>
      <Process/>
      <Recent/>
      <Slider/>
      
    </>
  )
}

export default Home
