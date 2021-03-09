import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import { withStyles } from "@material-ui/styles";
//import Button from "@material-ui/core/Button";
import "../App.css";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";

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
      currentUser: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.callgetUser = this.callgetUser.bind(this);
  }

  async componentDidMount() {
    const linkData = await API.graphql({
      query: getUser,
      variables: {
        id: this.props.userData.sub,
      },
    });

    this.setState({ currentUser: linkData.data.getUser });
  }

  async callgetUser() {
    const linkData = await API.graphql({
      query: getUser,
      variables: {
        id: this.props.userData.sub,
      },
    });

    return linkData.data.getUser;
  }

  handleOnSuccess(public_token, metadata) {
    this.props.setState();

    console.log("currentUser", this.state.currentUser);
    if (
      this.state.currentUser.plaidToken === "" ||
      this.state.currentUser.plaidToken === null
    ) {
      API.post("plaidhandler", "/auth/publictoken", {
        body: {
          public_token: public_token,
          userData: this.props.userData.sub,
        },
      })
        .then(async (response) => {
          API.graphql(
            graphqlOperation(updateUser, {
              input: {
                id: this.props.userData.sub,
                plaidToken: response.access_token,
              },
            })
          );

          await API.get("plaidhandler", "/transactions", {})
            .then((res) => {
              this.setState({ transactions: res.transactions.transactions });
              this.setState({ accounts: res.transactions.accounts });

              console.log("Transactions Update Successful!");

              // call an updater function that will update the services from recently extracted transactions
              // type: PUT
              // params: userID
              // process: gql mutation createSubscriptionServices
              // return: total # of subscriptions
              console.log("transactions", res.transactions);
            })
            .catch((error) => {
              console.log("transactions err", error);
            });
        })
        .catch((err) => {
          console.log("auth err", err);
        });
      console.log("handleOnSuccess NEW TOKEN");
    } else {
      //plaidToken alredy exists

      API.get("plaidhandler", "/transactions", {
        queryStringParameters: {
          token: this.state.currentUser.plaidToken,
          userID: this.props.userData.sub,
        },
      })
        .then((res) => {
          this.setState({ transactions: res.transactions.transactions });
          this.setState({ accounts: res.transactions.accounts });

          console.log("Transactions Update Successful!");

          // call an updater function that will update the services from recently extracted transactions
          // type: PUT
          // params: userID
          // process: gql mutation createSubscriptionServices
          // return: total # of subscriptions
          console.log("transactions", res.transactions);
        })
        .catch((err) => {
          console.log("transaction err", err);
        });
      console.log("handleOnSuccess EXISTING TOKEN");
    }
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
