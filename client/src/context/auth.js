import React, { useReducer, createContext, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  authState: null,
  subscriptions: [],
  onesub: null,
  backlink: null,
  loading: true,
  link: false,
  openbottom: false,
});

const localState = JSON.parse(localStorage.getItem("info"));

// let reducer = (info, newInfo) => {
//   if (newInfo === null) {
//     localStorage.removeItem("info");
//     return initialState;
//   }
//   return { ...info, ...newInfo };
// };

function authReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
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
    case "SET_ONESUB":
      return {
        ...state,
        onesub: action.payload,
      };
    case "SET_BACKLINK":
      return {
        ...state,
        backlink: action.payload,
      };
    case "SET_LINK":
      return {
        ...state,
        link: action.payload,
      };
    case "SET_OPENBOTTOM":
      return {
        ...state,
        openbottom: action.payload,
      };

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(
    authReducer,
    localState || {
      user: null,
      authState: null,
      subscriptions: [],
      onesub: null,
      loading: true,
      backlink: null,
      link: false,
      openbottom: false,
    }
  );

  function setUser(user) {
    console.log("Setting User");
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }
  function setLoading(loading) {
    console.log("Setting User");
    dispatch({
      type: "SET_LOADING",
      payload: loading,
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
  function setOnesub(onesub) {
    dispatch({
      type: "SET_ONESUB",
      payload: onesub,
    });
  }
  function setBacklink(backlink) {
    dispatch({
      type: "SET_BACKLINK",
      payload: backlink,
    });
  }
  function setLink(link) {
    dispatch({
      type: "SET_LINK",
      payload: link,
    });
  }
  function setOpenbottom(openbottom) {
    dispatch({
      type: "SET_OPENBOTTOM",
      payload: openbottom,
    });
  }
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, [state]);

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
        onesub: state.onesub,
        setOnesub,
        backlink: state.backlink,
        setBacklink,
        loading: state.loading,
        setLoading,
        link: state.link,
        setLink,
        openbottom: state.openbottom,
        setOpenbottom,
      }}
      {...props}
    />
  );
}

// AuthContext is what will be used by components to access the "context"
// AuthProvider will be used to wrap all of the application, so that it has access to teh context functions
export { AuthContext, AuthProvider };
