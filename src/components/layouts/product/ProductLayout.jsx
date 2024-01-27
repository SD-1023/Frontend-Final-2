import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import ProductContent from "./ProductContent";
import DesktopGallary from "./Gallary";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";

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

  const breadCrumbs = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: productData?.category,
      path: `/category/${productData?.Category__Id}`,
    },
    {
      page: productData?.name,
      path: "#",
    },
  ];
  return (
    <div className="p-4">
      <MyBreadcrumbs pathnames={breadCrumbs} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {productData?.productsImages && (
          <DesktopGallary imagesData={productData.productsImages} />
        )}
        {productData && <ProductContent info={productData} />}
      </div>
    </div>
  );
}
