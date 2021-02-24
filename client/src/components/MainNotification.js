import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Divider } from "@material-ui/core";
import ListCard from "./ListCard9";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "black",
    padding: 0,
    fontWeight: 500,
    fontSize: "14px",
    margin: 0,
    marginTop: 1,
  },
}));

function Subscribe(props) {
  const classes = useStyles();
  const data = props.data;
  const today = new Date();
  const real_li = [];
  const readlist = props.readlist;
  if (readlist) {
    const real_readlist = () => {
      const result = [];
      for (let index = 0; index < readlist.length; index++) {
        const element = readlist[index].id;
        result.push(element);
      }
      return result;
    };
    const real_li = real_readlist();
  }

  console.log(real_li);
  function get_date(today, day) {
    day.setMonth(day.getMonth() + 1);
    return parseInt((day - today) / 86400000);
  }

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "77vh",
        overflow: "auto",

        paddingBottom: 10,
      }}
    >
      {(() => {
        if (props.empty == true) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "73.3365vh",
              }}
            >
              <Typography style={{ margin: 0, padding: 0, fontSize: 50 }}>
                🙏
              </Typography>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}
              >
                No unread notifications!
              </Typography>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}
              >
                High Five!
              </Typography>
            </div>
          );
        } else {
          return (
            <div style={{ paddingLeft: 16, paddingRight: 16 }}>
              <div
                style={{
                  marginTop: 16,
                  borderRadius: "12px",
                  backgroundColor: "white",
                }}
              >
                {props.data.map((array, index) => {
                  return (
                    <div>
                      {(() => {
                        if (index != 0) {
                          return (
                            <div>
                              <Divider />
                            </div>
                          );
                        }
                      })()}

                      <ListCard
                        r1="12px"
                        r2="12px"
                        r3="12px"
                        r4="12px"
                        month="Mar"
                        id={array.id}
                        day={-get_date(today, new Date(array.createdAt))}
                        src={"/Img/" + array.serviceName + "/[32].svg"}
                        name={array.title}
                        plan={array.content}
                        price="$ 5.9"
                        opacity={real_li}
                      ></ListCard>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Subscribe;
