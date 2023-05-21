export const ordersActions = {
  ADD: "ADD",
};

export const ordersReducer = (state, action) => {
  switch (action.type) {
    case ordersActions.ADD: {
      return {
        orders: [
          ...state.orders,
          { orderItems: action.order, date: new Date() },
        ],
      };
    }
  }
};
