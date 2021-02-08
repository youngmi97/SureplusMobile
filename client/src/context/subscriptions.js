import React, { useReducer, createContext } from "react";

const SubscriptionContext = createContext({
  subscriptions: [],
});

function subscriptionReducer(state, action) {
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

function SubscriptionProvider(props) {
  const [state, dispatch] = useReducer(subscriptionReducer, {
    authState: null,
    subscriptions: [],
  });

  // passes down to component tree
  function setSubscriptions(subscriptions) {
    console.log("Setting subscriptions: ", subscriptions);
    dispatch({
      type: "SET_SUBSCRIPTIONS",
      payload: subscriptions,
    });
  }

  //value is what will be passed down to components under the following context provider
  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions: state.subscriptions,
        setSubscriptions,
      }}
      {...props}
    />
  );
}

// AuthContext is what will be used by components to access the "context"
// AuthProvider will be used to wrap all of the application, so that it has access to teh context functions
export { SubscriptionContext, SubscriptionProvider };
