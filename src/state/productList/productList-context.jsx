import { createContext } from "react";

//want to set default list to the product list pulled from the API

export const ProductListContext = createContext({
    productList: [],

});