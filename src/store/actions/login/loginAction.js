export const setUserDetails = (user) => {
  return {
    type: "USER",
    user,
  };
};

export const setClearDetails = () => {
  return {
    type: "CLEAR_USER",
  };
};
