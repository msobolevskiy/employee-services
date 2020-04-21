import React, {useEffect} from "react";
import MainContent from './MainContent';
import {connect} from "react-redux";
import {getUsersThunkCreator} from '../../redux/employeesReducer';
import {employeesSearch, search, resetSearch} from '../../redux/employeesReducer';

const MainContentContainer = (props) => {

    useEffect(() => {props.getUsersThunkCreator()}, []);

    return ( <>
        {(props.users.employees.length !== 0)  && 
        <MainContent users = {props.users.employees}
                    searchedName={props.employeesSearch}
                    searchedEmployees={props.searchedEmployees}
                    search={props.search}
                    resetSearch={props.getUsersThunkCreator}/>
        }
        </>
    );
};

let mapDispatchToProps = (dispatch) => {
    return { 
        employeesSearch: (searchedName)=>{
            dispatch(employeesSearch(searchedName))
        },
        getUsersThunkCreator: ()=>{
            dispatch(getUsersThunkCreator())
        },
        search:()=>{
            dispatch(search())
        }
   };
 };

let mapStateToProps = (state) => {
    return {
        users: state.employees,
        searchedEmployees: state.searchedEmployees
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContentContainer);