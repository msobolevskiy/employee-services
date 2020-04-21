import React from "react";
import s from "../SettingsPage.module.css";


class SettingsUserInfo extends React.Component {

  
  render(){
  return (
    
    <div className={s.settingsContent}>
        <div className={s.settingsContentNameWrap}>
          <div>{this.props.nativeName}</div>
          <div>{this.props.name}</div>
        </div>
        <div className={s.settingsContentRole}>
          <div className={s.settingsContentBtn}>employee</div>
          <div className={s.settingsContentBtn}>hr</div>
        </div>
        <div className={s.settingsContentVacationRole}>
          <div className={s.settingsContentBtn}>employee</div>
          <div className={s.settingsContentBtn}>po</div>
          <div className={s.settingsContentBtn}>dd</div>
        </div>
        <div className={s.settingsContentAdmin}>
          <div className={s.settingsContentBtn}>admin</div>
        </div>
    </div>
  );
}
};
export default SettingsUserInfo;
