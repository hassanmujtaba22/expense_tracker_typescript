import React, { useState, useContext } from 'react'
import {GlobalContext} from "../../context/GlobalState"

function AddTransaction() {
    
    const {dispatch} = useContext(GlobalContext)


    // interface desc {
    //     desc: string
    // }
    // interface amount {
    //     amount: number
    // }

    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState("")
    
    function addDesc(e:React.ChangeEvent<HTMLInputElement>) {
        setDesc(e.currentTarget.value)
    }
    function addAmount(e:React.ChangeEvent<HTMLInputElement>) {
        setAmount(e.currentTarget.value)
    }
    function Add(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (desc === "") {
            alert("Error! Please Enter Description")
            return
        }
        if (amount === "") {
            parseInt(amount)
            return
        }
        let trans = {desc: desc, amount: amount}
        setDesc("")
        setAmount("")
        dispatch({data: trans, type: "ADD_TRANSACTION"})
    }
    return (
        <div className="addtransaction">
            <h3>Add new transaction</h3>
            <form>
                <div className="description">
                    <label htmlFor="description">Description: </label><br />
                    <input type="text" id="description" value={desc} 
                    onChange={addDesc} 
                    placeholder="Enter Description" />
                </div>
                <div className="amount">
                    <label htmlFor="amount">Amount: <br /> (negative - expense, positive - income)</label><br />
                    <input type="number" id="amount" value={amount} 
                    onChange={addAmount} placeholder="Enter Amount" />
                </div>
                <button onClick={Add}>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
