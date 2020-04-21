import React from "react";
import s from './EditSection.module.css';


const EditSection = (props) => {
  return (
    <div className={s.editSection}>
      <button id='btn-edit' className={s.btnEdit} type="button">Edit details</button>
    </div>
  );
};
export default EditSection;
