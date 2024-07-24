import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <List>
        {transactions.map(transaction => (
          <ListItem key={transaction.id} divider>
            <ListItemText 
              primary={transaction.text} 
              secondary={`${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount)}`}
            />
            <IconButton onClick={() => deleteTransaction(transaction.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TransactionList;
