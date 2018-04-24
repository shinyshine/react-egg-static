import React, { Component } from 'react';
import './login.scss';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import LoginForm from 'component/member/login/login';
import RegisterForm from 'component/member/register/register'


export default class Login extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div className="login-wrapper">
      <div className="login-bg">
        <h1>GDUFS</h1>
      </div>
      <div className="login-form-box">
        <Tabs>
          <TabPane tab="登录" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="注册" key="2">
            <RegisterForm />
          </TabPane>
        </Tabs>
      </div>
    </div>;
  }
}