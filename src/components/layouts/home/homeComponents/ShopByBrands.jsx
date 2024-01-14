
import React from 'react'
import Brands from '../../../shared-components/Brands'

export default function ShopByBrands() {
  return (
    <div className='pt-[1.75rem] pl-4 md:pl-0 pb-6 bg-color-bright'>
     <h2 className='pb-[0.81rem] md:text-[2.125rem] font-semibold md:pl-[1.38rem]'>Shop By Brands</h2>
     <div className='md:flex md:gap-[2.88rem]' >
     <div className='flex gap-4 md:gap-[2.88rem] pb-6 md:pb-0 md:pl-[1.38rem]'>
     <Brands img={'zara.svg'}/>
     <Brands img={'zara.svg'}/>
     <Brands img={'zara.svg'}/>
     </div>
     <div className='flex gap-4 md:gap-[2.88rem]'>
     <Brands img={'zara.svg'}/>
     <Brands img={'zara.svg'}/>
     <Brands className='md:gap-0' img={'zara.svg'}/>
     </div>
     </div>
    </div>
  )
}
