import React, { useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Helmet from "react-helmet";
import { isToday } from "date-fns";

import { Typography, Box, Grid } from "@material-ui/core";

function renderDay(day, selected, cards) {
  const date = day.getDate();
  const today = isToday(day);

  const dateStyle = {
    position: "absolute",
    height: 37,
    width: "13vw",
    fontSize: 12,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  };
  const dateStyle2 = {
    position: "absolute",
    height: 37,
    width: "13vw",
    fontSize: 12,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
  const dateStyle3 = {
    position: "absolute",
    height: 37,
    width: "13vw",
    fontSize: 12,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  };

  return (
    <div
      style={{
        borderWidth: 10,
        borderColor: "black",
        height: "5.98vh",
        width: "13vw",
        padding: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          borderWidth: 10,
          borderColor: "black",
          height: 32,
          width: "13vw",

          padding: 0,
          position: "relative",
        }}
      >
        <div>
          {day == selected.toString() ? (
            <div>
              <div style={dateStyle3}>
                <div
                  style={{
                    backgroundColor: "#7610EB",
                    borderRadius: "100%",
                    width: 27,
                    height: 27,
                    color: "white",
                    fontWeight: 700,
                    fontSize: 12,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {date}
                </div>
              </div>
              <Box>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  style={{ margin: 0, padding: 0, paddingTop: 28 }}
                >
                  {cards[date] &&
                    cards[date].map((name, i) => (
                      <Grid item xs={3}>
                        <Typography
                          style={{
                            color: "#C8C7CC",
                            margin: 0,
                            padding: 0,

                            fontSize: 9,
                          }}
                        >
                          {cards[date]}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </div>
          ) : (
            <div>
              {(() => {
                if (date in cards) {
                  return (
                    <div>
                      <div style={dateStyle}>{date}</div>
                      <Box>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          position="relative"
                          style={{
                            margin: 0,
                            padding: 0,
                            paddingTop: 28,
                          }}
                        >
                          {cards[date] &&
                            cards[date].map((name, i) => (
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    color: "#black",
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 9,
                                  }}
                                >
                                  {cards[date]}
                                </Typography>
                              </Grid>
                            ))}
                        </Grid>
                      </Box>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <div style={dateStyle2}>{date}</div>
                      <Box>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          position="relative"
                          style={{
                            margin: 0,
                            padding: 0,
                            paddingTop: 28,
                          }}
                        >
                          {cards[date] &&
                            cards[date].map((name, i) => (
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    color: "#black",
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 9,
                                  }}
                                >
                                  {cards[date]}
                                </Typography>
                              </Grid>
                            ))}
                        </Grid>
                      </Box>
                    </div>
                  );
                }
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Example(props) {
  const date = props.selected ? props.selected : 0;
  console.log("selected", props.selected);
  const handleDayClick = (day, { selected }) => {
    props.setSelected(selected ? undefined : day);
  };

  return (
    <div>
      <Helmet>
        <style>{`
        .DayPicker-wrapper {
          outline: none;
        }
          .DayPicker-Day {
            display: table-cell;
            padding: 0px;
            outline: none;
            border-radius: 0px;
            margin:0px;
            border: 0px;
            vertical-align: top;
            background-color:#FFFFFF;
            text-align: center;
            color:#666666;
            width: 40px;
            margin: 0px;
          }
          .DayPicker-Day--today  {
            display: table-cell;
            padding: 0px;
            border-radius: 0px;
            margin:0px;
            border: 0px;
            font-weight:500;
            vertical-align: top;
            background-color:#FFFFFF;
            text-align: center;
            color:#666666;
            width: 40px;
            margin: 0px;
          }

          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
            display: table-cell;
            padding: 0px;
            border-radius: 0px;
            margin:0px;
            background-color:#FFFFFF;
            border: 0px;
            vertical-align: top;
            
            text-align: center;
            height: 45px;
            width: 40px;
            margin: 0px;
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{
            background-color:#DFDFDF;
          }
          .DayPicker-Weekday{
            color: Black;
          }
          .DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background-color: #ffffff;
}
.DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
  background-color: #ffffff;
}
  
}
          
          `}</style>
      </Helmet>
      <DayPicker
        canChangeMonth={false}
        selectedDays={props.selected}
        onDayClick={handleDayClick}
        weekdaysShort={["S", "M", "T", "W", "T", "F", "S"]}
        captionElement="None"
        renderDay={(day) => renderDay(day, date, props.cards)}
      />
    </div>
  );
}
