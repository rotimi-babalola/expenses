import React from 'react';
import { Button } from '.';
import Api from '../services';

const handleClick = async () => {
  Api().get('/')
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  console.log('Button has been clicked');
}

const LandingPage = () => {
  return (
    <div>
      <header className="gastos-header">
        <h1 className="gastos-title">Gastos</h1>
      </header>
      <br />
      <Button onClick={handleClick}>
        Record New Expense
      </Button>
    </div>
  )
}

export default LandingPage;
