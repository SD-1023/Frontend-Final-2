// import { createContext, useContext } from "react";
// import useApi from "../hooks/useApi";
// import { useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";
// import { useNavigation } from "react-router-dom";
// const WishlistProvider = createContext({});

// export default function WishlistContext({ children }) {
//   const [wishListProducts, setWishListProducts] = useState([]);

//   const { get, data } = useApi();
//   const { user } = useAuth();
//   const navigate = useNavigation();

//   useEffect(() => {
//     if (user) {
//       get(`/wishlist/${user.userId}`, user.sessionId);
//     }
//   }, []);

//   useEffect(() => {
//     if (data?.message === "success") {
//       console.log("data.wishlist.wishlist", data.wishlist);
//       setWishListProducts(data.wishlist);
//     }
//   }, [data]);

//   const addToWishList = (productId) => {
//     if (!user) {
//       navigate("/signin");
//     } else {
//       wishPost(
//         "/wishlist/",
//         {
//           userId: user.userId,
//           productId: productId,
//         },
//         user.sessionId
//       );
//     }
//   };

//   return (
//     <WishlistProvider.Provider value={{ addToWishList, wishListProducts }}>
//       {children}
//     </WishlistProvider.Provider>
//   );
// }
// export const useWishlistContext = () => {
//   return useContext(WishlistProvider);
// };

import { createContext, useContext, useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import { useAuth } from "./AuthContext";

const WishlistProvider = createContext({});

export default function WishlistContext({ children }) {
  const [wishListProducts, setWishListProducts] = useState([]);
  const { get, data } = useApi(); // Assuming 'post' is similar to your 'wishPost'
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      get(`/wishlist/${user.userId}`, user.sessionId);
    }
  }, [user]); // Added 'get' and made 'user' more specific if possible

  useEffect(() => {
    if (data?.message === "success") {
      console.log("data.wishlist", data.wishlist);
      setWishListProducts(data.wishlist);
    }
  }, [data]);

  // const isProductAdded = (id) => {
  //   return wishListProducts.find((product) => product.id === id);
  // };

  return (
    <WishlistProvider.Provider
      value={{ setWishListProducts, wishListProducts }}
    >
      {children}
    </WishlistProvider.Provider>
  );
}

export const useWishlistContext = () => useContext(WishlistProvider);
