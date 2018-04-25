import React, { Component } from 'react';

import { Table, Spin } from 'antd';
import { getStudentsApi } from 'service/class'

const columns = [{
  title: '姓名',
  dataIndex: 'stu_name',
  key: 'stu_name'
},{
  title: '学号',
  dataIndex: 'stu_id',
  key: 'stu_id'
},{
  title: '邮箱',
  dataIndex: 'email',
  key: 'email'
},{
  title: '手机号码',
  dataIndex: 'phone',
  key: 'phone'
},{
  title: '操作',
  key: 'action',
  render: (text, record) => {
    console.log('text', text)
    console.log('recordd', record)

    return <span><a href="#">删除</a></span>
  }
}]

// const data = [{
//   stu_name: '李素珍',
//   stu_id: '20141002418',
//   email: '393235901@qq.com',
//   phone: '18826103726'
// },{
//   stu_name: '罗晓彤',
//   stu_id: '20141002426',
//   email: '332388784@qq.com',
//   phone: '18826103737'
// },{
//   stu_name: '罗大姐',
//   stu_id: '20141002418',
//   email: '393235901@qq.com',
//   phone: '18826103726'
// },{
//   stu_name: '李大妈',
//   stu_id: '20141002418',
//   email: '393235901@qq.com',
//   phone: '18826103726'
// },{
//   stu_name: '李公公',
//   stu_id: '20141002418',
//   email: '393235901@qq.com',
//   phone: '18826103726'
// },]



export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { class_id } = this.props;

    getStudentsApi({ class_id }).then( res => {
      const data = res.data.data;

      this.setState({
        list: data ? data.list : []
      })
    })
  }
  render() {
    const { list } = this.state;
    return <div className="stu_list">
      {
        list && list.length > 0 ?
          <Table columns={columns} dataSource={list} />
          : (
            list && list.length == 0 ? <div style={{textAlign: 'center'}}>暂无数据</div>
            : <div style={{textAlign: 'center'}}><Spin /></div>
          )
      }
    </div>
  }
}
