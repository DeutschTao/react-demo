import React, { Component } from 'react';
import { Redirect } from 'react-router';
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginFlag: false
        }
    }
    componentDidMount() {
        
    }
    submit = () => {
        let uName = this.refs.userName.value;
        let psd = this.refs.passWord.value;
        if(uName === 'admin' && psd === '123456'){
            this.setState({
                loginFlag: true
            })
        } else {
            alert('用户名或者密码有误')
        }
    }
    render() {
        if(this.state.loginFlag){
            return (<Redirect to={{pathname: "/"}}/>)
        }
        return(
            <div>
                <p>登陆页</p>
                <form onSubmit={this.submit}>
                    <input type="text" ref="userName"/> <br />
                    <input type="password" ref="passWord" /> <br />
                    <input type="submit" value="登陆"/>
                </form>
            </div>
        )
    }
}


export default Login