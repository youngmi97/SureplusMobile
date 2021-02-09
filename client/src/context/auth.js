import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
  user: null,
  authState: null,
  subscriptions: [],
});

function authReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_AUTHSTATE":
      return {
        ...state,
        authState: action.payload,
      };
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
    authState: null,
    subscriptions: [],
  });

  function setUser(user) {
    console.log("Setting User");
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  function setAuthState(authState) {
    console.log("Setting auth state");
    dispatch({
      type: "SET_AUTHSTATE",
      payload: authState,
    });
  }

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
        setUser,
        subscriptions: state.subscriptions,
        setSubscriptions,
        authState: state.authState,
        setAuthState,
      }}
      {...props}
    />
  );
}

// AuthContext is what will be used by components to access the "context"
// AuthProvider will be used to wrap all of the application, so that it has access to teh context functions
export { AuthContext, AuthProvider };
