import React from 'react';
import { Typography } from '@mui/material';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <Typography variant="h4">Monthly Expenses</Typography>
      <Typography variant="h4">Total</Typography>
    </div>
  )

};

export default Balance;