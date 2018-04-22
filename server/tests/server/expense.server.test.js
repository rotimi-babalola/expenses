import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server';

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

  it('should create an expense', () => {
    server.post('/graphql')
      .send(newExpenseMutation)
      .expect(200)
      .end((error, response) => {
        console.log(response, '+++');
        // const { AddExpense } = response.body.data;
        // console.log('AddExpense');
        // expect(AddExpense).to.have.property('id`');
        // expect(AddExpense).to.have.property('name');
        // expect(AddExpense).to.have.property('category');
        // expect(AddExpense).to.have.property('amount');
      });
  });
});
