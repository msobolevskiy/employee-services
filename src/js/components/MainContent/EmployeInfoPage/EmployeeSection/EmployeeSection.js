import React from "react";
import s from "./EmployeeSection.module.css";
import back from "../../../../../assets/images/back.svg";
import island from "../../../../../assets/images/island.svg";
import {NavLink} from "react-router-dom";
import cn from 'classnames';

function EmployeeSection (props) {
  
    return (
      <div id="employee-section" className={cn(s.content, s.employeeSection)}>
        <div className={s.employeePhoto}>
          <img
            className={s.employeePhotoImg}
            alt="emp"
            src={props.employees[0].photo}
          />
          <NavLink className={s.btnBack} to="/">
            <img src={back} alt="back" />
            </NavLink>
          <img className={s.employeePhotoIcon} src={island} alt="island" />
        </div>
        <div className={s.employeeSectionInfo}>
          <p className={s.employeeMale}>{props.employees[0].male}</p>
          <p className={s.employeeName}>{props.employees[0].name}</p>
          <p className={s.employeeRuName}>{props.employees[0].fullName}</p>
        </div>
        <div className={s.employeeSectionBottom}>
          <div className={s.employeeId}>{`ID ${props.employees[0].id}`}</div>
          <div className={s.employeeCard}>Business card</div>
        </div>
      </div>
    );
}
export default EmployeeSection;
