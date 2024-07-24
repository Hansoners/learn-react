import React from 'react';
import { Typography, Grid } from '@mui/material';

const IncomeExpense = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h5">Income</Typography>
        <Typography variant="h6" color="primary">+${income}</Typography>
      </Grid>
      <Grid>
        <Typography variant="h5">Expense</Typography>
        <Typography variant="h6" color="secondary">-${expense}</Typography>
      </Grid>
    </Grid>
  );
};

export default IncomeExpense;
