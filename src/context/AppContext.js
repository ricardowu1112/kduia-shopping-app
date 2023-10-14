import React, { createContext, useReducer } from 'react';
import RemainingValue from '../components/RemainingValue';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = expense.quantity + action.payload.quantity;
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.quantity = expense.quantity - action.payload.quantity;
                    }
                    expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'ADD_ITEM_10':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    if (state.RemainingValue - 10 >= 0){
                        expense.quantity += 10;
                    }

                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'MINUS_ITEM_10':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    if (expense.quantity - 10 >= 0){
                        expense.quantity -= 10;
                    } else {
                        expense.quantity = 0
                    }
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

    case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            }

    case 'CHG_BUDGET':
            action.type = "DONE";
            state.Budget = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', quantity: 0},
        { id: "Finance", name: 'Finance', quantity: 0},
        { id: "Sales", name: 'Sales', quantity: 0},
        { id: "Human Resource", name: 'Human Resource', quantity: 0},
        { id: "IT", name: 'IT', quantity: 0},
    ],
    Location: '$',
    Budget: 0
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + item.quantity);
    }, 0);


    state.CartValue = totalExpenses;
    state.RemainingValue = state.Budget - state.CartValue

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location,
                Budget: state.Budget,
                RemainingValue: state.RemainingValue
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};