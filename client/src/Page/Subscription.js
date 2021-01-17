import React from "react";

import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainSubscribe";

import BottomNavigation from "../components/BottomNavigation";

function Subscription() {
  const [value, setValue] = React.useState(1);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "11.4vh",
          backgroundColor: "white",
        }}
      >
        <AppBar
          Text={"Subscriptions"}
          Tab1="List"
          Tab2="Calendar"
          Link="Subscription"
          state={0}
        />
      </div>
      <div
        style={{
          width: "100%",

          alignContent: "center",
        }}
      >
        <Main />
      </div>
      <BottomNavigation value={value} setValue={setValue} />
    </div>
  );
}

export default Subscription;
