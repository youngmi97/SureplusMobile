/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      phone_number
      plaidToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      phone_number
      plaidToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      phone_number
      plaidToken
      createdAt
      type
      updatedAt
    }
  }
`;
export const onCreateUserCards = /* GraphQL */ `
  subscription OnCreateUserCards {
    onCreateUserCards {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCards = /* GraphQL */ `
  subscription OnUpdateUserCards {
    onUpdateUserCards {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCards = /* GraphQL */ `
  subscription OnDeleteUserCards {
    onDeleteUserCards {
      id
      userID
      name
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubscriptionServices = /* GraphQL */ `
  subscription OnCreateSubscriptionServices {
    onCreateSubscriptionServices {
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
export const onUpdateSubscriptionServices = /* GraphQL */ `
  subscription OnUpdateSubscriptionServices {
    onUpdateSubscriptionServices {
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
export const onDeleteSubscriptionServices = /* GraphQL */ `
  subscription OnDeleteSubscriptionServices {
    onDeleteSubscriptionServices {
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
