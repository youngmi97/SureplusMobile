/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserCards = /* GraphQL */ `
  mutation CreateUserCards(
    $input: CreateUserCardsInput!
    $condition: ModelUserCardsConditionInput
  ) {
    createUserCards(input: $input, condition: $condition) {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const updateUserCards = /* GraphQL */ `
  mutation UpdateUserCards(
    $input: UpdateUserCardsInput!
    $condition: ModelUserCardsConditionInput
  ) {
    updateUserCards(input: $input, condition: $condition) {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserCards = /* GraphQL */ `
  mutation DeleteUserCards(
    $input: DeleteUserCardsInput!
    $condition: ModelUserCardsConditionInput
  ) {
    deleteUserCards(input: $input, condition: $condition) {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const createSubscriptionServices = /* GraphQL */ `
  mutation CreateSubscriptionServices(
    $input: CreateSubscriptionServicesInput!
    $condition: ModelSubscriptionServicesConditionInput
  ) {
    createSubscriptionServices(input: $input, condition: $condition) {
      id
      userID
      transactionID
      accountID
      name
      cost
      period
      firstAddedDate
      lastDate
      category
      source
      createdAt
      updatedAt
    }
  }
`;
export const updateSubscriptionServices = /* GraphQL */ `
  mutation UpdateSubscriptionServices(
    $input: UpdateSubscriptionServicesInput!
    $condition: ModelSubscriptionServicesConditionInput
  ) {
    updateSubscriptionServices(input: $input, condition: $condition) {
      id
      userID
      transactionID
      accountID
      name
      cost
      period
      firstAddedDate
      lastDate
      category
      source
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubscriptionServices = /* GraphQL */ `
  mutation DeleteSubscriptionServices(
    $input: DeleteSubscriptionServicesInput!
    $condition: ModelSubscriptionServicesConditionInput
  ) {
    deleteSubscriptionServices(input: $input, condition: $condition) {
      id
      userID
      transactionID
      accountID
      name
      cost
      period
      firstAddedDate
      lastDate
      category
      source
      createdAt
      updatedAt
    }
  }
`;
