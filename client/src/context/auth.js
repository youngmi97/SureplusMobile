import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
  user: null,
  subscriptions: [],
});

function authReducer(state, action) {
  switch (action.type) {
    case "SET_SUBSCRIPTIONS":
      return {
        ...state,
        subscriptions: action.payload,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    subscriptions: [],
  });

  // authReducer will listen to any dispatch actions
  // passes down to component tree
  function setSubscriptions(subscriptions) {
    dispatch({
      type: "SET_SUBSCRIPTIONS",
      payload: subscriptions,
    });
  }

  //value is what will be passed down to components under the following context provider
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        subscriptions: state.subscriptions,
        setSubscriptions,
      }}
      {...props}
    />
  );
}

// AuthContext is what will be used by components to access the "context"
// AuthProvider will be used to wrap all of the application, so that it has access to teh context functions
export { AuthContext, AuthProvider };
