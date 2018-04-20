/* eslint no-undef: 0 */
const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

import { expect } from 'chai';
import GraphQLDate from 'graphql-date';

import ExpenseType from '../../schemas/types/expense.type';
import CategoryType from '../../schemas/types/category.type';

describe('Expense Type', () => {
  it('should have an id field of type ID', () => {
    expect(ExpenseType.getFields()).to.have.property('id');
    expect(ExpenseType.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a non null name field of type string', () => {
    expect(ExpenseType.getFields()).to.have.property('name');
    expect(ExpenseType.getFields().name.type).to.deep.equals(new GraphQLNonNull(GraphQLString));
  });

  it('should have a non null category type field', () => {
    expect(ExpenseType.getFields()).to.have.property('category');
    expect(ExpenseType.getFields().category.type).to.deep.equals(new GraphQLNonNull(CategoryType));
  });

  it('should have a non null amount field of type float', () => {
    expect(ExpenseType.getFields()).to.have.property('amount');
    expect(ExpenseType.getFields().amount.type).to.deep.equals(new GraphQLNonNull(GraphQLFloat));
  });

  it('should have a createdAt field of type GraphQLDate', () => {
    expect(ExpenseType.getFields()).to.have.property('createdAt');
    expect(ExpenseType.getFields().createdAt.type).to.deep.equals(GraphQLDate);
  });

  it('should have an updatedAt field of type GraphQLDate', () => {
    expect(ExpenseType.getFields()).to.have.property('updatedAt');
    expect(ExpenseType.getFields().updatedAt.type).to.deep.equals(GraphQLDate);
  });
});
