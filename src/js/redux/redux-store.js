import {createStore, combineReducers, applyMiddleware} from 'redux';
import usersReducer from './usersReducer';
import employeesReducer from './employeesReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    users: usersReducer,
    employees: employeesReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

export default store;