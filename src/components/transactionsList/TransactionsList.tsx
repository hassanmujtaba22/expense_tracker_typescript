import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


function Transactions() {
    const { transactions, dispatch } = useContext(GlobalContext);
    function deleteTransaction(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        dispatch({delIndex:parseInt(e.currentTarget.id), type:"REMOVE_TRANSACTION"})
    }
    return (
        <>
            <h3 className="history">History</h3>
            <ul className="transactions">
                {transactions.length === 0 ? <h3 className="noTransaction">No transactions added yet!</h3> :
                    transactions.map((transaction: any, id: any) => {
                        return (
                            <li key={id} className={`${transaction.amount >= 0 ? "positive" : "negative "}`}>
                                <span>{transaction.desc}</span>
                                <span>{transaction.amount}</span>
                                <button id={id} onClick={deleteTransaction}>x</button>
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}

export default Transactions
