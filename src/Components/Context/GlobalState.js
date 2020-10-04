import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//import the reducer
const initialState={transactions:[
    {id:1, description:"Income 1", transactionAmount:1000},
    {id:2, description:"Expense 1", transactionAmount:-100}
]
}
//create the global context
export const GlobalContext=createContext (initialState);
export const GlobalProvider=({children})=>{
    const [state]=useReducer (AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions:state.transactions
            }
        }>{children}</GlobalContext.Provider>
    )
}