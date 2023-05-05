import {cloneDeep} from "lodash"; 

export const productListActions = {
    ADD_REVIEW: "ADD_REVIEW",
    SET: "SET",
}

export const productListReducer = (state, action) => {
    switch(action.type){
        case productListActions.SET: {
            return { productList: action.productList };
            
        }

        /*
        case productListActions.ADD_REVIEW:{
            const edited = products.find(x => x.id == action.id)
            edited.reviews = [...edited.reviews, action.review]
            return { productList: [...product, editedProduct] };
        }*/
    }
}