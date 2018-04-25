import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homework from './components/homework';
import Status from './components/status';
import Students from './components/students';
import Task from './components/task'
import Notice from './components/notice'

import { Menu, Icon, Breadcrumb } from 'antd';

const tabKey = { '/class': 'homework', '/class/stu': 'student', '/class/homework': 'status' };
class App extends Component {
  constructor(props) {
    super(props);
    const { url, query } = props;
    console.log(props)
    this.state = { 
      current: tabKey[url.split('?')[0]],
      search: `?cou=${query.cou}&class_id=${query.class_id}&course_n=${query.course_n}&class_n=${query.course_n}`
    };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    console.log(this.props.query)
    const { class_id, class_n, course_n } = this.props.query;
    const { search } = this.state;
    return <div className="main-container">
      <Breadcrumb>
          <Breadcrumb.Item href="/teacher">
          <Icon type="home" /> 首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>
          <span>{course_n}</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
          {class_n}
          </Breadcrumb.Item>
      </Breadcrumb>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="homework">
          <Link to={`/class${search}`}>学生作业</Link>
        </Menu.Item>
        <Menu.Item key="taskList">
          <Link to={`/class/task${search}`}>作业记录</Link>
        </Menu.Item>
        <Menu.Item key="noticeList">
          <Link to={`/class/notice${search}`}>公告记录</Link>
        </Menu.Item>
        {/* <Menu.Item key="status">
          <Link to="/class/status">统计数据</Link>
        </Menu.Item> */}
        <Menu.Item key="student">
          <Link to={`/class/stu${search}`}>学生列表</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/class" component={() => <Homework class_id={class_id} />}/>
        <Route exact path="/class/task" component={() => <Task class_id={class_id} />}/>
        <Route exact path="/class/notice" component={() => <Notice class_id={class_id} />}/>
        {/* <Route exact path="/class/status" component={Status}/> */}
        <Route exact path="/class/stu" component={() => <Students class_id={class_id} />}/>
      </Switch>
    </div>;
  }
}

export default App;
