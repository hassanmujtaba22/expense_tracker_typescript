import React from 'react';
import "./App.css"

import Header from './components/header/Header';
import Balance from './components/balance/Balance';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import Transactions from './components/transactionsList/TransactionsList';
import AddTransaction from './components/addTransactions/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <div className="box">
          <Balance />
          <IncomeExpense />
          <AddTransaction />
          <Transactions />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
