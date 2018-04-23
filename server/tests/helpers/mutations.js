export const newExpenseMutation = {
  query: `
    mutation addExpense($input: ExpenseInput!) {
      AddExpense(input: $input) {
        id
        name
        category
        amount
      }
    }
  `,
  variables: {
    input: {
      name: 'Travel to Spain',
      category: 'TRAVEL',
      amount: 7000,
    },
  },
};

export const testExpenseMutation = {
  query: `
    mutation addExpense($input: ExpenseInput!) {
      AddExpense(input: $input) {
        id
        name
        category
        amount
      }
    }
  `,
  variables: {
    input: {
      name: 'Travel to Spain',
      category: 'TRAVEL',
      amount: 7000,
    },
  },
};

export const createNewEditExpenseMutation = (expenseId, { amount, name, category }) => {
  return {
    query: `
      mutation editExpense($id: String!, $update: EditExpense!) {
        EditExpense(expenseId: $id, fieldsToUpdate: $update) {
          id
          name
          amount
          category
        }
      }
    `,
    variables: {
      id: expenseId,
      update: {
        amount,
        name,
        category,
      },
    },
  };
};
