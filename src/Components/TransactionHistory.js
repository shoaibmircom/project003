import React, {useContext} from 'react';
//import the Global context
import {GlobalContext} from './Context/GlobalState';
//Import Transaction
import {transactions} from './Transactions';
import './AddTransaction'
export const TransactionHistory=()=>{
    const {transactions}=useContext(GlobalContext);
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transactions=>(
                    <transactions key={transactions.id}transactions={transactions}/>
                )
                )}
            </ul>
        </div>
    )
}