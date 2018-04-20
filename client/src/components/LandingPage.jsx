import React from 'react';
import { Button } from '.';

const handleClick = async () => {
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
