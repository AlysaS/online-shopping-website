import {cloneDeep} from "lodash"; 

export const productListActions = {
    ADD_REVIEW: "ADD_REVIEW",
    CATEGORY: "CATEGORY",
    SET: "SET",
}

export const productListReducer = (state, action) => {
    switch(action.type){
        case productListActions.SET: {
            return { productList: action.payload };
        }
    }
}