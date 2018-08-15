import React, {Component} from 'react';
import LoginForm from './LoginForm';
import './Login.css';


class Login extends Component {

  //Login배경 화면 및 LoginForm 상자 띄우기
  render(){
      return(
        <div className="LoginBackground">
          <div className="container">
            <div className="row">
              <div className="col-md-6"/>
              <div className="col-md-6">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Login;
