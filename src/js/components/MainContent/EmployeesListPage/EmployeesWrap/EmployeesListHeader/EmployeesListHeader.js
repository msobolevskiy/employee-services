import React from "react";
import s from "./EmployeesListHeader.module.css";
import grid from '../../../../../../assets/images/grid2.svg';
import table from '../../../../../../assets/images/list2.svg';

class EmployeesListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.changeOnTable = this.changeOnTable.bind(this);
    this.changeOnGrid = this.changeOnGrid.bind(this);
}

  
  changeOnTable(){
      this.props.changeOnTableView("table")
    }
  changeOnGrid(){
    this.props.changeOnGridView("grid")
    }
    

  render(){
    return (
      <div className={s.employeesHeader}>
        <div id="employees-count" className={s.employeesCount}>{this.props.employeesPerPage} employees displayed</div>
        <div className={s.employeesBtns}>
          <button id="btn-grid" onClick={this.changeOnGrid} className={s.btnGrid +' '+s.btnActive}><img src={grid} alt="grid"/></button>            
          <button id="btn-tadle" onClick={this.changeOnTable} className={s.btnTadle}><img src={table} alt="table"/></button> 
        </div>
      </div>
);
  }
}

export default EmployeesListHeader;
