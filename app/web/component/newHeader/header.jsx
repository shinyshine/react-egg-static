import React, { Component } from 'react';
import './header.css';
import { Row, Col, Input, Avatar, Dropdown, Menu } from 'antd';

const { Search } = Input;

// 获取用户信息的接口，用于显示头像和名字
import { userInfoApi } from 'service/account'

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/account">个人资料</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/course">课程管理</a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">注销</a>
    </Menu.Item>
  </Menu>
);

const userInfo = {
  data:null,
  success:true,
  message:{
    imgUrl:null,
    id:'20141002426',
    email:null,
    username:'diang'
  },
  error:null
}

export default class Header extends Component {

  componentWillMount() {
    // 调用userInfoApi
    // setState
  }

  render() {
    
    return <header className="header">
      <Row>
        <Col span={2}></Col>
        <Col span={10}>
          <h1>GDUFS</h1>
        </Col>
        <Col span={10}>
          <nav>
            <Row>
              <Col span={3}></Col>
              <Col span={13}>
                <Search
                  placeholder="可输入课程名称搜索相关课程"
                  onSearch={value => console.log(value)}
                  style={{ width: 300 }}
                />
              </Col>
              <Col span={6}>
                <p className="header-user-name">diangdiang</p>
              </Col>
              <Col span={2}>
                <div className="header-avatar">
                  <Dropdown overlay={menu}>
                    <Avatar shape="square" icon="user" src={userInfo.imgUrl} />
                  </Dropdown>
                </div>
                
              </Col>
            </Row>
          </nav>
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>;
  }
}
