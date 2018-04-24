import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Menu, Icon } from 'antd';

const tabKey = { '/class': 'homework', '/class/stu': 'student', '/class/homework': 'status' };
class App extends Component {
  constructor(props) {
    super(props);
    const { url } = props;
    this.state = { current: tabKey[url] };
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
          <Link to="/class">学生作业</Link>
        </Menu.Item>
        <Menu.Item key="status">
          <Link to="/class/status">统计数据</Link>
        </Menu.Item>
        <Menu.Item key="student">
          <Link to="/class/stu">学生列表</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/class" component={Homework}/>
        <Route exact path="/class/status" component={Status}/>
        <Route exact path="/class/stu" component={Students}/>
      </Switch>
    </div>;
  }
}

export default App;
