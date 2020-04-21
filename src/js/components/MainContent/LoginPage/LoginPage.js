import React, {useState} from "react";
import s from "./LoginPage.module.css";
import cn from 'classnames';
import {SvgResetIcon} from './svgComponents/svgComponents';
import {InputWrap} from '../../../../assets/InputWrap/InputWrap';
import {NavLink} from "react-router-dom";



function LoginPage (props) {
  
  const [usersLogin, setUsersLogin] = useState("")
  const [usersPassword, setUsersPassword] = useState("")

 
  const checkInputData=()=>{
    props.authorization(usersLogin, usersPassword);
  }

 

  const handleInputLoginChange = (event) =>{
    setUsersLogin(event)
  }
  const handleInputPasswordChange = (event) =>{
    setUsersPassword(event)
  }

  let ref = React.createRef()
  ;
 
  return ( 
    <div className={cn(s.content, s.loginScreen)} id="login-screen">
      <div className={s.wrapperForLogin}>
        <div className={s.loginHeaderWrap} >
          <div className={s.loginHeader}>Sign in!</div>
         
          <NavLink className={s.resetBtnLogin} to="/">
          <SvgResetIcon />
          </NavLink>
         
        </div>
        <div className={s.loginMain}>
          <div className={s.loginArea}>
            <form className={s.loginForm}>
              <div className={s.field}>
                <InputWrap label={"Username"} type={"text"} value={usersLogin} onChange={handleInputLoginChange} ref={ref} />
              </div>
              <div className={s.field}>
                <InputWrap label={"Password"} type={"password"} value={usersPassword} onChange={handleInputPasswordChange} ref={ref} />
              </div>        
            </form>
          </div>
          <button id="button-login" className={s.recaptchaTriggerButton} onClick={checkInputData}>Sign in</button>              
        </div>      
      </div>
    </div>
  );
  
};
export default LoginPage;
