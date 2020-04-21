import React, {useState} from "react";
import cn from 'classnames';
import EmployeesListHeader from "./EmployeesListHeader/EmployeesListHeader";
import Employe from "./Employe/Employe";
import s from '../../../../../main.css';


function EmployeesWrap (props) {

  let [show, setShow] = useState("grid")
  let [actualNumberOfEmployees, setActualNumberOfEmployees] = useState("")

  const changeOnTableView = ()=>{setShow("table")}
  const changeOnGridView = ()=>{setShow("grid")}
  

  const emplRend = (emps)=>{ 
      let data = emps.map(empl => (

          <Employe
            key={empl.id}
            photo={empl.photo}
            nativName={empl.nativeName}
            name={empl.name}
            department={empl.department}
            cabinet={empl.cabinet}
          />
      ))
      actualNumberOfEmployees = data;
    }
  
   
    return (
      <div id="employees-wrap" className={s.employeesWrap}>
        <div className={s.employeesGridWrap}>
          <EmployeesListHeader 
              changeOnTableView={changeOnTableView} 
              changeOnGridView={changeOnGridView}
              employeesPerPage={props.employees.length}/>
          <div className={show === "grid" ? s.employeesItemWrap : cn(s.table, s.employeesItemWrap)} >
            {emplRend(props.employees)}
            {actualNumberOfEmployees}
          </div>
        </div>
      </div>
    );
}

export default EmployeesWrap;
