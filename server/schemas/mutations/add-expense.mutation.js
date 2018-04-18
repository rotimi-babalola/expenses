import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLFloat
} from 'graphql';

import CategoryType from '../types/category.type';
import ExpenseType from '../types/expense.type';
import Expense from '../../models/expense.model';

const ExpenseInputType = new GraphQLInputObjectType({
  name: 'ExpenseInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: CategoryType },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});

export default {
  type: ExpenseType,
  args: {
    input: { type: new GraphQLNonNull(ExpenseInputType) },
  },
  async resolve(_, { input }) {
    try {
      const newExpense = await new Expense(input);
      return newExpense.save();
    } catch (error) {
      return error;
    }
  },
};
