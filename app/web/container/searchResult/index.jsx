import React, { Component } from 'react';
import { Table, Button, Popconfirm, Select, Spin, message } from 'antd';
import { linkTo } from 'utils'

const Option = Select.Option;

import { joinCourseApi } from 'service/student'

import { searchCourseApi } from 'service/course'

const queryString = require('query-string');

const keyword = queryString.parse(location.search).key;
  
class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.columns = [{
      title: '课程名称',
      dataIndex: 'course_name',
      key: 'course_name'
    }, {
      title: '课程老师',
      dataIndex: 'tea_name',
      key: 'tea_name',
    }, {
      title: '课程简介',
      dataIndex: 'introduction',
      key: 'introduction',
      width: '40%'
    },{
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div>
          <Select
            style={{ width: 120, marginRight: '12px' }}
            placeholder="未选择班级"
            onChange={(value) => this.handleSelect(value, record)}
          >
            {
              record.class_list && record.class_list.length > 0 ?
              record.class_list.map( item => {
                return <Option value={item.class_id}>{item.class_name}</Option>
              })
              : null
            }
          </Select>
          <Popconfirm cancelText="取消" okText="确定" title="确定加入该课程?" onConfirm={() => this.joinCourse(record)}>
              <Button type="primary" disabled={record.selected ? false : true}>加入课程</Button>
          </Popconfirm>
        </div>
        
      ),
    }];

    this.state = {}

  }

  componentWillMount() {
    searchCourseApi({ course_name: keyword }).then( res => {
        console.log(res)

        const data = res.data.message;

        this.setState({
            data: data ? data.list : []
        })
    })
}


  // 选择某个班级后
  handleSelect(value, record) {
    console.log(value, record)

    const newData = [...this.state.data];
    const target = newData.filter( item => record.course_id === item.course_id)[0];

    target.selected = value;

    this.setState({
      data: newData
    })
  }

  joinCourse(record) {
    // 请求接口加入该课程然后跳转到学生的首页展示刚刚选择的课程
    joinCourseApi({class_id: record.selected}).then( res => {
      console.log('res', res);

      if(res.data.success) {
        message.success('成功加入该课程');
        linkTo('/index');
      } else {
        message.error('出现错误，请稍后重试')
      }
    })
  }

  render() {
    const { data } = this.state;

    console.log('data', data)
    return <div className="search-reault">
        {
          data && data.length ? 
          <Table rowKey="course_id" columns={this.columns} dataSource={data} />
          : (data && data.length == 0 ? <div style={{textAlign: 'center'}}>无相关搜索结果</div> : <div style={{textAlign: 'center'}}><Spin /></div>)
        }
    </div>
  }
}

export default SearchResult;