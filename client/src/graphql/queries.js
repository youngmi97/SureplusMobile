/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
