import React from 'react'
import Singleprocess from './Singleprocess'

const Process = () => {
  return (
    <>
    <section className='py-[107px]'>
        <div className="container">
          <div className='text-center'>
              <h6 className='font-robotosharif font-semibold text-[30px] text-[#64CCC5] '>Process</h6>
            <h2 className='font-robotosharif font-semibold text-[#0C0C0C] text-[64px] pt-[24px] pb-[87px] w-[628px] inline-block'>Process that moves 
things forward</h2>
<div className='flex justify-between '>
    <Singleprocess prosname="Ideate" prosDes="The ideation process is a crucial phase in the design process where creative thinking and brainstorming" />
    <Singleprocess prosname="Reserach" prosDes="Research is a critical component of the design process, helping designers understand the problem" />
    <Singleprocess prosname="Create" prosDes="Designing a process involves several key steps to ensure clarity, efficiency, successful
implementation"/>
    <Singleprocess prosname="Testing" prosDes="Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"/>

</div>

          </div>

        </div>
    </section>
      
    </>
  )
}

export default Process
