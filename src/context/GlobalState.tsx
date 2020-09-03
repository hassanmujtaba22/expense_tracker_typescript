import React, {createContext, useReducer} from 'react';
import { AppReducer } from './AppReducer';

let transactions:transaction[] = []

export const GlobalContext = createContext<context>({transactions:transactions, dispatch:null});

export const GlobalProvider = ({children}:any)=>{
  let [state, dispatch] = useReducer(AppReducer, transactions);

  // Actions 

  return(
    <GlobalContext.Provider value={{transactions:state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}
