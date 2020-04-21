import React from "react";
import s from "./Header.module.css";
import cursor from '../../../../assets/images/cursor.svg';
import off from '../../../../assets/images/off.svg';
import cn from 'classnames';
import {NavLink} from "react-router-dom";


function Header (props) {
console.log("header name -  " + props.name);
  return (
    <header>
      <div className={cn(s.headerWrap, s.content)}>
        <div className={s.logo}>
          <p className={s.logoName}>leverx group</p>
          <p>employee services</p>
        </div>
        <div className={s.headerButtons}>
          <div className={cn(s.headerButtonAddres, s.headerButtonActive)} ><NavLink to="/">Addres Book</NavLink></div>
          <div className={s.headerButtonSettings} >{(props.user === "admin")?<NavLink to="/settings">Settings</NavLink>:"Settings"}</div>
        </div>
        <div className={s.headerButtons}>
          <div className={s.loginName}>{props.name}</div>
          <button className={s.btnLogin}><NavLink to="/login">Sign in</NavLink></button>
          <button className={s.headerButton}><img src={cursor} alt="cursor"/></button>
          <button className={s.headerButton}><img src={off} alt="off"/></button>
        </div>
      </div>
    </header>
  );
}
export default Header;
