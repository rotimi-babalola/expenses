import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server';
import { dropDb } from '../helpers/testHelpers';
import { newExpenseMutation, createNewEditExpenseMutation, testExpenseMutation } from '../helpers/mutations';

const server = supertest.agent(app);
let expenseId;
let oldExpense;
const newAmount = 20000;
const newExpenseName = 'Romantic dinner';

describe.only('Expense server', () => {

  before(async () => {
    await dropDb();
  });

  before((done) => {
    server.post('/graphql')
      .send(testExpenseMutation)
      .end((error, response) => {
        const { AddExpense } = response.body.data;
        oldExpense = AddExpense;
        expenseId = AddExpense.id;
        done();
      });
  });

  after(async () => {
    await dropDb();
  });

  // I'm wondering if it neccesary to create
  // another expense or if we can test the one
  // create in the before hook 🤔
  it('should create an expense', () => {
    server.post('/graphql')
      .send(newExpenseMutation)
      .expect(200)
      .end((error, response) => {
        const { AddExpense } = response.body.data;
        expenseId = AddExpense.id;
        expect(response.status).to.equal(200);
        expect(AddExpense).to.have.property('id');
        expect(AddExpense).to.have.property('name');
        expect(AddExpense).to.have.property('category');
        expect(AddExpense).to.have.property('amount');
      });
  });

  it('should edit an expense', () => {
    server.post('/graphql')
      .send(createNewEditExpenseMutation(expenseId, { amount: newAmount, name: newExpenseName }))
      .expect(200)
      .end((error, response) => {
        const { EditExpense } = response.body.data;
        expect(response.status).to.equal(200);
        expect(EditExpense.amount).to.equal(newAmount);
        expect(EditExpense.name).to.equal(newExpenseName);
        // only the amount and name fields were updated 
        // check to ensure the other fields are intact
        expect(EditExpense.id).to.equal(oldExpense.id);
        expect(EditExpense.category).to.equal(oldExpense.category);
      });
  });

  // it('should fail to edit for an invalid category', () => {
  //   server.post('/graphql')
  //     .send(createNewEditExpenseMutation(expenseId, { amount: newAmount, name: newExpenseName, category: 'invalid' }))
  //     .expect(500)
  //     .end((error, response) => {
  //       expect(response.status).to.equal(500);
  //       console.log(response.text, 'response');
  //     });
  // });
});
