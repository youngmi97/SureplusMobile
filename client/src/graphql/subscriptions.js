/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccountPlaid = /* GraphQL */ `
  subscription OnCreateAccountPlaid {
    onCreateAccountPlaid {
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
export const onUpdateAccountPlaid = /* GraphQL */ `
  subscription OnUpdateAccountPlaid {
    onUpdateAccountPlaid {
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
export const onDeleteAccountPlaid = /* GraphQL */ `
  subscription OnDeleteAccountPlaid {
    onDeleteAccountPlaid {
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
export const onCreateTransactionPlaid = /* GraphQL */ `
  subscription OnCreateTransactionPlaid {
    onCreateTransactionPlaid {
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
export const onUpdateTransactionPlaid = /* GraphQL */ `
  subscription OnUpdateTransactionPlaid {
    onUpdateTransactionPlaid {
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
export const onDeleteTransactionPlaid = /* GraphQL */ `
  subscription OnDeleteTransactionPlaid {
    onDeleteTransactionPlaid {
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
export const onCreateServicePlaid = /* GraphQL */ `
  subscription OnCreateServicePlaid {
    onCreateServicePlaid {
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
export const onUpdateServicePlaid = /* GraphQL */ `
  subscription OnUpdateServicePlaid {
    onUpdateServicePlaid {
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
export const onDeleteServicePlaid = /* GraphQL */ `
  subscription OnDeleteServicePlaid {
    onDeleteServicePlaid {
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
