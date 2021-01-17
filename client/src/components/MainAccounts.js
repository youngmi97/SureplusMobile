import React from "react";
import {} from "@material-ui/core/styles";

import ListCard3 from "./ListCard8";

import "../App.css";

function Subscribe() {
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
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",

          borderRadius: "12px",
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

          <ListCard3
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="Mar"
            src="/Img/Aaptiv/[32].svg"
            name="$10000"
            plan="Citi Bank"
            day={1}
          ></ListCard3>
          <div style={{ height: 16 }}></div>
          <ListCard3
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="Mar"
            src="/Img/AppleMusic/[32].svg"
            name="$200"
            plan="Wells Fargo"
            day={0}
          ></ListCard3>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
