import React, { useState } from 'react'

function AddTransaction() {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState("")
    return (
        <div className="addtransaction">
            <h3>Add new transaction</h3>
            <form>
                <div className="description">
                    <label htmlFor="description">Description: </label><br />
                    <input type="text" id="description" value={desc} 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)} 
                    placeholder="Enter Description" />
                </div>
                <div className="amount">
                    <label htmlFor="amount">Amount: <br /> (negative - expense, positive - income)</label><br />
                    <input type="number" id="amount" value={amount} 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} placeholder="Enter Amount" />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
