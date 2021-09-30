const initialState = {
  user: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.user,
      };
    case "CLEAR_USER":
      return initialState;
  }
  return state;
};
