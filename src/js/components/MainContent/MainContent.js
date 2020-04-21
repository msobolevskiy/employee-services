import React, { useState, useEffect } from "react";
import s from "./MainContent.module.css";
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import EmployeesListPage from "./EmployeesListPage/EmployeesListPage";
import EmployeInfoPage from "./EmployeInfoPage/EmployeInfoPage";
import SettingsPage from ".//SettingsPage/SettingsPage";
import HeaderContainer from "./Header/HeaderContainer";
import cn from "classnames";
import {Route, Switch} from "react-router-dom";

function MainContent (props) {
    return (
      <>
        <HeaderContainer/>
        <main className={cn(s.content, s.mainWrap)}>
          <Switch>
            <Route exact path='/'>
                <EmployeesListPage
                  searchedName={props.searchedName}
                  users={props.users}
                  search={props.search} 
                  resetSearch={props.resetSearch}
                />
            </Route>
            <Route path="/info">
                <EmployeInfoPage employees={props.users}/>
            </Route>
            <Route path="/login">
                <LoginPageContainer/>
            </Route>
            <Route path="/settings">
                <SettingsPage employees={props.users}/>
            </Route>
      </Switch>
        </main>
      </>
    );
  }

export default MainContent;
