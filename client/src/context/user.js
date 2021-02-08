import React, { useReducer, createContext } from "react";

const UserContext = createContext({
  user: null,
});

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

function UserProvider(props) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  function setUser(user) {
    console.log("Setting User: ", user);
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  //value is what will be passed down to components under the following context provider
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        setUser,
      }}
      {...props}
    />
  );
}

export { UserContext, UserProvider };
