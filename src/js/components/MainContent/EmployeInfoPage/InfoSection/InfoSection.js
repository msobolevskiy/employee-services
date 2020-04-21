import React from "react";
import s from './InfoSection.module.css';
import briefcase from '../../../../../assets/images/briefcase.svg'
import doorway from '../../../../../assets/images/doorway.svg'
import phone from '../../../../../assets/images/phone.svg'
import smartphone from '../../../../../assets/images/smartphone.svg'
import at from '../../../../../assets/images/at.svg'
import skype from '../../../../../assets/images/skype.svg'
import password from '../../../../../assets/images/password.svg'
import listD from '../../../../../assets/images/list-d.svg'
import flash from '../../../../../assets/images/flash.svg'
import start from '../../../../../assets/images/start.svg'
import beach from '../../../../../assets/images/beach.svg'
import bookmark from '../../../../../assets/images/bookmark.svg'
import InfoGeneralWrap from "./InfoGeneralWrap/InfoGeneralWrap";
import InfoPart from './InfoPart/InfoPart';



function InfoSection (props) {

  let generalInfoPart = <>
      <InfoPart icon={briefcase}
                section={"Department"}
                info={props.employees[0].department} />
      <InfoPart icon={doorway}
                section={"Room"}
                info={props.employees[0].cabinet} />
    </>

    let contactsInfoPart = <>
      <InfoPart icon={phone}
                section={"Internal phone"}
                info={props.employees[0].profileInfo.internalPhone} />
      <InfoPart icon={smartphone}
                section={"Mobile phone"}
                info={props.employees[0].profileInfo.mobilePhone} />
      <InfoPart icon={at}
                section={"Email"}
                info={props.employees[0].profileInfo.email} />
      <InfoPart icon={skype}
                section={"Skype ID"}
                info={props.employees[0].profileInfo.skype} />
      <InfoPart icon={password}
                section={"C-Number"}
                info={props.employees[0].profileInfo.cNumber} />
    </>

    let profileInfoPart = <>
      <InfoPart icon={listD}
                section={"Mine date"}
                info={props.employees[0].profileInfo.employmentPeriod.mineDate} />
              
      <InfoPart icon={flash}
                section={"Status"}
                info={props.employees[0].profileInfo.employmentPeriod.status} />
    </>

    let employmentInfoPart = <>
      <InfoPart icon={briefcase}
                section={"Start of employment period"}
                info={props.employees[0].profileInfo.employmentPeriod.firstEmploymentPeriod.startOfEmploymentPeriod} />

      <InfoPart section={"working day duration"}
                info={props.employees[0].profileInfo.employmentPeriod.firstEmploymentPeriod.workingDayDuration} />

      <InfoPart icon={start}
                section={"Start of employment period 2"}
                info={props.employees[0].profileInfo.employmentPeriod.secondEmploymentPeriod.startOfEmploymentPeriod} />

      <InfoPart section={"working day duration"}
                info={props.employees[0].profileInfo.employmentPeriod.secondEmploymentPeriod.workingDayDuration} />
    </>

    let additionInfoPart = <>
      <InfoPart icon={beach}
                section={"Vacation"}
                info={props.employees[0].profileInfo.vacation} />
              
      <InfoPart icon={bookmark}
                section={"Address book redesign"}
                info={props.employees[0].profileInfo.addressBookRedesign} />
    </>

  return (
    <div id="info-section" className={s.infoSection}>

        <InfoGeneralWrap  title={"General info"}
                          infoParts= {generalInfoPart}/>

        <InfoGeneralWrap  title={"Contacts"}
                          infoParts= {contactsInfoPart}/>
       
        {(props.user === "editor" || props.user === "admin")  && <>
          <div id="editor-info" className={s.editorInfo}>

          <InfoGeneralWrap  title={"Profile info"}
                            infoParts= {profileInfoPart}/>
          
          <InfoGeneralWrap  title={"Employment info"}
                            infoParts= {employmentInfoPart}/>

          <InfoGeneralWrap  title={"Additional modules"}
                            infoParts= {additionInfoPart}/>

          </div>
        </>}
    </div>
  )
}


export default InfoSection;
