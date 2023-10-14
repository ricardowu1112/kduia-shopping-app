import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Alert } from '@mui/material';

const BudgetValue = () => {
  const { Location, dispatch, Budget } = useContext(AppContext);
  const [showAlert, setShowAlert] = useState(false);

  const changeBudget = (val) => {
    if (val<=20000){
            if (val >= 0) {
                dispatch({
                    type: 'CHG_BUDGET',
                    payload: val,
                });
                setShowAlert(false);
            } else {
                setShowAlert(true);
            }
        } else {
            alert('The Budget cannot exceed 20000')
        }
    }

  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {Location}
        <input
          required='required'
          min={0}
          type='number'
          id='budget'
          value={Budget}
          onChange={(event) => changeBudget(event.target.value)}
          style={{ size: 4, width: '100px', height: 24 }}
        />
      </span>
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

export default BudgetValue;