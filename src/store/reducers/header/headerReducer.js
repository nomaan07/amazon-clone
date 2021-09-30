import { DUMMY_DATA } from "../../../data/data";
const initialState = {
  products_filter_data: [],
  set_type: "",
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        products_filter_data: action.filter,
      };
    case "SET_TYPE":
      return {
        ...state,
        set_type: action.filter_type,
      };
    default:
      return state;
  }
};
