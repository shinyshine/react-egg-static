import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homework from './components/homework';
import Notice from './components/notice';
import File from './components/file';

import { Menu, Icon } from 'antd';

const tabKey = { '/incourse': 'homework', '/incourse/notice': 'notice', '/incourse/file': 'file' };
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
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="homework">
          <Link to="/incourse">我的作业</Link>
        </Menu.Item>
        <Menu.Item key="notice">
          <Link to="/incourse/notice">公告列表</Link>
        </Menu.Item>
        <Menu.Item key="file">
          <Link to="/incourse/file">课程资料</Link>
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
