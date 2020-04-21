import {connect} from 'react-redux'; 
import LoginPage from './LoginPage';
import {authorization} from '../../../redux/usersReducer'


let mapStateToProps = (state) => {
  return {
    users: state.users 
  }
}

let mapDispatchToProps = (dispatch) => {
   return { 
    authorization: (login, password) =>{dispatch(authorization(login, password))}
  };
  
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
export default LoginPageContainer;
