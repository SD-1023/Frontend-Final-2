import React from 'react'

export default function Collection({img,collection}) {
  return (
  
      <div className='relative w-[13.5625rem] lg:w-[23.5625rem] lg:h-[17.625rem] md:h-[17.625rem] md:w-[17.5rem] h-[10.125rem]'>
        <img className='rounded-lg h-[10.125rem] lg:w-[18.8125rem] lg:h-[18.8125rem] md:h-[17.625rem] md:w-[17.5rem] ' src={`/assets/images/${img}`}/>
        <div className='absolute bottom-[0.56rem] left-[0.62rem] text-sm	'>
          <h3 >{collection}</h3>
        </div>
         
    </div>
    
    
  )
}
