import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import {} from "@material-ui/core/styles";
import { accountByUser, getUser } from "../graphql/queries";
import { API } from "aws-amplify";
import ListCard3 from "./ListCard8";

import "../App.css";

function Subscribe() {
  const { user, bankAccounts } = useContext(AuthContext);
  const [bankName, setBankName] = React.useState(
    "/Img/" + "Placeholder" + "/[32].svg"
  );

  async function callUserInfo() {
    const userInfo = await API.graphql({
      query: getUser,
      variables: {
        id: user.sub,
      },
    });
    //console.log("BankAccounts: ", bankAccountData);
    // console.log("userInfo: ", userInfo);
    var bankName = userInfo.data.getUser.plaidToken[0].bankName || "Chase";
    bankName = bankName.replace(/\s/g, "");

    var image = new Image();
    const tmpBankAsset = "/Bank/" + bankName + ".svg";

    image.src = tmpBankAsset;
    if (image.width != 0) {
      setBankName(tmpBankAsset);
    }
  }

  useEffect(async () => {
    await callUserInfo();
  }, []);

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

          {/* <ListCard3
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
          ></ListCard3> */}
          {bankAccounts.map((element, index) => {
            return (
              <div>
                <ListCard3
                  r1="12px"
                  r2="12px"
                  r3="12px"
                  r4="12px"
                  month="Mar"
                  src={bankName}
                  name={"$" + element.balance}
                  plan={element.name}
                  day={1}
                ></ListCard3>
                <div style={{ height: 16 }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
