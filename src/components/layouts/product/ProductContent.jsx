import React, { useEffect, useState } from 'react'


export default function ProductContent({info}) {
    // const {id} = useParams();
    // const { post, data } = useApi();
    // const [card , setCard] = useState();
    // useEffect(() => {
    //     post(`/cart/:id`,{authorizationa:'token'})
    //   }, [post, id]);

    // const addToBag = async (id)=>{
    //     setCard(data);
    // }

  return (
          <>
          <div className='pl-4 py-[0.88rem] ' >
            <h2 className='text-base'>{info.name}</h2>
            <p className='text-sm text-color-typeLowEmphasis'>{info.category}</p>
            <div className=' pt-[0.62rem] pb-4' >
                <span className='pr-3 font-semibold text-color-typeHighEmphasis text-xl' >${info.price}</span>
                <del className='pr-2 text-color-typeLowEmphasis text-sm'>${info.finalPrice}</del>
                <span className='text-color-error text-sm'>{info.offer}%OFF</span>
            </div>
            <div className='md:flex hidden leading-[2.62rem]'>
              <h3 className='pr-4' >Quantity: </h3>
              <button className='rounded px-4 border border-color-primary'> 
                -

                {info.quantity}
                +
                </button>
             
            </div>

            <div className='flex flex-row md:hidden'>
                <button className=' w-[4.625rem] h-[2.375rem] bg-color-accent rounded' >{info.averageRating}</button>
                <div className='pl-[0.87rem] flex flex-col'>
                    <p className='font-semibold text-sm'>Average Rating</p>
                    <p className='text-sm text-color-typeLowEmphasis'>43 Rating and 40 Reviews</p>
                </div>
            </div>
            <div className='py-4 md:pt-10 md:pr-10 flex md:text-sm gap-2 '>
          <button  className='rounded-lg bg-color-primary text-color-bright w-[100%] md:min-w-[14rem] lg:min-w-[20rem]  py-[0.625rem] md:px-0 '>Add To Bag</button>
          <button  className='rounded-lg hidden md:block border border-color-primary md:min-w-[14rem] lg:min-w-[15rem]   md:px-0 py-[0.625rem] px-[7.5rem]'>Add To WishList</button>

          </div>
          </div>
        
          </>
  
  )
}
