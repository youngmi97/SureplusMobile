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
    <div style={{ flex: 1 }}>
      <div style={{ flex: 1, backgroundColor: "black" }}>
        <div>
          <div style={{ flex: 1, flexDirection: "row" }}>
            <Box
              alignItems="center"
              style={{
                margin: 0,
                padding: "4px 16px 4px 16px",
                height: "5.72vh",
              }}
            >
              <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
                <Button
                  onClick={() => setShow(!show)}
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    alt="name"
                    src="ProfileIcon.png"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>

              <Box
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                <Button
                  component={Link}
                  to="/Notification"
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="/Icons[32]/Type=Notifications.svg"
                    alt="name"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>
            </Box>
          </div>
        </div>
        <div
          position="fixed"
          style={{
            width: "100%",
            height: "5.73vh",
            marginTop: "1.56vh",
          }}
        >
          <ToolBar value={ind} setValue={setIndex} />
        </div>
        <div
          position="fixed"
          style={{
            width: "100%",
            alignContent: "center",
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
        <BottomNavigation value={value} setValue={setValue} />
        <CustomDrawer userData={userData} show={show}></CustomDrawer>
      </div>
    </div>
  );
}

export default Report;
