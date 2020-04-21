import React from "react";
import s from '../InfoSection.module.css';


function InfoGeneralWrap (props) {

  return (
    <div className={s.infoGeneralWrap}>
    <p className={s.infoGeneralTitle}>{props.title}</p>
      {props.infoParts}  
  </div>      
  )
}

export default InfoGeneralWrap;
