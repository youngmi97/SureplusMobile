/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      userID
      serviceName
      createdAt
      updatedAt
      type
      content
      title
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        serviceName
        createdAt
        updatedAt
        type
        content
        title
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone_number
      plaidToken {
        bankName
        token
      }
      firebaseToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone_number
        plaidToken {
          bankName
          token
        }
        firebaseToken
        createdAt
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCards = /* GraphQL */ `
  query GetUserCards($id: ID!) {
    getUserCards(id: $id) {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const listUserCardss = /* GraphQL */ `
  query ListUserCardss(
    $filter: ModelUserCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCardss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        balance
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriptionServices = /* GraphQL */ `
  query GetSubscriptionServices($id: ID!) {
    getSubscriptionServices(id: $id) {
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
export const listSubscriptionServicess = /* GraphQL */ `
  query ListSubscriptionServicess(
    $filter: ModelSubscriptionServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionServicess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const notificationsByUser = /* GraphQL */ `
  query NotificationsByUser(
    $userID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    NotificationsByUser(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        serviceName
        createdAt
        updatedAt
        type
        content
        title
      }
      nextToken
    }
  }
`;
export const userByName = /* GraphQL */ `
  query UserByName(
    $name: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UserByName(
      name: $name
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phone_number
        plaidToken {
          bankName
          token
        }
        firebaseToken
        createdAt
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const accountByUser = /* GraphQL */ `
  query AccountByUser(
    $userID: String
    $balance: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountByUser(
      userID: $userID
      balance: $balance
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        name
        balance
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const serviceByUser = /* GraphQL */ `
  query ServiceByUser(
    $userID: String
    $lastDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    serviceByUser(
      userID: $userID
      lastDate: $lastDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const serviceByUserAccount = /* GraphQL */ `
  query ServiceByUserAccount(
    $accountID: String
    $lastDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    serviceByUserAccount(
      accountID: $accountID
      lastDate: $lastDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const serviceByUserAdded = /* GraphQL */ `
  query ServiceByUserAdded(
    $userID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    serviceByUserAdded(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
