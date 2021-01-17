import React from "react";

import { Box } from "@material-ui/core";
import ListCard from "./ListCard3";

import Calendar from "./calendar";
import "../App.css";

function Subscribe() {
  const [selected, setSelected] = React.useState(null);

  const cards = { 1: [2], 2: [5] };
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "77vh",
        overflow: "auto",
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
              <div>
                <Box
                  style={{
                    margin: 0,
                    marginTop: 16,
                    padding: 0,
                    filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  <ListCard
                    r1="12px"
                    r2="12px"
                    r3="12px"
                    r4="12px"
                    month="Mar"
                    day="4"
                    src="/Img/Aaptiv/[32].svg"
                    name="Aaptiv"
                    plan="$5.9 / Monthly"
                    share={0}
                  ></ListCard>
                </Box>
                <Box
                  style={{
                    margin: 0,
                    marginTop: 16,
                    padding: 0,
                    filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  <ListCard
                    r1="12px"
                    r2="12px"
                    r3="12px"
                    r4="12px"
                    month="Mar"
                    day="4"
                    src="/Img/AppleMusic/[32].svg"
                    name="AppleMusic"
                    plan="$5.9 / Monthly"
                    share={1}
                  ></ListCard>
                </Box>
                <Box
                  style={{
                    margin: 0,
                    marginTop: 16,
                    padding: 0,
                    filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  <ListCard
                    r1="12px"
                    r2="12px"
                    r3="0px"
                    r4="0px"
                    month="Dec"
                    day="4"
                    src="/Img/BarkBox/[32].svg"
                    name="BarkBox"
                    plan="$5.9 / Monthly"
                    share={1}
                  ></ListCard>
                  <ListCard
                    r1="0px"
                    r2="0px"
                    r3="0px"
                    r4="0px"
                    month="Dec"
                    day="6"
                    src="/Img/AppleMusic/[32].svg"
                    name="AppleMusic"
                    plan="$5.9 / Monthly"
                    share={1}
                  ></ListCard>
                  <ListCard
                    r1="0px"
                    r2="0px"
                    r3="12px"
                    r4="12px"
                    month="Dec"
                    day="12"
                    src="/Img/Avast/[32].svg"
                    name="Avast"
                    plan="$5.9 / Monthly"
                    share={1}
                  ></ListCard>
                </Box>
              </div>
            );
          } else if (selected.getDate() == 12) {
            return (
              <Box
                style={{
                  margin: 0,
                  marginTop: 16,
                  padding: 0,
                  filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                }}
              >
                <ListCard
                  r1="12px"
                  r2="12px"
                  r3="12px"
                  r4="12px"
                  month="Dec"
                  day="12"
                  src="/Img/Avast/[32].svg"
                  name="Avast"
                  plan="$5.9 / Monthly"
                  share={1}
                ></ListCard>
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
