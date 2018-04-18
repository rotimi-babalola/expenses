import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql';

import ExpenseType from './types/expense.type';
import Expense from '../models/expense.model';
import AddExpenseMutation from '../schemas/mutations/add-expense.mutation';

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
      async resolve(_, { id }) {
        try {
          if (id) {
            const expense = await Expense.findById(id).exec();
            return expense;
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
  }),
});

const ExpenseSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default ExpenseSchema;
