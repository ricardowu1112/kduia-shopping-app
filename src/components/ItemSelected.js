import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Alert } from '@mui/material';

const ItemSelected = (props) => {
    const { dispatch, Location, RemainingValue } = useContext(AppContext);
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');
    

    const validCheck = (val) => {
        setQuantity(val)
        if (val >= 0 || val === '') {
            setShowAlert(false);
        }else {
            setShowAlert(true);
        }
    }

    const submitEvent = () => {
        if (quantity <= RemainingValue){
            const item = {
                name: name,
                quantity: parseInt(quantity),
            };

            if(action === "Reduce") {
                dispatch({
                    type: 'RED_QUANTITY',
                    payload: item,
                });
            } else {
                    dispatch({
                        type: 'ADD_QUANTITY',
                        payload: item,
                    });
                }
        } else {
            alert("The allocation should not exceed remaining value")
        }

    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing"> Marketing</option>
                <option value="Finance" name="Finance">Finance</option>
                <option value="Sales" name="Sales">Sales</option>
                <option value="Human Resource" name="Human Resource">Human Resource</option>
                <option value="IT" name="IT">IT</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                  <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
                  <span style={{'margin-right': '8px',fontSize:25,'font-weight':500}}>{Location}</span>
                    <input
                        required='required'
                        type='number'
                        min={0}
                        id='cost'
                        value={quantity}
                        style={{size: 10}}
                        onChange={(event) => validCheck(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

                {showAlert && (
                    <div style={{paddingTop:10}}>
                        <Alert variant="filled" severity="error">
                            The Budget cannot be negative
                        </Alert>
                    </div>
                )}
        </div>
    );
};

export default ItemSelected;