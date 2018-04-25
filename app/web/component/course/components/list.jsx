import React, { Component } from 'react';
import { Button, List, Icon, Input, message, Popconfirm } from 'antd';

const { TextArea } = Input;

import { modifyCourse } from 'service/course'
import { getCourseApi, deleteCourse } from 'service/teacher'
import { linkTo } from 'utils'

const EditableCell = ({ editable, introduction, onChange}) => (
    <div>
        {editable
            ? <TextArea value={introduction} style={{width: '500px'}} onChange={e => onChange(e.target.value)} autosize />
            : introduction
        }
    </div>
)


export default class Notice extends Component {
  constructor(props) {
      super(props);

      this.state = {};
  }

  componentWillMount() {
    getCourseApi().then( res => {
      const data = res.data.data;

      this.setState({
        data: data ? data.list : []
      })

    })
  }
  handleInputChange(value, id) {

      const newData = [...this.state.data];
      const target = newData.filter( item => item.course_id === id)[0];

      if(target) {
        target['introduction'] = value;
      }

      this.setState({
        data: newData
      })
  }

  edit(key) {
    const newData = [...this.state.data];

    const target = newData.filter( item => item.course_id === key)[0];
    if(target) {
        target.editable = true;
    }

    this.setState({
        data: newData
    })
  }

  confirmEdit(key) {

    const newData = [...this.state.data];
    const target = newData.filter( item => item.course_id === key)[0];

    // 确认修改，需要调用接口
    modifyCourse({
      course_id: target.course_id,
      course_intro: target.introduction
    }).then( res => {
      if(res.data.success) {
        message.success('修改成功');
        delete target.editable;    
        this.setState({
            data: newData
        })
      }
        
    })
  }

  delete( course_id ) {
    console.log('course', course_id)
    deleteCourse({ course_id }).then( res => {
      if(res.data.success) {
        message.success('成功删除一门课程');
        window.location.reload();
      } else {
        message.error('出现错误，请稍后重试')
      }
    })

  }

  // 跳转到添加课程页面
  addCourse() {
    linkTo('/add');
  }
  render() {
    const { data } = this.state;
    return <div className="tab-container">
      <div className="btn-right-align">
       <Button type="primary" onClick={this.addCourse}><Icon type="plus" />添加课程</Button>
      </div>

      <List
        loading={!data}
        locale={{emptyText: '暂无课程'}}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item actions={[
                    !item.editable? <a onClick={() => this.edit(item.course_id)}>修改</a> : <a onClick={() => this.confirmEdit(item.course_id)}>确认修改</a>,  
                    <Popconfirm title="确认删除该课程及所有相关的数据？" okText="确认" cancelText="取消" onConfirm={this.delete.bind(this, item.course_id)}> 
                      <a>删除</a>
                    </Popconfirm>
                ]}>
                <List.Item.Meta 
                  title={<strong>{item.course_name}</strong>}
                  description={<EditableCell editable={item.editable} introduction={item.introduction} onChange={(value) => this.handleInputChange(value, item.course_id)} />}/>
            </List.Item>
        )}
    />
    </div>
  }
}
