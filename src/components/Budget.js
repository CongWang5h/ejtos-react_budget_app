import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        setNewBudget(inputValue);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (inputValue >= 20000) {
            alert("Cannot increase the allocation! Out of funds");
        }

        if (inputValue < totalExpenses) {
            alert("You cannot reduce the budget below the remaining expenses");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
