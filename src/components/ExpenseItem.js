import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle,FaMinusCircle,FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleAddBy10 = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_ITEM_10',
            payload: item,
        });
    };

    const handleMinusBy10 = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'MINUS_ITEM_10',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddBy10} style={{'margin-left':30,cursor: 'pointer'}}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleMinusBy10} style={{'margin-left':30,cursor: 'pointer'}}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem} style={{'margin-left':15,cursor: 'pointer'}}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;