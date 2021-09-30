import { DUMMY_DATA } from "../../data/data";
const initialState = {
  all_products: DUMMY_DATA,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_products":
      return {
        ...state,
        all_products: [action.prodcuts, ...state.all_products],
      };
    default:
      return state;
  }
};
