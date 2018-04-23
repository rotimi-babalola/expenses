import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server';
import { dropDb } from '../helpers/testHelpers';
import {
  createNewExpenseMutation,
  createNewEditExpenseMutation,
  deleteExpenseMutation
} from '../helpers/mutations';

const server = supertest.agent(app);

let expenseId;
let oldExpense;

const editExpenseAmount = 20000;
const editExpenseName = 'Romantic dinner';

const newExpenseName = 'Travel to Spain';
const newExpenseAmount = 7000;

const anotherNewExpenseName = 'some expense';
const anotherNewExpenseAmount = 5000;

const expenseName1 = 'another expense';
const expenseAmount1 = 6000;

describe('Expense server', () => {

  before(async () => {
    await dropDb();
  });

  // to get an expenseId we can use for updating and deleting
  before((done) => {
    server.post('/graphql')
      .send(createNewExpenseMutation(
        anotherNewExpenseName,
        anotherNewExpenseAmount
      ))
      .end((error, response) => {
        const { AddExpense } = response.body.data;
        oldExpense = AddExpense;
        expenseId = AddExpense.id;
        done();
      });
  });


  // to get an expense we can use to test the adding amount feature
  before((done) => {
    server.post('/graphql')
      .send(createNewExpenseMutation(expenseName1, expenseAmount1))
      .end(() => {
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
      .send(createNewExpenseMutation(newExpenseName, newExpenseAmount))
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

  it('should add new amount if an expense with an old name is created', () => {
    server.post('/graphql')
      .send(createNewExpenseMutation(expenseName1, expenseAmount1))
      .expect(200)
      .end((error, response) => {
        const { AddExpense } = response.body.data;
        expect(response.status).to.equal(200);
        expect(AddExpense.amount).to.equal(expenseAmount1 * 2);
        expect(AddExpense.name).to.equal(expenseName1);
      });
  });

  it('should edit an expense', () => {
    server.post('/graphql')
      .send(createNewEditExpenseMutation(expenseId, {
        amount: editExpenseAmount,
        name: editExpenseName,
      }))
      .expect(200)
      .end((error, response) => {
        const { EditExpense } = response.body.data;
        expect(response.status).to.equal(200);
        expect(EditExpense.amount).to.equal(editExpenseAmount);
        expect(EditExpense.name).to.equal(editExpenseName);
        // only the amount and name fields were updated
        // check to ensure the other fields are intact
        expect(EditExpense.id).to.equal(oldExpense.id);
        expect(EditExpense.category).to.equal(oldExpense.category);
      });
  });

  // TEMPORARILY COMMENTING THIS OUT
  // it('should fail to edit for an invalid category', () => {
  //   server.post('/graphql')
  //     .send(createNewEditExpenseMutation(expenseId, {
  //       amount: editExpenseAmount,
  //       name: editExpenseName,
  //       category: 'invalid',
  //     }))
  //     .expect(500)
  //     .end((error, response) => {
  //       expect(response.status).to.equal(500);
  //     });
  // });

  // it('should delete an expense', () => {
  //   server.post('/graphql')
  //     .send(deleteExpenseMutation(expenseId))
  //     .expect(200)
  //     .end((error, response) => {
  //       const { DeleteExpense } = response.body.data;
  //       expect(response.status).to.equal(200);
  //       expect(DeleteExpense).to.equal('Successfully deleted!');
  //     });
  // });
});
