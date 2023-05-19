import { cloneDeep } from "lodash";

export const productListActions = {
  ADD_REVIEW: "ADD_REVIEW",
  SET: "SET",
  SET_AMOUNT: "SET_AMOUNT"
};

export const productListReducer = (state, action) => {
  switch (action.type) {
    case productListActions.SET: {
      
      const newProductList = action.productList.map(product => {
        if(product.category === "men's clothing" || product.category === "women's clothing"){
          return {...product, sizes: [{name:"small", amount: 10} , {name:"medium", amount: 10} , {name:"large", amount: 10}, {name:"xlarge", amount: 10}]}; //add a default amount of 10 items to each product
        }else{
          return {...product, totalQty: 10}; //add a default amount of 10 items to each product
        }
        
      });
      
      return { productList: newProductList };
    }

    case productListActions.SET_AMOUNT: {
      let newProductList = cloneDeep(state.productList);
      const editedProduct = newProductList.find((x) => x.id === action.product.id);
      if(editedProduct.sizes != null){
        const editedSize = editedProduct.sizes.find((x) => x.name == action.product.size);
        editedSize.amount = action.amount;
      }else{
        editedProduct.totalQty = action.amount;
      }
      

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
