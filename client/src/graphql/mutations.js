/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
      id
      userID
      serviceName
      createdAt
      type
      updatedAt
    }
  }
`;
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
      id
      userID
      serviceName
      createdAt
      type
      updatedAt
    }
  }
`;
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
      id
      userID
      serviceName
      createdAt
      type
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      phone_number
      plaidToken
      firebaseToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      phone_number
      plaidToken
      firebaseToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      phone_number
      plaidToken
      firebaseToken
      createdAt
      type
      updatedAt
    }
  }
`;
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
