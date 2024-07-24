import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Chart from './components/Chart';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <Container>
      <Header />
          <Balance transactions={transactions} />
          <IncomeExpense transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
        <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Chart transactions={transactions} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
