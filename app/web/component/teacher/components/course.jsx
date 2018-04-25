import React, { Component } from 'react';
import { Collapse, List, Avatar, Row, Col, Button, Icon, message, Popconfirm, Input, Spin } from 'antd';
const Panel = Collapse.Panel;
import './course.scss'

import { getCourseApi, getAllClassApi, addClassApi, deleteClassApi } from 'service/teacher'
import { linkTo } from 'utils';

const ClassInput = ({ value, onChange }) => (
    <div>
        <Input value={value} style={{width: '160px'}} placeholder="请输入班级名称" onChange={onChange} />
    </div>
)
export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: []
        }
    }

    componentWillMount() {

        getCourseApi().then( res => {
            console.log(res);
            const data = res.data.data;

            this.setState({
                course: data ? data.list : []
            })

            if(data && data.list) {
                this.fetchClass(data.list[0].course_id)
            }

        })

        
    }
    fetchClass(course_id) {
        const newData = [...this.state.course];
        const target = newData.filter( item => item.course_id == course_id)[0];

        if(target.classList) return;

        getAllClassApi({ course_id }).then( res => {
            console.log(res);
            const data = res.data.data;
            target.classList = data.list || [];
            this.setState({
                course: newData
            })
        })

    }
    uploadFile(e) {
        e.stopPropagation();

    }

    addClassToCourse(course_id) {
        const newData = [...this.state.course];
        const target = newData.filter(item => item.course_id === course_id)[0];
        const options = {
            course_id,
            class_name: target.new_class
        }
        addClassApi(options).then( res => {
            if( res.data.success) {
                message.success('成功添加班级');

                target.classList.unshift(res.data.message.class_info);

                this.setState({
                    course: newData
                })
            } else {
                message.error(res.data.error);
            }
            
        })
    }

    handleInputChange(e, course_id) {

        console.log(e, course_id)
        const newData = [...this.state.course];
        const target = newData.filter( item => item.course_id === course_id)[0];
        target.new_class = e.target.value;

        this.setState({
            course: newData
        })
    }
    togglePannel(course_id) {
        if(course_id) {
            this.fetchClass(course_id)
        }
    }
    delete( class_id ) {
        console.log(class_id)
        deleteClassApi({ class_id }).then( res => {
            if(res.data.success){
                message.success('成功删除一个班级');
                window.location.reload();
            } else {
                message.error('出现错误，请稍后重试')
            }
        })
    }
    linkToUpload({ course_id, course_name }) {
        linkTo(`/upload?cid=${course_id}&c_name=${course_name}`)
    }
 
    render() {
        const { course } = this.state;
        return <div className="course-list">
            <Row>
                <Col span={18}><p className="course-title">我的课程</p></Col>
            </Row>
            { course.length > 0 ?
                <Collapse defaultActiveKey={[course[0].course_id.toString()]} onChange={this.togglePannel.bind(this)} accordion>
                {
                    course ? course.map( item => {
                        return <Panel header={this.courseHeader(item.course_name, item.course_id)} key={item.course_id}>
                        <Popconfirm title={<ClassInput value={item.new_class} onChange={(e) => this.handleInputChange(e, item.course_id)} />} okText="添加" cancelText="取消" onConfirm={this.addClassToCourse.bind(this, item.course_id)}>
                          <Button className="add-class-btn" size="small" type="primary"><Icon type="plus" />添加班级</Button>
                        </Popconfirm>
                        <Button style={{marginLeft: '20px'}} onClick={this.linkToUpload.bind(this, item)} className="add-class-btn" size="small" type="primary">上传资料</Button>
                        
                        { item.classList ?
                            <List
                                itemLayout="horizontal"
                                dataSource={item.classList}
                                renderItem={classItem => (
                                    <List.Item actions={[
                                        <a href={`/edit?class_id=${classItem.class_id}&course_n=${item.course_name}&class_n=${classItem.class_name}&type=n`}>发布公告</a>,
                                        <a href={`/edit?class_id=${classItem.class_id}&course_n=${item.course_name}&class_n=${classItem.class_name}&type=h`}>布置作业</a>,  
                                        <a href={`/class?cou=${classItem.course_id}&class_id=${classItem.class_id}&course_n=${item.course_name}&class_n=${classItem.class_name}`}>进入班级</a>,
                                        <Popconfirm title="确认删除该班级以及相关数据？" okText="确认" cancelText="取消" onConfirm={this.delete.bind(this, classItem.class_id)}>
                                            <a>删除</a>
                                        </Popconfirm>]}>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{classItem.class_name}</a>}
                                        />
                                    </List.Item>
                                )}
                            /> : <p>该课程暂无班级</p>
                        } 
                        
                    </Panel>
                    }) : null
                }
                </Collapse>
                : <div style={{textAlign: 'center'}}><Spin /></div>
            }
            

        </div>
    }

    courseHeader(name, course_id) {
        return <div className="course-header">
            <Row>
                <Col span={17}>
                    {name}
                </Col>
            </Row>

        </div>
    }
}