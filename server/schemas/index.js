import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';
import ExpenseType from './types/expense.types';
import Expense from '../models/expense.model';

const RootQueryType = new GraphQLObjectType({
  name: 'Root Query',
  description: 'Root Query for expenses API',
  fields: {
    User: {
      type: new GraphQLList(ExpenseType),
      description: 'Expense',
    },
    resolve: () => {
      return Expense.find({}).exec();
    },
  },
});

const ExpenseSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default ExpenseSchema;
