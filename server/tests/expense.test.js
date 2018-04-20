/* eslint no-undef: 0 */
const graphql = require('graphql');
import chai from 'chai';

import Expense from '../schemas/types/expense.type';

const expect = chai.expect;

describe('Expense', () => {
  it('Should have an id field of type ID', () => {
    expect(Expense.getFields()).to.have.property('id');
    expect(Expense.getFields().id.type).to.deep.equals(graphql.GraphQLID);
  });

  it('Should have a name field of type string', () => {
    expect(Expense.getFields()).to.have.property('name');
    expect(Expense.getFields().name.type).to.deep.equals(new graphql.GraphQLNonNull(graphql.GraphQLString));
  });
});