import React, { Component } from 'react';
import './header.css';
import { Row, Col, Input, Avatar, Dropdown, Menu } from 'antd';

const { Search } = Input;
import cookies from 'js-cookie';

import { server } from 'config/config.server'

// 获取用户信息的接口，用于显示头像和名字
import { userInfoApi } from 'service/account'
import { linkTo } from 'utils'

const queryString = require('query-string');

let keyword = ''

try {
  keyword = queryString.parse(location.search).key
} catch(e) {
  console.log(e)
}


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
  constructor(props) {
    super(props);
    this.state = {
      type: cookies.get('_type_')
    }
  }

  componentWillMount() {
    // 调用userInfoApi
    // setState

    userInfoApi().then( res => {
      const { username, imgUrl } = res.data.message;
      this.setState({
        username,
        imgUrl
      })

    })
  }

  handleSearch(value) {
  
    linkTo(`/search?key=${value}`);
  }

  logout() {
    cookies.set('_token_', '');
    linkTo('/login');
  }

  render() {
    const { username, imgUrl, type } = this.state;
    console.log(username, imgUrl)
    
    return <header className="header">
      <Row>
        <Col span={2}></Col>
        <Col span={10}>
          <h1><img src="https://discoveryour6thsense.com/images/logo/peugeot_logo.svg" /></h1>
        </Col>
        <Col span={10}>
          <nav>
            <Row>
              <Col span={14}>
                <Search
                  defaultValue={keyword}
                  placeholder="可输入课程名称搜索相关课程"
                  onSearch={this.handleSearch}
                  style={{ width: 300 }}
                />
              </Col>
              <Col span={6}>
                <p className="header-user-name">{username} {type == 2 ? '老师' : '同学'}</p>
              </Col>
              <Col span={2}>
                <div className="header-avatar">
                  <Dropdown overlay={
                    <Menu>
                      {
                        type == 2 ? 
                        <Menu.Item>
                          <a href="/teacher">首页</a>
                        </Menu.Item> 
                        : <Menu.Item>
                          <a href="/index">首页</a>
                        </Menu.Item> 
                      }
                      <Menu.Item>
                        <a href="/account">个人资料</a>
                      </Menu.Item>
                      {
                        type == 2 ? <Menu.Item>
                          <a href="/course">课程管理</a>
                        </Menu.Item> : null
                      }
                      
                      <Menu.Item>
                        <a onClick={this.logout}>注销</a>
                      </Menu.Item>
                    </Menu>
                  }>
                    <Avatar shape="square" icon="user" src={`${server}${imgUrl}`} />
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
