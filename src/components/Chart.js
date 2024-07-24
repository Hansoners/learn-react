import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Chart = ({ transactions }) => {
  const income = transactions.filter(transaction => transaction.amount > 0)
                             .reduce((acc, transaction) => acc + transaction.amount, 0);
  const expense = transactions.filter(transaction => transaction.amount < 0)
                              .reduce((acc, transaction) => acc + transaction.amount, 0);

  const data = [
    { name: 'Income', amount: income },
    { name: 'Expense', amount: Math.abs(expense) }
  ];

  return (
    <div className='chart-container'>
      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="amount">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Income' ? '#82ca9d' : '#ff6347'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
