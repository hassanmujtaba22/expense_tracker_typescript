import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState"

function IncomeExpense() {
    const { transactions } = useContext(GlobalContext)
    function getIncome() {
        let income = 0;
        for (let i in transactions)
            if (parseInt(transactions[i].amount) > 0)
                income += parseInt(transactions[i].amount);
        return income;
    }
    function getExpense() {
        let exp = 0;
        for (let i in transactions)
            if (parseInt(transactions[i].amount) < 0)
                exp += parseInt(transactions[i].amount);
        return -exp;
    }
    return (
        <div className="IncomeExpense">
            <div className="income">
                <h4>Income</h4>
                <p>+{getIncome()}</p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p>-{getExpense()}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
