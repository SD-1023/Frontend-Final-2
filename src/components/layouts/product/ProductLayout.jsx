import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel'
import useApi from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import ProductContent from './ProductContent';

export default function ProductLayout() {
    const [productData, setProductData] = useState({});
    const { id } = useParams();
    const { get, data } = useApi();

    useEffect(() => {
        get(`/products/${id}`);
      }, [get, id]);
   
      useEffect(() => {
        setProductData(data?.product);
       
      }, [data]);
    

  return (
    <>
    <div className='flex flex-col md:flex-row '>
    <div className="p-4 ">
        {productData?.productsImages && (
          <ProductCarousel productsImages={productData.productsImages} />
        )}
      </div>
      {productData && <ProductContent info={productData} />}
    </div>
    </>
  );
}
