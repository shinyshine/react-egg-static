import React, { Component } from 'react';
import { Table, Button, Popconfirm, Select } from 'antd';
import { linkTo } from 'utils'

const Option = Select.Option;

import { joinCourseApi } from 'service/search'


  
// function SearchResult1({ data }) {

//     return <div className="search-reault">
//         <Table rowKey='course_id' columns={columns} dataSource={data} />
//     </div>
// }

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
            // filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {
              record.class.length > 0 ?
              record.class.map( item => {
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

    this.state = { data: props.data };

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
    console.log(record)
    // 请求接口加入该课程然后跳转到学生的首页展示刚刚选择的课程

    joinCourseApi({param: 123}).then( res => {
      console.log('res', res);
      linkTo(`index/${record.course_id}`);
      
    })
  }

  render() {
    const { data } = this.state;
    return <div className="search-reault">
        <Table rowKey="course_id" columns={this.columns} dataSource={data} />
    </div>
  }
}

export default SearchResult;