import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import Expense from '../../models/expense.model';

export default {
  type: GraphQLString,
  args: {
    expenseId: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (obj, { expenseId }) => {
    try {
      const deleted = await Expense.findByIdAndRemove(expenseId).exec();
      if (deleted) {
        return 'Successfully deleted!';
      }
      throw new Error('Unable to delete');
    } catch (error) {
      return error;
    }
  },
};
