const initialState = {
  items: [],
  quantityUpdate: [],
  total_amount: 0,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [action.item, ...state.items],
      };
    case "UPDATE_CART":
      return {
        ...state,
        items: action.items,
      };
    case "TOTAL_AMOUNT":
      return {
        ...state,
        total_amount: action.amount,
      };
    case "QUANTITY_UPDATE":
      return {
        ...state,
        quantityUpdate: action.qauntityUpdate,
      };
    default:
      return state;
  }
};
