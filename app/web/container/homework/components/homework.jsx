import React, { Component } from 'react';

import { Collapse, Table, Divider, Modal, Row, Col, Card, Popover } from 'antd';
const Panel = Collapse.Panel;
import matchScore from 'utils/score';
import { connect } from 'react-redux';
import { grade, load } from './../actions'
import Pop from './pop';

import { fetchStuList } from 'service/homework'
const mock = [
  {
    stu_id:20141002426,
    filename:'CareerFrog_简历模板_中文(1).docx',
    create_time:'2018-04-09 23:45:32',
    grade: 3,
    file_id:'4242541de6bf4f1cafb38569c3ba78ad',
    class_id:21,
    stu_name:'diang',
    task_id:16,
    submit_tid:39,
    url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx',
    email: '32323232',
    phone: '123123231'
  },
  {
    stu_id:20141002426,
    filename:'CareerFrog_简历模板_中文(1).docx',
    create_time:'2018-04-09 23:45:32',
    grade: 3,
    file_id:'4242541de6bf4f1cafb38569c3ba78ad',
    class_id:21,
    stu_name:'diang',
    task_id:16,
    submit_tid:39,
    url:'/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx',
    email: '32323232',
    phone: '123123231'
  }
]
const hHeader = (item) => {
  return <Row>
    <Col span={16}>{item.title}</Col>
    <Col span={8}><p className="deadline">截止时间: {item.end_time}</p></Col>
  </Row>
}

const StuContent = ({record}) => (
  <div>
    <p>学号：{record.stu_id}</p>
    <p>邮箱：{record.email}</p>
    <p>电话：{record.phone}</p>
  </div>
);
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      gradeAction: false
    }


    this.columns = [{
      title: '学生姓名',
      dataIndex: 'stu_name',
      key: 'stu_name'
    }, {
      title: '学号',
      dataIndex: 'stu_id',
      key: 'stu_id',
    }, {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
    }, {
      title: '作业状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        // let status = record.status;
        let txt = matchScore[record.grade];
        // let cls = !status ? 'red' : 'green';

        let cls = record.grade ? 'green' : 'red';

        return <span className={cls}>{txt}</span>
      }
    },{
      title: '',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() => this.showPop(record)}>查看作业</a>
          <Divider type="vertical" />
          <Popover content={<StuContent record={record} />} title={record.stu_name} trigger="click">
            <a>查看学生</a>
          </Popover>
          <Divider type="vertical" />
          <a href="javascript:void(0)">删除</a>
        </span>
      ),
    }];
    
  }

  
  componentWillMount() {
    
  }

  showStuInfo(stu_id) {
    const info = {
      imgUrl:null,
      id:'20141002426',
      email:'3939293@qq.com',
      username:'diang'
    }

    const newData = [...this.state.info];

    if(newData[stu_id]) return;
    newData[stu_id] = info;
    this.setState({
      info: newData
    })
  }


  showPop(modalItem) {
    this.setState({
      visible: true,
      modalItem,
      gradeAction: false
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  onComment(task_id, submit_tid, data) {
    // 评分动作
    // 触发action grade
    this.props.makeGrade(task_id, submit_tid, data)

    // TODO: 寻找更好的解决方案
    this.setState({
      gradeAction: true
    })

  }
  switchPanel(val) {
    // 切换panel要重新加载数据
    // 加载该panel下的学生作业

    console.log('switch',val)
    const { homework } = this.props;
    if(!homework[val]) {
      this.props.setSubmitted(val, mock)

    }


  }

  render() {
    const { visible, modalItem, gradeAction } = this.state;
    const { homework, list } = this.props;

    console.log('homework', homework)
    console.log('modalItem', modalItem)

    const active = list[0] && (list[0].task_id + '');  // to string
    return (
      <div className="homework-container">
        <Collapse defaultActiveKey={[active]} onChange={this.switchPanel.bind(this)} accordion>
          {
            list && list.map( item => {
              return <Panel header={hHeader(item)} key={item.task_id}>
                <Card style={{ width: 600, margin:'0 auto 10px' }}>
                  <p>{item.content}</p>
                </Card>
                <Table columns={this.columns} dataSource={homework[item.task_id]} />
              </Panel>
            })
          }
          
        </Collapse>
        <Pop visible={visible} modalItem={modalItem} onComment={this.onComment.bind(this)} action={gradeAction} handleCancel={this.handleCancel.bind(this)} />

      </div>
      
    )
  }
}

const mapStateToProps = ( state ) => {
  const { homework, list } = state;
  return {
    homework,
    list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeGrade: (task_id, submit_tid, score) => dispatch(grade(task_id, submit_tid, score)),
    setSubmitted: (task_id, list) => dispatch(load(task_id, list))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Course);
