import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

import CategoryType from '../types/category.type';
import ExpenseType from '../types/expense.type';
import Expense from '../../models/expense.model';

const EditExpenseType = new GraphQLInputObjectType({
  name: 'EditExpense',
  fields: {
    name: { type: GraphQLString },
    category: { type: CategoryType },
    amount: { type: GraphQLFloat },
  },
});

export default {
  type: new GraphQLNonNull(ExpenseType),
  args: {
    expenseId: { type: new GraphQLNonNull(GraphQLString) },
    fieldsToUpdate: { type: new GraphQLNonNull(EditExpenseType) },
  },
  resolve: async (_, { expenseId, fieldsToUpdate }) => {
    try {
      const updated = await Expense.findByIdAndUpdate(expenseId, fieldsToUpdate, { new: true }).exec();
      // ensure updated is not null or undefined
      if (updated) {
        return updated;
      }
      throw new Error('Unable to update');
    } catch (error) {
      return error;
    }
  },
};
