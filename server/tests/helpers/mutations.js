export const createNewExpenseMutation = (expenseName, amount, category = 'TRAVEL') => {
  return {
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
        name: expenseName,
        category,
        amount,
      },
    },
  };
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

export const deleteExpenseMutation = (expenseId) => {
  return {
    query: `
      mutation deleteExpense($id: String!) {
        DeleteExpense(expenseId: $id)
      }
    `,
    variables: {
      id: expenseId,
    },
  };
};
