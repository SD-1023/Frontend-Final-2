import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import ProductContent from "./productComponents/ProductContent";
import DesktopGallary from "./productComponents/Gallary";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
import MobileProductDescription from "./productComponents/description/MobileProductDescription";
import DesktopProductDescription from "./productComponents/description/DesktopProductDescription";

export default function ProductLayout({ children }) {
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const { get, data, loading } = useApi();

  useEffect(() => {
    get(`/products/${id}`);
  }, [get, id]);

  useEffect(() => {
    setProductData(data?.product);
  }, [data]);

  const breadCrumbs = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: productData?.category,
      path: `/category/${productData?.category}`,
    },
    {
      page: productData?.name,
      path: "#",
    },
  ];
  return (
    <>
      <div className="p-4">
        <MyBreadcrumbs pathnames={breadCrumbs} />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {productData?.productsImages && (
            <DesktopGallary imagesData={productData.productsImages} />
          )}
          {productData && <ProductContent productId={id} info={productData} />}
        </div>
      </div>
      {productData?.description && (
        <>
          <MobileProductDescription description={productData.description} />
          <DesktopProductDescription description={productData.description} />
        </>
      )}
    </>
  );
}
