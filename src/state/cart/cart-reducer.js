import {cloneDeep} from "lodash";

export const cartActions ={
    ADD: "ADD",
    REMOVE: "REMOVE",
    SET_QUANTITY:"SET_QUANTITY",
    CLEAR_CART: "CLEAR_CART",
    SAVE_FOR_LATER: "SAVE_FOR_LATER",
    REMOVE_SAVED: "REMOVE_SAVED",
};

export const cartReducer = (state, action) => {
    switch(action.type){
        case cartActions.ADD:{
            return {cart: [...state.cart , {...action.product, cartQty: 0} ], saveForLater: state.saveForLater}
        }

        case cartActions.REMOVE:{
            const editedCart = state.cart.filter((x) => (x !== action.product));
            return {cart: editedCart, saveForLater: state.saveForLater}
        }

        case cartActions.SAVE_FOR_LATER:{
            const editedCart = state.cart.filter((x) => (x !== action.product));
            const editedSaveForLater = [...state.saveForLater , action.product];
            return {cart: editedCart, saveForLater: editedSaveForLater }
        }

        case cartActions.REMOVE_SAVED:{
            const editedSaveForLater = state.saveForLater.filter(x => (x.id !== action.product.id));
            return {cart : state.cart, saveForLater: editedSaveForLater}
        }

        case cartActions.CLEAR_CART: {
            return {cart: [], saveForLater: state.saveForLater}
        }

        case cartActions.SET_QUANTITY:{
            let newCart = cloneDeep(state.cart);
            const editedItem = newCart.find((x) => x.id === action.item.id);
            editedItem.cartQty= action.qty;

            return {cart: newCart, saveForLater:state.saveForLater};
        }
    }
}