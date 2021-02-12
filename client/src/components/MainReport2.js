//Home, Wallet

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";
import gql from "graphql-tag";

import { accountByUser } from "../graphql/queries";
import ListCard2 from "./ListCard7";
import ListCard3 from "./ListCard8";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "#8A8A8F",
    padding: 0,

    fontSize: "12px",
    lineHeight: "17px",
    fontWeight: 500,
    margin: 0,

    paddingLeft: 20,
    paddingTop: 20,
  },
}));

function Subscribe(props) {
  const classes = useStyles();
  const [subscriptions, setSubscriptions] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const [num, setNum] = React.useState("");
<<<<<<< HEAD

  const { user } = useContext(AuthContext);

=======
  const open = props.open;
  const setOpen = props.setOpen;
>>>>>>> fb83dc23a9c49a7c3204559186d9b8e0841161e9
  async function callaccountByUser() {
    const subscriptionData = await API.graphql({
      query: accountByUser,
      variables: {
        userID: props.userData.sub,
      },
    });
    setSubscriptions(subscriptionData.data.accountByUser.items);
    setNum(subscriptionData.data.accountByUser.items.length);
    console.log(subscriptions);
  }

  useEffect(() => {
    console.log("user", user);
    callaccountByUser();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "79.0365vh",
        overflow: "auto",
        paddingBottom: 20,
      }}
    >
      {(() => {
        if (props.empty) {
          return <div></div>;
        } else {
          return (
            <div
              style={{
                marginTop: "2.956vh",
                marginRight: "24px",
                marginLeft: "24px",
                backgroundColor: "white",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                {/* <ListCard1
              r1="12px"
              r2="12px"
              r3="0px"
              r4="0px"
              text="This Week"
              second="$11.8"
              src="Recurring.svg"
            ></ListCard1> */}
                <Typography className={classes.ListItemSize2}>
                  {"Physical Cards " + num}
                </Typography>
                {subscriptions.map((array, index) => {
                  return (
                    <Button
                      component={Link}
                      to={{
                        pathname: "/Wallet",
                        param1: index,
                        param2: subscriptions.length,
                      }}
                      style={{ margin: 0, padding: 0, width: "100%" }}
                    >
                      <ListCard2
                        r1="0px"
                        r2="0px"
                        r3="0px"
                        r4="0px"
                        month="Mar"
                        day="4"
                        src="/PhysicalCards/Card.svg"
                        name={array.name}
                        plan="Master Card ･･34"
                        price={""}
                      ></ListCard2>
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        }
      })()}

      <div
        style={{
          marginTop: "2.0833vh",
          marginRight: "24px",
          marginLeft: "24px",

          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {(() => {
            if (props.empty) {
              return (
                <div style={{ paddingBottom: "20px" }}>
                  <Typography className={classes.ListItemSize2}>
                    To track your upcoming subscriptions,
                  </Typography>
                  <Typography
                    className={classes.ListItemSize2}
                    style={{ paddingTop: 0 }}
                  >
                    link your bank.
                  </Typography>

                  <Button
                    onClick={() => setOpen(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(168, 110, 235, 0.2)",
                      width: "70px",
                      color: "#7610EB",
                      borderRadius: "10px",
                      width: "120px",
                      padding: " 0px 16px 0px 8px",
                      height: "36px",
                      fontWeight: 600,
                      textTransform: "none",

                      marginLeft: 20,
                      marginTop: 15,
                    }}
                  >
                    <div>
                      <img
                        alt="name"
                        src="link.svg"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "14px",
                          height: "14px",
                          margin: 0,
                          marginRight: "4px",
                          padding: 0,
                        }}
                      ></img>
                    </div>
                    Link Bank
                  </Button>
                </div>
              );
            } else {
              return (
                <div>
                  <Typography className={classes.ListItemSize2}>
                    Linked Accounts 3
                  </Typography>
                  <ListCard3
                    r1="0px"
                    r2="0px"
                    r3="0px"
                    r4="0px"
                    month="Mar"
                    src="/Bank/CitiBank.svg"
                    name="$10000"
                    plan="Citi Bank"
                    day={1}
                  ></ListCard3>
                  <ListCard3
                    r1="0px"
                    r2="0px"
                    r3="0px"
                    r4="0px"
                    month="Mar"
                    src="/Bank/WellsFargo.svg"
                    name="$200"
                    plan="Wells Fargo"
                    day={0}
                  ></ListCard3>
                  <Button
                    component={Link}
                    to="/Accounts"
                    style={{
                      padding: 0,
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                      width: "100%",
                      backgroundColor: "white",
                      marginTop: 1,
                      height: "5.08vh",
                      textTransform: "none",
                      paddingLeft: 20,
                    }}
                  >
                    <Box
                      display="flex"
                      p={1}
                      style={{
                        margin: 0,
                        padding: 0,
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        p={1}
                        flexGrow={1}
                        style={{ margin: 0, padding: 0, textAlign: "left" }}
                      >
                        <Typography
                          style={{
                            fontSize: "14px",
                            color: "#000000",
                          }}
                        >
                          View All
                        </Typography>
                      </Box>

                      <Box
                        p={1}
                        style={{ margin: 0, padding: 0, marginRight: 16 }}
                      >
                        <img
                          alt="name"
                          src="chevron.right -s.svg"
                          style={{
                            width: "3vh",
                            height: "3vh",
                            margin: 0,
                            padding: 0,
                          }}
                        ></img>
                      </Box>
                    </Box>
                  </Button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
