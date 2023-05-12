import { cloneDeep } from "lodash";

export const productListActions = {
  ADD_REVIEW: "ADD_REVIEW",
  SET: "SET",
  ADD_QUANTITY: "ADD_QUANTITY"
};

export const productListReducer = (state, action) => {
  switch (action.type) {
    case productListActions.SET: {
      
      const newProductList = action.productList.map(product => {
        return {...product, totalQty: 200}; //add a default amount of 200 items to each product
      });
      
      return { productList: newProductList };
    }

    /*
        case productListActions.ADD_REVIEW:{
            const edited = products.find(x => x.id == action.id)
            edited.reviews = [...edited.reviews, action.review]
            return { productList: [...product, editedProduct] };
        }*/
  }
};
