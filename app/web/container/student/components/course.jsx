import React, { Component } from 'react';
import { List, Button } from 'antd';
import  './course.scss'
const data = [
    {
        course_name: '数据结构',
        stu_class: '杨志增',
        last_notice: '这是最近的一次公告,比如：明天停课，大家不要来了，好好准备期末考试blabla的'

    },
    {
        course_name: '嵌入式工程设计',
        stu_class: '杨志增',
        last_notice: '这是最近的一次公告,比如：明天停课，大家不要来了，好好准备期末考试blabla的'

    },
    {
        course_name: '操作系统实践',
        stu_class: '杨志增',
        last_notice: '这是最近的一次公告,比如：明天停课，大家不要来了，好好准备期末考试blabla的'

    },
    {
        course_name: '人工智能',
        stu_class: '杨志增',
        last_notice: '这是最近的一次公告,比如：明天停课，大家不要来了，好好准备期末考试blabla的'

    },
];

const mock = [
    {
        course_id:24,
        tea_id:20141002426,
        course_name:'DB2de',
        class_id:23,
        tea_name:'tDiang',
        class_name:'数据库1班',
        latest: '最近的一条公告'
    },{
        course_id:25,
        tea_id:20141002426,
        course_name:'DB2de',
        class_id:23,
        tea_name:'tDiang',
        class_name:'数据库1班',
        latest: '最近的一条公告'
    },{
        course_id: 26,
        tea_id:20141002426,
        course_name:'DB2de',
        class_id:23,
        tea_name:'tDiang',
        class_name:'数据库1班',
        latest: '最近的一条公告'
    },{
        course_id:27,
        tea_id:20141002426,
        course_name:'DB2de',
        class_id:23,
        tea_name:'tDiang',
        class_name:'数据库1班',
        latest: '最近的一条公告'
    },
]
export default class Question extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    


    render() {
        return <div className="course-list">
            <h2>我的课程</h2>
            <List
                itemLayout="horizontal"
                dataSource={mock}
                renderItem={item => (
                    <List.Item actions={[<Button type="primary">进入课程</Button>]}
                    >
                        <List.Item.Meta
                            title={<p><strong>{item.course_name}</strong><strong style={{marginLeft: '16px'}}>{item.tea_name}</strong></p>}
                            description={<p>{item.latest}</p>}
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}