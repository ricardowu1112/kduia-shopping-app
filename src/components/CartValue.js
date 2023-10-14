import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.quantity);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;