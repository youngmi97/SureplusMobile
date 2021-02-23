import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import { withStyles } from "@material-ui/styles";
//import Button from "@material-ui/core/Button";
import axios from "axios";
import "../App.css";
import { API, graphqlOperation } from "aws-amplify";
import { Button, Typography } from "@material-ui/core";

import { updateUser } from "../graphql/mutations";
import { withRouter } from "react-router-dom";

//plaid iframe id: plaid-link-iframe-1

const useStyles = (theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    minHeight: 332,
    maxHeight: 332,
    borderRadius: "10px",
  },
  ListItemSize5: {
    color: "#7610EB",
    borderColor: "white",
    outline: "none",
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
    marginLeft: "16px",
  },
  plaidWrapper: {
    display: "flex",
  },
});

class PlaidLogin extends Component {
  //declaring contextType should behave the same as useContext API for functional components

  constructor(props, context) {
    super(props, context);

    console.log("props", props.userData);

    this.state = {
      transactions: [],
      accounts: [],
      userData: props.userData,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
  }

  //axios base url : https://j99vqavepi.execute-api.us-east-2.amazonaws.com/dev
  //axios local base url : http://localhost:5000

  handleOnSuccess(public_token, metadata) {
    axios
      .post(
        "https://j99vqavepi.execute-api.us-east-2.amazonaws.com/dev/auth/public_token",
        {
          public_token: public_token,
          userData: this.props.userData.sub,
        }
      )
      .then(async (response) => {
        console.log("access token", response.data.access_token);

        const plaidTokenUpdated = await API.graphql(
          graphqlOperation(updateUser, {
            input: {
              id: this.props.userData.sub,
              plaidToken: response.data.access_token,
            },
          })
        );
        console.log("plaidTokenUpdated", plaidTokenUpdated);

        //API.graphql(graphqlOperation(createTodo, { input: todo }));

        axios
          .get(
            "https://j99vqavepi.execute-api.us-east-2.amazonaws.com/dev/transactions"
          )
          .then((res) => {
            this.setState({ transactions: res.data.transactions.transactions });
            this.setState({ accounts: res.data.transactions.accounts });

            console.log("accountsCount", this.state.accounts.length);
            console.log("accounts", this.state.accounts);
            console.log("transactionsCount", this.state.transactions.length);
          });
      });
    console.log("handleOnSuccess");
  }

  handleOnExit() {
    // handle the case when your user exits Link
    console.log("User has exited plaid link prompt");
  }

  handleClick(res) {
    console.log("Handle Click");
  }

  // 1. Have to call Mutation from PlaidLink Component after the access_token state has been set
  // 2. Have to call the updateAccessToken function in one of the events --> not working well

  render() {
    const { classes } = this.props;
    return (
      <PlaidLink
        clientName="React Plaid Setup"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="d74564d1fca97dd00ec3f9f421eae9"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}
        style={{
          margin: 0,
          padding: 0,
          border: "none",
        }}
      >
        <img
          alt="name"
          src="Icons[32]/Type=Add.svg"
          style={{ width: "3.8vh", height: "3.8vh" }}
        ></img>
      </PlaidLink>
    );
  }
}

export default withRouter(withStyles(useStyles)(PlaidLogin));
