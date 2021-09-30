import { ContactSupportOutlined } from "@material-ui/icons";
import store from "../../index";
export const updateFilter = (filter) => {
  return {
    type: "UPDATE_FILTER",
    filter,
  };
};

export const setType = (filter_type) => {
  return {
    type: "SET_TYPE",
    filter_type,
  };
};
export const filterProducts = () => async (dispatch) => {
  const state = store.getState();
  const type = state.header.set_type;

  if (type == "All") {
    dispatch(updateFilter(state.home.all_products));
  } else {
    const result = state.home.all_products.filter(
      (value) => value.type === type
    );
    dispatch(updateFilter(result));
  }
};
