import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";

import "../App.css";
import "../index.css";

import gql from "graphql-tag";
import AppBar from "../components/Appbar1";
import Main from "../components/MainWallet";
import BottomNavigation from "../components/BottomNavigation";
import { Link, useLocation } from "react-router-dom";
import { serviceByUserAccount, accountByUser } from "../graphql/queries";
import { a } from "aws-amplify";

function Wallet(props) {
  const location = useLocation();
  const [data1, setData1] = React.useState([]);

  const [value, setValue] = React.useState(location.param1);

  const [Name, setName] = React.useState("");

  async function callaccountByUser() {
    const accountData = await API.graphql({
      query: accountByUser,
      variables: {
        userID: props.userData.sub,
      },
    });
    setName(accountData.data.serviceByUser.items[location.param1].name);
    const subData = await API.graphql({
      query: serviceByUserAccount,
      variables: {
        userID: accountData.data.serviceByUser.items[location.param1].id,
      },
    });
    setData1(subData.serviceByUserAccount.items);
  }

  useEffect(() => {
    callaccountByUser();
  }, []);

  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      {/* Wallet */}
      <div
        style={{
          width: "100%",
          height: "5.73vh",
          backgroundColor: "white",
          boxShadow: "0px 0.347222px 0.347222px rgba(196, 196, 196, 0.75)",
        }}
      >
        <AppBar name={"cards"} />
      </div>
      <div
        style={{
          width: "100%",
          alignContent: "center",
        }}
      >
        <Main
          ind={value}
          setIndex={setValue}
          maxind={location.param2}
          data={data1}
          name={Name}
        />
      </div>
    </div>
  );
}

export default Wallet;
