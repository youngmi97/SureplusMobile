import React, { useContext, useState } from "react";
import "../App.css";

import gql from "graphql-tag";

import { serviceByUser } from "../graphql/queries";

import ToolBar from "../components/ToolBar";
import Main from "../components/MainReport";
import Main2 from "../components/MainReport2";
import BottomNavigation from "../components/BottomNavigation";

import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Box, Button } from "@material-ui/core";
import CustomDrawer from "../components/Drawer";
//import { AuthContext } from "../context/auth";

export function Report(props) {
  const location = useLocation();

  var num = 0;
  if (location.param1 != null) {
    num = 1;
  }

  //console.log("Report Client", props.client);

  const [value, setValue] = React.useState(0);
  const [ind, setIndex] = React.useState(num);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = React.useState([]);
  //const context = useContext(AuthContext);
  //props.userData.sub --> userID used for query

  try {
    props.client
      .query({
        query: gql(serviceByUser),
        variables: { userID: props.userData.sub },
      })
      .then(({ data }) => {
        setUserData(data.serviceByUser.items);
      });
  } catch (e) {
    console.log("query error", e);
  }

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <div>
          <Button style={{ flex: 1 }} onClick={() => setShow(!show)}>
            <img
              alt="name"
              src="ProfileIcon.png"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </div>
        <div>
          <Button style={{ flex: 1 }} component={Link} to="/Notification">
            <img
              src="/Icons[32]/Type=Notifications.svg"
              alt="name"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
      >
        <ToolBar value={ind} setValue={setIndex} />
      </div>
      <div
        style={{
          flex: 1,
          alignContent: "center",
          backgroundColor: "red",
        }}
      >
        {(() => {
          if (ind == 0) {
            return <Main list={userData} />;
          } else {
            return <Main2 list={userData} />;
          }
        })()}
      </div>
      <div style={{ flex: 1 }}>
        <BottomNavigation value={value} setValue={setValue} />
      </div>
      {/* <CustomDrawer userData={userData} show={show}></CustomDrawer> */}
    </div>
  );
}

export default Report;
