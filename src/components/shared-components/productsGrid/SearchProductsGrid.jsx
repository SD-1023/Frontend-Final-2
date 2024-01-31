// import ProductCard from "./ProductCard";
// import MyPagination from "../MyPagination";
// import { useSearch } from "../../contexts/SearchContext";

// export default function SearchProductsGrid() {
//   const { products, productsCount, handlePageChange } = useSearch();

//   return (
//     <div className="pb-4">
//       <span className="text-sm font-semibold text-color-typeLowEmphasis leading-4 sm:hidden">
//         {products?.length !== 0
//           ? `${products.length} Products`
//           : "No products found!"}
//       </span>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] mt-1">
//         {products[0] ? (
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <h1 className="text-center text-2xl text-color-primary">
//             No products found!
//           </h1>
//         )}
//       </div>
//       {Math.ceil(productsCount / 9 > 1) ? (
//         <div className="mt-4 flex justify-center">
//           <MyPagination
//             count={Math.ceil(productsCount / 9)}
//             handlePageChange={handlePageChange}
//           />
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }
