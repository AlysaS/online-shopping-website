import {cloneDeep} from "lodash";

export const cartActions ={
    ADD: "ADD",
    REMOVE: "REMOVE",
    SAVE_FOR_LATER: "SAVE_FOR_LATER",
    REMOVE_SAVED: "REMOVE_SAVED",
};

export const cartReducer = (state, action) => {
    switch(action.type){
        case cartActions.ADD:{
            return {cart: [...state.cart , action.product]}
        }

        case cartActions.REMOVE:{
            const editedCart = state.cart.filter(x => (x !== action.product));
            return {cart: editedCart}
        }

        case cartActions.SAVE_FOR_LATER:{
            return {saveForLater: [...state.saveForLater , action.product]}
        }

        case cartActions.REMOVE_SAVED:{
            const editedSaveFoLater = state.saveForLater.filter(x => (x.id !== action.product.id));
            return {saveForLater: editedSaveFoLater}
        }
    }
}