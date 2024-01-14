import React from 'react'
import Collection from '../../../shared-components/Collection'

export default function Handpicked() {
  return (
    <div className='bg-color-primary pb-4  pt-[1.12rem] md:pt-8 '>
      <h2 className='pb-3 md:pb-[1.44rem] pl-6 text-color-bright font-semibold text-sm md:text-[2.125rem]'>Handpicked Collections</h2>
      <div className='md:flex md:gap-10 lg:gap-0 '>
      <div className='flex px-4 lg:px-0 gap-4 md:gap-10 lg:gap-0   pb-4 md:px-0 md:pl-5 md:pr-0 '>
      <Collection  img={'personalCare.jpg'} collection={"Personal Care"} />
      <Collection img={'handbag.jpg'} collection={"Handbags"} />

    </div>
    <div className='flex gap-4 md:gap-10 lg:gap-0   px-4 md:px-0  '>
      <Collection img={'watch.jpg'} collection={"Wrist Watches"} />
      <Collection img={'sunglass.jpg'} collection={"Sunglasses"} />

    </div>
      </div>
        
    </div>
  )
}
  