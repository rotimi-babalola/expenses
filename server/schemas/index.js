import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';
import ExpenseType from './types/expense.type';
import Expense from '../models/expense.model';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query for expenses API',
  fields: {
    Expense: {
      type: new GraphQLList(ExpenseType),
      description: 'Expense',
      resolve: () => {
        return Expense.find({}).exec();
      },
    },
  },
});

const ExpenseSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default ExpenseSchema;
