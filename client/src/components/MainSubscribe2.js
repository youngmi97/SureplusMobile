//Calendar View
import React from "react";

import { Box, Button } from "@material-ui/core";
import ListCard from "./ListCard3";

import Calendar from "./calendar";
import { Link } from "react-router-dom";
import "../App.css";

function Subscribe(props) {
  const shortmonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [selected, setSelected] = React.useState(null);
  const data = props.list;

  const dayindex = {};

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.lastDate in dayindex) {
      dayindex[element.lastDate].push(element);
    } else {
      dayindex[element.lastDate] = [element];
    }
  }

  const cards = {};
  const localkey = {};
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const num = Number(element.lastDate.slice(8, 10));
    localkey[num] = element.lastDate;
    if (num in cards) {
      cards[num] = [cards[num][0] + Number(element.cost)];
    } else {
      cards[num] = [Number(element.cost)];
    }
  }

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",

        maxHeight: "73.3365vh",
        overflow: "auto",
        paddingBottom: 24,
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "45vh",
          backgroundColor: "#ffffff",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Calendar
          selected={selected}
          cards={cards}
          setSelected={(a) => setSelected(a)}
        />
      </div>
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",
        }}
      >
        {(() => {
          if (selected == null) {
            return (
              <div
                style={{
                  marginTop: "2.956vh",
                }}
              >
                {Object.keys(dayindex).map(function (key, index) {
                  return (
                    <Box
                      style={{
                        margin: 0,
                        marginTop: 16,
                        padding: 0,
                        backgroundColor: "white",
                        borderRadius: "12px",
                        filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                      }}
                    >
                      {dayindex[key].map((array1, index1) => {
                        return (
                          <Button
                            component={Link}
                            style={{ margin: 0, padding: 0, width: "100%" }}
                            to={{
                              pathname: "/OneSub",
                              list: array1,
                              link: "/Subscription2",
                            }}
                          >
                            <ListCard
                              r1="0px"
                              r2="0px"
                              r3="0px"
                              r4="0px"
                              month={shortmonth[new Date(key).getMonth()]}
                              day={new Date(key).getDate()}
                              src={"/Img/" + array1.name + "/[32].svg"}
                              name={array1.name}
                              plan={"$" + array1.cost + " / " + array1.period}
                              share={0}
                            ></ListCard>
                          </Button>
                        );
                      })}
                    </Box>
                  );
                })}
              </div>
            );
          } else if (selected.getDate() in cards) {
            return (
              <Box
                style={{
                  margin: 0,
                  marginTop: 16,
                  padding: 0,
                  backgroundColor: "white",
                  borderRadius: "12px",
                  filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                }}
              >
                {dayindex[localkey[selected.getDate()]].map(
                  (array1, index1) => {
                    const key = localkey[selected.getDate()];
                    return (
                      <Button
                        component={Link}
                        style={{ margin: 0, padding: 0, width: "100%" }}
                        to={{
                          pathname: "/OneSub",
                          list: array1,
                          link: "/Subscription2",
                        }}
                      >
                        <ListCard
                          r1="0px"
                          r2="0px"
                          r3="0px"
                          r4="0px"
                          month={shortmonth[new Date(key).getMonth()]}
                          day={new Date(key).getDate()}
                          src={"/Img/" + array1.name + "/[32].svg"}
                          name={array1.name}
                          plan={"$" + array1.cost + " / " + array1.period}
                          share={0}
                        ></ListCard>
                      </Button>
                    );
                  }
                )}
              </Box>
            );
          } else {
            return <div />;
          }
        })()}
      </div>
    </div>
  );
}

export default Subscribe;
