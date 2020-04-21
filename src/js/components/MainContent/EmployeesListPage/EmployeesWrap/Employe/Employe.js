import React from "react";
import briefcase from '../../../../../../assets/images/briefcase.svg'
import doorway from '../../../../../../assets/images/doorway.svg'
import s from '../../../../../../main.css';
import {NavLink} from "react-router-dom";

function Employe (props) {


  return (
            <div className={s.employeOuterWrap} >
             <NavLink to="/info">
                <div className={s.employeWrap}>
                  <div className={s.employePhotoWrap}><img className={s.employePhoto} alt="photoo" src={props.photo}/></div>
                  <div className={s.employeesListName}>
                    <div className={s.nativeName}>{props.nativName}</div>
                    <div className={s.name}>{props.name}</div>
                  </div>
                  <div className={s.employeInfo}>
                    <div className={s.department}><img className={s.departmentGridIcon} src={briefcase}
                        alt="department"/>
                      <p className={s.departmentPar}>{props.department}</p>
                    </div>
                    <div className={s.cabinet}><img className={s.departmentGridIcon} src={doorway} alt="cabinet"/>
                      <p className={s.cabinetPar}>{props.cabinet}</p>
                    </div>
                  </div>
                </div>
                </NavLink>
            </div> 
  );
};

export default Employe;

