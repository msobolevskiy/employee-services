import React from "react";
import s from '../InfoSection.module.css';


function InfoPart (props) {

  return (
          <div className={s.infoBox}>
            <div className={s.infoElem}>  {props.icon && <img src={props.icon} alt={props.section}/>}
              <p>{props.section}</p>
            </div>
            <input className={s.infoElemData} readOnly placeholder={props.info}/>
          </div>      
  )
}

export default InfoPart;
