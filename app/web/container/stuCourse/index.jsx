import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Breadcrumb, Icon, Menu } from 'antd'
import Homework from './components/homework';
import Notice from './components/notice';
import File from './components/file';

const tabKey = { '/incourse': 'homework', '/incourse/notice': 'notice', '/incourse/file': 'file' };
const queryString = require('query-string');
const class_id = queryString.parse(location.search).class;
const course_id = queryString.parse(location.search).course;
const class_name = queryString.parse(location.search).class_n;
const course_name = queryString.parse(location.search).course_n;
class App extends Component {
  constructor(props) {
    super(props);
    const { url } = props;

    console.log('url', url)
    this.state = { current: 'homework' };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <div className="main-container">
      <Breadcrumb>
        <Breadcrumb.Item href="/index">
          <Icon type="home" /> 首页
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>{course_name}</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {class_name}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="homework">
          <Link to={`/incourse${location.search}`}>我的作业</Link>
        </Menu.Item>
        <Menu.Item key="notice">
          <Link to={`/incourse/notice${location.search}`}>公告列表</Link>
        </Menu.Item>
        <Menu.Item key="file">
          <Link to={`/incourse/file${location.search}`}>课程资料</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/incourse" component={Homework}/>
        <Route exact path="/incourse/notice" component={Notice}/>
        <Route exact path="/incourse/file" component={File}/>
      </Switch>
    </div>;
  }
}

export default App;
