import React, {useState} from "react";
import s from "./SearchWrap.module.css";
import cn from 'classnames';
import {SvgSearchIcon, SvgResetIcon} from './svgComponents/svgComponents';
import {InputWrap} from '../../../../../assets/InputWrap/InputWrap';

function SearchWrap (props) {

  let [userName, setUserName] = useState("")
  let ref = React.createRef()

  const handleSubmit = (event) =>{event.preventDefault()}
  const resetSearch = () =>{props.resetSearch()}
  const search = () => {props.search();}

  const handleInputChange = (event) =>{
    setUserName(event)
    props.searchedName(event)
  }

  
  
  return (
    <div className={s.searchWrap}>
        <div className={s.searchTypeWrap}>
          <div id="basic-search-btn" className={s.searchTypeElement +' '+s.searchTypeActive}>basic search</div>
          <div id="advanced-search-btn" className={s.searchTypeElement}>advanced search</div>
        </div>
        <form name="searchForm" className={s.searchForm} onSubmit={handleSubmit}>
          <div className={cn(s.inputWrap, s.settinsInputWrap)}>
            <SvgSearchIcon />
            <InputWrap className={s.searchFormInput} placeholder="John Smith / Джон Смит"  type={"text"} value={userName} onChange={handleInputChange} ref={ref} />
            <div id="reset-btn" className={s.resetBtn} onClick={resetSearch}>
            <SvgResetIcon />
            </div>
          </div>
          <button id="search-btn" className={s.searchFormBtn} onClick={search}>search</button>
        </form>
      </div>
  );
}
export default SearchWrap;
