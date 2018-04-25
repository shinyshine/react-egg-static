import React, { Component } from 'react';
import { List, Button, Spin } from 'antd';
import  './course.scss'

import { getStuClassApi } from 'service/class'
import { linkTo } from 'utils'
export default class Question extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        getStuClassApi().then( res => {
            console.log(res)
            const data = res.data.data;
            this.setState({
                course: data ? data.list : []
            })
        })
    }
    linkToCourse({ class_id, course_id, class_name, course_name}) {
        linkTo(`/incourse?class=${class_id}&course=${course_id}&course_n=${course_name}&class_n=${class_name}`)
    }


    render() {
        const { course } = this.state;
        console.log('course', course)

        return <div className="course-list">
            <h2>我的课程</h2>
            {
                course && course.length > 0 ?
                    <List
                    itemLayout="horizontal"
                    dataSource={course}
                    renderItem={item => (
                        <List.Item actions={[<Button onClick={this.linkToCourse.bind(this, item)} type="primary">进入课程</Button>]}>
                            <List.Item.Meta
                                title={<p><strong>{item.course_name}</strong> <span style={{marginLeft: '16px', fontSize: '14px', color: 'rgba(0,0,0,0.6)'}}>{item.class_name} &nbsp;&nbsp;{item.tea_name}老师</span></p>}
                                description={
                                    <div>
                                        {item.newest ? 
                                            <div>
                                                <p>{item.newest[0].content}</p>
                                                <p>截止时间：{item.newest[0].end_time}</p>
                                            </div> : null}
                                        
                                    </div>
                            }
                            />
                        </List.Item>
                    )}
                />
                : ( course && course.length == 0 ? 
                    <div style={{textAlign: 'center'}}>暂无数据</div>
                    : <div style={{textAlign: 'center'}}><Spin /></div>
                )
            }
            
        </div>
    }
}