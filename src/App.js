import React from 'react';
import './App.css';
//import components
import {Header} from './Components/Header';
import {AccountSummary} from './Components/AccountSummary'
import { Balance } from './Components/Balance';
import {TransactionHistory} from './Components/TransactionHistory';
import {GlobalProvider} from './Components/Context/GlobalState';
import {AddTransaction} from './Components/AddTransaction';
function App(){
  return (
    <GlobalProvider>
      <Header/>
      <div classname="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}
export default App;
