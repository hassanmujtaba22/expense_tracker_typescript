import React, { useContext } from 'react'
import {GlobalContext} from "../../context/GlobalState"

function Balance() {
    const {transactions} = useContext(GlobalContext)
    
    function getBalance(){
        let bal=0;
        for(let i in transactions)
            bal+=parseInt(transactions[i].amount);
       return bal;
    }
    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h2>${getBalance()}</h2>
        </div>
    )
}

export default Balance
