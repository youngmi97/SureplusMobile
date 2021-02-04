import React from "react";

import "../App.css";
import "../index.css";

import gql from "graphql-tag";
import AppBar from "../components/Appbar1";
import Main from "../components/MainWallet";
import BottomNavigation from "../components/BottomNavigation";
import { Link, useLocation } from "react-router-dom";
import { serviceByUserAccount, accountByUser } from "../graphql/queries";

function Wallet(props) {
  const location = useLocation();
  const [Name, setName] = React.useState("");
  try {
    props.client
      .query({
        query: gql(accountByUser),

        variables: { userID: props.userData.sub },
      })
      .then(({ data }) => {
        setName(data.accountByUser.items[location.param1].name);
        try {
          props.client
            .query({
              query: gql(serviceByUserAccount),

              variables: {
                accountID: data.accountByUser.items[location.param1].id,
              },
            })
            .then(({ data }) => {
              setData1(data.serviceByUserAccount.items);
            });
        } catch (e) {
          console.log("query error", e);
        }
      });
  } catch (e) {
    console.log("query error", e);
  }

  const [data1, setData1] = React.useState([]);

  const [value, setValue] = React.useState(location.param1);
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
