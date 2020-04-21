import React, {useState, useEffect} from "react";
import s from "./SettingsPage.module.css";
import SettingsUserInfo from "./SettingsUserInfo/SettingsUserInfo";
import cn from "classnames";
import {SvgSearchIcon, SvgResetIcon} from './svgComponents/svgComponents';
import {InputWrap} from '../../../../assets/InputWrap/InputWrap';



function SettingsPage (props) {
 
  const [userName, setUserName] = useState("")
  const [actualNumberOfEmployees, setActualNumberOfEmployees] = useState([
    props.employees.map(empl => ( 
      <SettingsUserInfo
        key={empl.id}
        nativeName={empl.nativeName}
        name={empl.name}
      />
  ))
  ])


    const handleInputChange = (event) =>{
      setUserName(event);
    }
  
    let ref = React.createRef()
    console.log('settings page');
  return (
    <div className={s.settinsWrap}>
      <div className={s.settingsTitle}><span>Roles / Permissions</span></div>
      <div className={s.settingsHeader}>
        <div className={cn(s.inputWrap, s.settinsInputWrap)}>
          <SvgSearchIcon />
          <InputWrap className={s.searchFormInput} placeholder={"Type to search"}  type={"text"} value={userName} onChange={handleInputChange} ref={ref} />
          <div id="reset-btn" className={s.resetBtn}>
          <SvgResetIcon />
          </div>
        </div>
        <div className={s.settingsHeaderBook}>Address book role</div>
        <div className={s.settingsHeaderRole}>Vacation role</div>
        <div className={s.settingsHeaderAdmin}>Admin</div>
      </div>
      <div id="settings-content-wrap" className={s.settingsContentWrap}>
            {actualNumberOfEmployees}
      </div>
    </div>
  );
};
export default SettingsPage;
