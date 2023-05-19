import { cloneDeep } from "lodash";

export const productListActions = {
  ADD_REVIEW: "ADD_REVIEW",
  SET: "SET",
  SET_QUANTITY: "SET_QUANTITY"
};

export const productListReducer = (state, action) => {
  switch (action.type) {
    case productListActions.SET: {
      
      const newProductList = action.productList.map(product => {
        return {...product, totalQty: 10}; //add a default amount of 10 items to each product
      });
      
      return { productList: newProductList };
    }

    case productListActions.SET_QUANTITY: {
      let newProductList = cloneDeep(state.productList);
      const editedProduct = newProductList.find((x) => x.id === action.product.id);
      editedProduct.totalQty = action.qty;

      return {productList: newProductList};
    }

    /*
        case productListActions.ADD_REVIEW:{
            const edited = products.find(x => x.id == action.id)
            edited.reviews = [...edited.reviews, action.review]
            return { productList: [...product, editedProduct] };
            */
  }   
};
