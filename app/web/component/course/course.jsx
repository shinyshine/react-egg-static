import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import File from './components/file';
import List from './components/list';

import { Menu } from 'antd';

const handleClick = e => {
  console.log('click ', e);
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 'list' };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <BrowserRouter>
      <div className="main-container">
        <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="list">
            <Link to="/course">课程列表</Link>
          </Menu.Item>
          <Menu.Item key="file">
            <Link to="/course/file">课程资料</Link>
          </Menu.Item>
          {/* <Menu.Item key="homework">
            <Link to="/course/homework">课程班级</Link>
          </Menu.Item> */}
        </Menu>
        <Switch>
          <Route path="/course/file" component={File}/>
          <Route path="/course" component={List}/>
        </Switch>
      </div>
    </BrowserRouter>;
  }
}

export default App;
