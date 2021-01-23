import React from "react";

import { Box } from "@material-ui/core";
import ListCard from "./ListCard";
import ListCard2 from "./ListCard2";
import "../App.css";

function Home() {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",
        }}
      >
        <Box
          style={{
            margin: 0,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <ListCard
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            text="이번 달 정기지출"
            second="205,000원"
            src="Recurring.svg"
          ></ListCard>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            text="완료된 정기 지출"
            second="12,000원"
            src="SFSymbol.svg"
          ></ListCard2>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            text="예정된 정기 지출"
            second="193,000원"
            src=""
          ></ListCard2>
          <ListCard
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            text="생활지출"
            second="2개"
            src=""
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            text="내 구독"
            second="15개"
            src=""
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="12px"
            r4="12px"
            text="내 크루"
            second="4개"
            src=""
          ></ListCard>
        </Box>
      </div>
    </div>
  );
}

export default Home;
