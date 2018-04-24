import React, { Component } from 'react';
import { Collapse, List, Avatar, Row, Col, Button, Icon, message, Popconfirm, Input } from 'antd';
const Panel = Collapse.Panel;
import './course.scss'

import { getCoursesByCurrentId } from 'service/course'
import { linkTo } from 'utils';



const data = [
    {
        course_id:24,
        update_time:null,
        tea_id:20141002426,
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2',
        tea_name:'tDiang',
        introduction: '11255'
    }, {
        course_id:25,
        update_time:null,
        tea_id:20141002426,
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2',
        tea_name:'tDiang',
        introduction: '11255'
    }, {
        course_id:26,
        update_time:null,
        tea_id:20141002426,
        create_time:'2018-04-12 21:54:28',
        course_name:'DB2',
        tea_name:'tDiang',
        introduction: '11255'
    }
]

const mock = [
    {
        course_id:19,
        tea_id:20141002412,
        create_time:'2018-04-09 16:30:05',
        class_id:20,
        tea_name:'tTracy',
        class_name:'1402'
    }, {
        course_id:23,
        tea_id:20141002412,
        create_time:'2018-04-09 16:30:05',
        class_id:21,
        tea_name:'tTracy',
        class_name:'1401'
    }, {
        course_id:12,
        tea_id:20141002412,
        create_time:'2018-04-09 16:30:05',
        class_id:22,
        tea_name:'tTracy',
        class_name:'1402'
    }, {
        course_id:154,
        tea_id:20141002412,
        create_time:'2018-04-09 16:30:05',
        class_id:23,
        tea_name:'tTracy',
        class_name:'1404'
    }
]

const ClassInput = ({ value, onChange }) => (
    <div>
        <Input value={value} style={{width: '160px'}} placeholder="请输入班级名称" />
    </div>
)
export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newClass: '',
            course: data
        }
    }

    componentWillMount() {
        const { course } = this.state;

        this.fetchClass(course[0].course_id)
    }
    fetchClass(course_id) {
        const newData = [...this.state.course];
        const target = newData.filter( item => item.course_id == course_id)[0];

        if(target.classList) return;

        target.classList = mock;
        this.setState({
            course: newData
        })


    }
    uploadFile(e) {
        e.stopPropagation();

    }

    addClassToCourse() {

    }

    handleInputChange(e) {
        console.log(e.target.value);
    }
    togglePannel(course_id) {
        if(course_id) {
            this.fetchClass(course_id)
        }
    }
 
    render() {
        const { newClass } = this.state;
        return <div className="course-list">
            <Row>
                <Col span={18}><p className="course-title">我的课程</p></Col>
                {/* <Col span={6}><div className="btn-right-align"><Button type="primary">添加课程</Button></div></Col> */}
            </Row>
            <Collapse defaultActiveKey={[data[0].course_id.toString()]} onChange={this.togglePannel.bind(this)} accordion>
                {
                    data ? data.map( item => {
                        return <Panel header={this.courseHeader(item.course_name, item.course_id)} key={item.course_id}>
                        <Popconfirm title={<ClassInput value={newClass} onChange={this.handleInputChange} />} okText="添加" cancelText="取消" onConfirm={this.addClassToCourse}>
                          <Button className="add-class-btn" size="small" type="primary"><Icon type="plus" />添加班级</Button>
                        </Popconfirm>
    
                        <List
                            itemLayout="horizontal"
                            dataSource={item.classList}
                            renderItem={classItem => (
                                <List.Item actions={[<a target="_blank" href={`/edit?class=${classItem.class_id}`}>发布公告</a>, <a target="_blank" href={`/class?cou=${classItem.course_id}&class=${classItem.class_id}`}>批改作业</a>,<a>删除</a>]}>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{classItem.class_name}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Panel>
                    }) : null
                }
            </Collapse>

        </div>
    }

    courseHeader(name, course_id) {
        return <div className="course-header">
            <Row>
                <Col span={17}>
                    {name}
                </Col>
                {/* <Col span={7}>
                    <div className="right-btn-group">
                        <Button type="primary" onClick={this.uploadFile.bind(this, course_id)}>上传资料</Button>
                    </div>
                    
                </Col> */}
            </Row>

        </div>
    }
}