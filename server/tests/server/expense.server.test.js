import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server';
import { dropDb } from '../helpers/testHelpers';

const server = supertest.agent(app);

const newExpenseMutation = {
  query: `
    mutation addExpense($input: ExpenseInput!) {
      AddExpense(input: $input) {
        id
        name
        category
        amount
      }
    }
  `,
  variables: {
    input: {
      name: 'Travel to Spain',
      category: 'TRAVEL',
      amount: 7000,
    },
  },
};

describe.only('Expense server', () => {

  beforeEach(async () => {
    await dropDb();
  });

  afterEach(async () => {
    await dropDb();
  });

  it('should create an expense', () => {
    server.post('/graphql')
      .send(newExpenseMutation)
      .expect(200)
      .end((error, response) => {
        const { AddExpense } = response.body.data;
        expect(AddExpense).to.have.property('id');
        expect(AddExpense).to.have.property('name');
        expect(AddExpense).to.have.property('category');
        expect(AddExpense).to.have.property('amount');
      });
  });
});
