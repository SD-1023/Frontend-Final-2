
import { Swiper,SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../../../shared-components/Card';





export default function NewArrivals() {
  return (
    <div className='pl-4 my-6 md:pt-[1.81rem]'>
      <h1 className='pb-3 md:pb-[1.48rem] font-semibold text-sm md:text-[2.125rem]	'>New Arrivals</h1>
      
      <Swiper
      // modules={[Autoplay]}
       spaceBetween={16}
      
        loop={true}
      //  autoplay={{
      //   delay:1000
      //  }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      
      <SwiperSlide > 
      <Card className='w-[8.9375rem] lg:w-[20.73956rem] sm:w-[234px] ' img={'bag1.png'} brand={"Grande"} color={"Blossom Pouch"} price={"$39.49"}/>
      
    </SwiperSlide>
    <SwiperSlide> 
      <Card className='w-[8.9375rem] lg:w-[20.73956rem] sm:w-[234px] ' img={'bag1.png'} brand={"Grande"} color={"Blossom Pouch"} price={"$39.49"}/>
      
    </SwiperSlide>
    <SwiperSlide> 
      <Card className='w-[8.9375rem] lg:w-[20.73956rem] sm:w-[234px] ' img={'bag1.png'} brand={"Grande"} color={"Blossom Pouch"} price={"$39.49"}/>
      
    </SwiperSlide>
   
    <SwiperSlide> 
      <Card className='w-[8.9375rem] lg:w-[20.73956rem] sm:w-[234px]  ' img={'bag1.png'} brand={"Grande"} color={"Blossom Pouch"} price={"$39.49"}/>
      
    </SwiperSlide>
    <SwiperSlide> 
      <Card className='w-[8.9375rem] lg:w-[20.73956rem] sm:w-[234px] '  img={'bag1.png'} brand={"Grande"} color={"Blossom Pouch"} price={"$39.49"}/>
      
    </SwiperSlide>

      
   
      

       
      </Swiper>
    </div>
  )
}
