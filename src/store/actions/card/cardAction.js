import store from "../../index";
export const setAddtoCard = (item) => {
  return {
    type: "ADD_TO_CART",
    item,
  };
};

export const updateCart = (items) => {
  return {
    type: "UPDATE_CART",
    items,
  };
};

export const setTotalAmount = (amount) => {
  return {
    type: "TOTAL_AMOUNT",
    amount,
  };
};

export const setQuantityUpdate = (qauntityUpdate) => {
  return {
    type: "QUANTITY_UPDATE",
    qauntityUpdate,
  };
};

// UPDATE QUANTITY
export const updateQuantity = (quantity, item) => async (dispatch) => {
  // let updateItem = Object.assign(item, {
  //   price: item.fixPrice * quantity,
  // });
  const state = store.getState();
  const ItemsList = state.card.items;
  const index = ItemsList.findIndex((val) => val.id === item.id);
  ItemsList[index].price = item.fixPrice * quantity;
  updateCart(ItemsList);
  dispatch(getCartTotal(ItemsList));
};

// GET CART TOTAL
export const getCartTotal = (cart) => async (dispatch) => {
  const amount = cart?.reduce((amount, item) => item.price + amount, 0);
  dispatch(setTotalAmount(amount));
};

// REMOVE FROM THE CART
export const removeFromCart = (id) => async (dispatch) => {
  const state = store.getState();
  const quantityUpdate = state.card.items;
  const total_amount = state.card.total_amount;
  const index = quantityUpdate.findIndex((val) => val.id === id);
  const price = quantityUpdate[index].price;
  let update_amount = total_amount - price;
  const result = state.card.items.filter((value) => value.id != id);
  dispatch(setTotalAmount(update_amount));
  dispatch(updateCart(result));
};

// ADD TO CART
export const addToCartHandeler = (item) => async (dispatch) => {
  const state = store.getState();
  const found = state.card.items.some((val) => val.id === item.id);
  if (found) {
    //   already have the item  in the Cart
    alert("already added");
  } else {
    //   item added sucessfully
    dispatch(setAddtoCard(item));
  }
};
