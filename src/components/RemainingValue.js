import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingValue = () => {
    const { expenses, Location, Budget,RemainingValue } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.quantity);
    }, 0);


    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{RemainingValue}</span>
        </div>
    );
};

export default RemainingValue;