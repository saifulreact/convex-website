import React from 'react'
import CommonTittle from './common/CommonTittle'
import SinglsCard from './SinglsCard'

const Servicecomponents = () => {
  return (
    <>
<div className='mt-[100px]'>
    <CommonTittle/>
    <div className='flex  flex-wrap justify-baseline mb-[80px] '>
      <SinglsCard/>
      <SinglsCard/>
      <SinglsCard/>
    </div>
    <div className='flex  flex-wrap justify-baseline mb-[116px] '>
      <SinglsCard/>
      <SinglsCard/>
      <SinglsCard/>
    </div>
</div>
      
    </>
  )
}

export default Servicecomponents
