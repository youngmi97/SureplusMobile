import React from "react";
import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainCrew";
import BottomNavigation from "../components/BottomNavigation";

function Crew() {
  const [value, setValue] = React.useState(2);

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
          Text={"Groups"}
          Tab1="Created"
          Tab2="Joined"
          Link={"Crew"}
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

export default Crew;
