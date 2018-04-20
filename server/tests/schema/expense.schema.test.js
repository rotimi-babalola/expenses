/* eslint no-undef: 0 */
const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

import { expect } from 'chai';
import GraphQLDate from 'graphql-date';

import Expense from '../../schemas/types/expense.type';
import Category from '../../schemas/types/category.type';

describe('Expense', () => {
  it('should have an id field of type ID', () => {
    expect(Expense.getFields()).to.have.property('id');
    expect(Expense.getFields().id.type).to.deep.equals(GraphQLID);
  });

  it('should have a non null name field of type string', () => {
    expect(Expense.getFields()).to.have.property('name');
    expect(Expense.getFields().name.type).to.deep.equals(new GraphQLNonNull(GraphQLString));
  });

  it('should have a non null category type field', () => {
    expect(Expense.getFields()).to.have.property('category');
    expect(Expense.getFields().category.type).to.deep.equals(new GraphQLNonNull(Category));
  });

  it('should have a non null amount field of type float', () => {
    expect(Expense.getFields()).to.have.property('amount');
    expect(Expense.getFields().amount.type).to.deep.equals(new GraphQLNonNull(GraphQLFloat));
  });

  it('should have a createdAt field of type GraphQLDate', () => {
    expect(Expense.getFields()).to.have.property('createdAt');
    expect(Expense.getFields().createdAt.type).to.deep.equals(GraphQLDate);
  });

  it('should have an updatedAt field of type GraphQLDate', () => {
    expect(Expense.getFields()).to.have.property('updatedAt');
    expect(Expense.getFields().updatedAt.type).to.deep.equals(GraphQLDate);
  });
});