import React from 'react';
import MainContentContainer from './MainContent/MainContentContainer';
import {
  User,
  Editor,
  Admin
} from "./user";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersDataLS: [
        new User("123", "maxim"),
        new Editor("123", "yana"),
        new Admin("123", "ihar")
      ]
    };
  }
  componentDidMount() {    
    localStorage.setItem('users', JSON.stringify(this.state.usersDataLS))
    localStorage.setItem('logInStatus', 'Sign in');
  }


  
  render(){
  return (
      <MainContentContainer />
  );
}
}

export default App;