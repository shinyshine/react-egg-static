import React, { Component } from 'react';
import { Button, List, Icon, Input } from 'antd';

const { TextArea } = Input;

import { modifyCourse } from 'service/course'
import { linkTo } from 'utils'
const data = [
  {
    course_id: 24,
    tea_id: '20141002418',
    create_time: '2018-04-12 21:54:28',
    course_name: 'DB2',
    tea_name: 'diangdiang',
    introduction: 'introductionintroductionintroduction here'
  },
  {
    course_id: 25,
    tea_id: '20141002418',
    create_time: '2018-04-12 21:54:28',
    course_name: 'DB2',
    tea_name: 'diangdiang',
    introduction: 'introductionintroductionintroduction here'
  },
  {
    course_id: 26,
    tea_id: '20141002418',
    create_time: '2018-04-12 21:54:28',
    course_name: 'DB2',
    tea_name: 'diangdiang',
    introduction: 'introductionintroductionintroduction here'
  },
  {
    course_id: 27,
    tea_id: '20141002418',
    create_time: '2018-04-12 21:54:28',
    course_name: 'DB2',
    tea_name: 'diangdiang',
    introduction: 'introductionintroductionintroduction here'
  }
];

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

      this.state = { data };
  }
  handleInputChange(value, id) {
      console.log(value, id);

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
    // modifyCourse(target).then( res => {
    //     delete target.editable;    
    //     this.setState({
    //         data: newData
    //     })
    // })

    delete target.editable;    
    this.setState({
        data: newData
    })

    
  }

  // 跳转到添加课程页面
  addCourse() {
    linkTo('add');
  }
  render() {
    const { data } = this.state;
    return <div className="tab-container">
      <div className="btn-right-align">
       <Button type="primary" onClick={this.addCourse}><Icon type="plus" />添加课程</Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item actions={[
                    !item.editable? <a onClick={() => this.edit(item.course_id)}>修改</a> : <a onClick={() => this.confirmEdit(item.course_id)}>确认修改</a>,  
                    <a>删除</a>
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
