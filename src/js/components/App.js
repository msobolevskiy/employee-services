import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'
import '../../main.css';
import {BrowserRouter} from "react-router-dom";
import store from "../redux/redux-store";
import {Provider} from 'react-redux';



let rerenderEntireTree = (state) =>{
    
ReactDOM.render(
    <BrowserRouter> 
        <Provider store={store}>
            <Main/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState() 
    rerenderEntireTree(state)});
    