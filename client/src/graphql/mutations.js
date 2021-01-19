/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccountPlaid = /* GraphQL */ `
  mutation CreateAccountPlaid(
    $input: CreateAccountPlaidInput!
    $condition: ModelAccountPlaidConditionInput
  ) {
    createAccountPlaid(input: $input, condition: $condition) {
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
export const updateAccountPlaid = /* GraphQL */ `
  mutation UpdateAccountPlaid(
    $input: UpdateAccountPlaidInput!
    $condition: ModelAccountPlaidConditionInput
  ) {
    updateAccountPlaid(input: $input, condition: $condition) {
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
export const deleteAccountPlaid = /* GraphQL */ `
  mutation DeleteAccountPlaid(
    $input: DeleteAccountPlaidInput!
    $condition: ModelAccountPlaidConditionInput
  ) {
    deleteAccountPlaid(input: $input, condition: $condition) {
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
export const createTransactionPlaid = /* GraphQL */ `
  mutation CreateTransactionPlaid(
    $input: CreateTransactionPlaidInput!
    $condition: ModelTransactionPlaidConditionInput
  ) {
    createTransactionPlaid(input: $input, condition: $condition) {
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
export const updateTransactionPlaid = /* GraphQL */ `
  mutation UpdateTransactionPlaid(
    $input: UpdateTransactionPlaidInput!
    $condition: ModelTransactionPlaidConditionInput
  ) {
    updateTransactionPlaid(input: $input, condition: $condition) {
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
export const deleteTransactionPlaid = /* GraphQL */ `
  mutation DeleteTransactionPlaid(
    $input: DeleteTransactionPlaidInput!
    $condition: ModelTransactionPlaidConditionInput
  ) {
    deleteTransactionPlaid(input: $input, condition: $condition) {
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
export const createServicePlaid = /* GraphQL */ `
  mutation CreateServicePlaid(
    $input: CreateServicePlaidInput!
    $condition: ModelServicePlaidConditionInput
  ) {
    createServicePlaid(input: $input, condition: $condition) {
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
export const updateServicePlaid = /* GraphQL */ `
  mutation UpdateServicePlaid(
    $input: UpdateServicePlaidInput!
    $condition: ModelServicePlaidConditionInput
  ) {
    updateServicePlaid(input: $input, condition: $condition) {
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
export const deleteServicePlaid = /* GraphQL */ `
  mutation DeleteServicePlaid(
    $input: DeleteServicePlaidInput!
    $condition: ModelServicePlaidConditionInput
  ) {
    deleteServicePlaid(input: $input, condition: $condition) {
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
