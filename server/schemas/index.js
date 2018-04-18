import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import ExpenseType from './types/expense.type';
import Expense from '../models/expense.model';

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
        } catch (err) {
          return err;
        }
      },
    },
  },
});

const ExpenseSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default ExpenseSchema;
