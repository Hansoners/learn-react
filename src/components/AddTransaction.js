import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          label="Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Transaction
        </Button>
      </Box>

    </div>
  )
};

export default AddTransaction
