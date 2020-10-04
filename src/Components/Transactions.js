import React, {useState, useContext} from 'react';
//import the Global Context
import {GlobalContext} from './Context/GlobalState';
import './AddTransaction';

export const TranactionHistory =()=>{
    const {transactions}=useContext (GlobalContext);
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map (transactions=>(<transactions key={transactions.id}transactions={transactions}/>
                )
                )}
            </ul>
        </div>
    )
}
