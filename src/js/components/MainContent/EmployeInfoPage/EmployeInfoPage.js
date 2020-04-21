import React from "react";
import EmployeeSection from './EmployeeSection/EmployeeSection';
import InfoSection from './InfoSection/InfoSection';
import EditSection from './EditSection/EditSection'
import s from './EmployeInfoPage.module.css';


const EmployeInfoPage = (props) => {
  
  return (
    <div className={s.infoPageWrap}>
      <EmployeeSection employees={props.employees}/>
      <InfoSection employees={props.employees} user={props.user}/>
      <EditSection />
    </div>
  );
};
export default EmployeInfoPage;
