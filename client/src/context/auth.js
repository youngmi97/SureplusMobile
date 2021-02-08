import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
  authState: null,
});

function authReducer(state, action) {
  switch (action.type) {
    case "SET_AUTHSTATE":
      return {
        ...state,
        authState: action.payload,
      };

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, {
    authState: null,
  });

  function setAuthState(authState) {
    console.log("Setting auth state", authState);
    dispatch({
      type: "SET_AUTHSTATE",
      payload: authState,
    });
  }

  //value is what will be passed down to components under the following context provider
  return (
    <AuthContext.Provider
      value={{
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
