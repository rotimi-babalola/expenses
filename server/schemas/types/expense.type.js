import {
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import GraphQLDate from 'graphql-date';
import CategoryType from './category.type';

export default new GraphQLObjectType({
  name: 'ExpenseType',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of expense',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of expense',
    },
    category: {
      type: new GraphQLNonNull(CategoryType),
      description: 'Category of expense',
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'Amount of expense',
    },
    createdAt: {
      type: GraphQLDate,
      description: 'Date expense was created',
    },
    updatedAt: {
      type: GraphQLDate,
      description: 'Date expense was last updated',
    },
  },
});
