import React from "react";
import s from "./EmployeesListPage.module.css";
import SearchWrap from './SearchWrap/SearchWrap';
import EmployeesWrap from './EmployeesWrap/EmployeesWrap';
import cn from 'classnames';



const EmployeesListPage = (props) => {
  return (
    <div id="main-wrap" className={cn('content', s.mainWrap)}>
      <SearchWrap  searchedName={props.searchedName} search={props.search} resetSearch={props.resetSearch}/>
      <EmployeesWrap employees={props.users}/>
    </div>
  );
};
export default EmployeesListPage;


