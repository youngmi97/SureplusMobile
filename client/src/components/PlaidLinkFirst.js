import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import { withStyles } from "@material-ui/styles";
//import Button from "@material-ui/core/Button";
import "../App.css";
import { getUser } from "../graphql/queries";
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

    //console.log("props", props.userData);

    this.state = {
      userData: props.userData,
      currentUser: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.callgetUser = this.callgetUser.bind(this);
  }

  async componentDidMount() {
    console.log("userData", this.props.userData.sub);
    const linkData = await API.graphql({
      query: getUser,
      variables: {
        id: this.props.userData.sub,
      },
    }).catch((error) => {
      console.log("ERR", error);
    });

    // Query for list of objects cannot be empty!
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
  // have to check by seeing if bankName as KEY exists in the plaidToken List of objects

  handleOnSuccess(public_token, metadata) {
    //this.props.setState();

    /**
     * TODO
     * 1. make plaidToken initialization in DB to list (all Chase)
     * 2. test plaidToken update with PlaidItem object
     * 3. PlaidLink prompts should check whether the plaidToken list is
     * (i) empty, (ii) single field or (iii) multiple
     * 4. check what is in metadata -> metadata.institution.name DONE
     * 5. check that metadata.institution.name is NOT already a key inside currentUser.plaidToken
     */
    console.log("METADATA", metadata);
    this.props.startTransactionCrawl();

    console.log("currentUser", this.state.currentUser);
    if (
      this.state.currentUser.plaidToken === undefined ||
      this.state.currentUser.plaidToken.length === 0
    ) {
      API.post("plaidhandler", "/auth/publictoken", {
        body: {
          public_token: public_token,
          userData: this.props.userData.sub,
        },
      })
        .then(async (response) => {
          console.log("PublicToken Response", response);
          API.graphql(
            graphqlOperation(updateUser, {
              input: {
                id: this.props.userData.sub,
                plaidToken: [
                  {
                    bankName: response.institution,
                    token: response.access_token,
                  },
                ],
              },
            })
          );

          await API.get("plaidhandler", "/transactions", {
            queryStringParameters: {
              token: response.access_token,
              userID: this.props.userData.sub,
            },
          })
            .then((res) => {
              console.log("Transactions Update Successful!");

              //HERE!
              console.log("transactions", res.transactions);
              this.props.setState();
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
      //change this to fetch the value for the key of metadata.institution.name

      API.get("plaidhandler", "/transactions", {
        queryStringParameters: {
          token: this.state.currentUser.plaidToken[0].token,
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
          this.props.setState();
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
        env="development"
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              position: "absolute",
              bottom: 48,
              margin: 0,
              padding: 0,
              height: "48px",
              borderRadius: "24px",
              background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
              color: "white",
              textTransform: "none",
              width: "calc(100% - 48px)",
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "white",

                fontWeight: 500,
                fontSize: "17px",
              }}
            >
              Link bank
            </Typography>
          </Button>
        </div>
      </PlaidLink>
    );
  }
}

export default withRouter(withStyles(useStyles)(PlaidLogin));
