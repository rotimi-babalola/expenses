import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql';

import ExpenseType from './types/expense.type';
import Expense from '../models/expense.model';
import AddExpenseMutation from '../schemas/mutations/add-expense.mutation';
import EditExpenseMutation from '../schemas/mutations/edit-expense.mutation';
import DeleteExpenseMutation from '../schemas/mutations/delete-expense.mutation';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query for expenses API',
  fields: {
    Expense: {
      type: new GraphQLList(ExpenseType),
      description: 'Expense',
      args: {
        id: {
          name: 'expenseId',
          type: GraphQLString,
        },
      },
      resolve: async (_, { id }) => {
        try {
          if (id) {
            const expense = await Expense.findById(id).exec();
            // putting this in an array because we are expecting an array
            // in the Root query
            return [expense];
          }
          const expenses = await Expense.find({}).exec();
          return expenses;
        } catch (error) {
          return error;
        }
      },
    },
  },
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddExpense: AddExpenseMutation,
    EditExpense: EditExpenseMutation,
    DeleteExpense: DeleteExpenseMutation,
  }),
});

const ExpenseSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default ExpenseSchema;
