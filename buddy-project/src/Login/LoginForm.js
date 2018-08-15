import React, {Component} from 'react';
import './LoginForm.css';

class LoginForm extends Component {

  //LoginForm state
  state={
      id:'',
      password:'',
      loginbtnClick:false,
      loginerrMsg:'',
    };


  //id, password input에 있는 값들이 변할때마다 state값 업데이
  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  //login버튼 클릭했을 때 id,password input값이 비어있는지 확인
  //해당 id,password가 DB에 저장되어 있는 값인지는 확인하는 함수 추가 예정
  handleClick=()=>{
    let idValue=this.state.id;
    let passValue=this.state.password;
    let errMsg='';

    //id,password값이 하나라도 없으면 error 메세지 저장
    if(idValue=='' || passValue==''){errMsg="Please input id or password";}

    this.setState({
      loginerrMsg: errMsg
    });
  }


  render(){
    return(
      <div className="LoginBox">
        <div className="LogoImage"/>
          <div className="LoginInput">
            <label htmlFor="inp" className="inp">
              <input
                type="text"
                id="inp"
                value={this.state.id}
                onChange={this.handleChange}
                name="id"
                placeholder="&nbsp;"/>
              <span className="label">Student Number</span>
              <span className="border"></span>
            </label>
            <label htmlFor="inp1" className="inp">
              <input
                type="password"
                id="inp1"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="&nbsp;"/>
              <span className="label">Password</span>
              <span className="border"></span>
            </label>
            <button
              type="submit"
              className="LoginButton"
              onClick={this.handleClick}>
              LOGIN</button>
            <a href="#"><br/>Forget your password?</a><br/>
            <div className="LoginErrorMsg">
              {this.state.loginerrMsg? this.state.loginerrMsg : " "}
            </div>
            <button type="submit" className="SignButton">SIGN UP</button>
          </div>
        </div>
    );
  }
}

export default LoginForm
