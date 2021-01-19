/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccountPlaid = /* GraphQL */ `
  query GetAccountPlaid($userID: String!) {
    getAccountPlaid(userID: $userID) {
      id
      name
      userID
      transactions {
        items {
          id
          title
          accountID
          cost
          createdAt
          updatedAt
        }
        nextToken
      }
      services {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccountPlaids = /* GraphQL */ `
  query ListAccountPlaids(
    $userID: String
    $filter: ModelAccountPlaidFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccountPlaids(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        userID
        transactions {
          nextToken
        }
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransactionPlaid = /* GraphQL */ `
  query GetTransactionPlaid($id: ID!) {
    getTransactionPlaid(id: $id) {
      id
      title
      accountID
      cost
      account {
        id
        name
        userID
        transactions {
          nextToken
        }
        services {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTransactionPlaids = /* GraphQL */ `
  query ListTransactionPlaids(
    $filter: ModelTransactionPlaidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionPlaids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        accountID
        cost
        account {
          id
          name
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicePlaid = /* GraphQL */ `
  query GetServicePlaid($id: ID!) {
    getServicePlaid(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listServicePlaids = /* GraphQL */ `
  query ListServicePlaids(
    $filter: ModelServicePlaidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicePlaids(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
