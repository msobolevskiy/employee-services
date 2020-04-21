import {connect} from 'react-redux';
import Header from './Header';


let mapStateToProps = (state) => {
  if (state.users.authorizedUser.length !== 0) {
    return {
           name: state.users.authorizedUser[0].name
         }
  }
}


const HeaderContainer = connect(mapStateToProps)(Header)
export default HeaderContainer;