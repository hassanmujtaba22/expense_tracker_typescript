import React from 'react'

function Transactions() {
    return (
        <>
            <h3 className="history">History</h3>
            <ul className="transactions">
                <li className="positive"><span>Cash</span> <span>-400</span> <button>x</button></li>
            </ul>
        </>
    )
}

export default Transactions
