import React, { Component } from 'react';
import { List, Button } from 'antd';

const mock = [
    {
        filename:null,
        tea_id:20141002426,
        create_time:'2018-04-15 10:25:48',
        class_id:19,
        file_id:null,
        tea_name:'tDiang',
        title:'第五周实验课',
        notice_id:4,
        content:'请同学们去实验室A3上课',
        url:null
    }, {
        filename:null,
        tea_id:20141002426,
        create_time:'2018-04-15 10:25:48',
        class_id:19,
        file_id:null,
        tea_name:'tDiang',
        title:'第五周实验课',
        notice_id:5,
        content:'请同学们去实验室A3上课',
        url:null
    }, {
        filename:null,
        tea_id:20141002426,
        create_time:'2018-04-15 10:25:48',
        class_id:19,
        file_id:null,
        tea_name:'tDiang',
        title:'第五周实验课',
        notice_id:6,
        content:'请同学们去实验室A3上课',
        url:null
    }
]
export default class Question extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.notice_list = mock;
    }


    render() {
        const notice = this.notice_list;
        return <div className="tab-container">
            <List
                itemLayout="horizontal"
                dataSource={notice}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<strong>{item.title}</strong>}
                            description={<div><p>{item.content}</p></div>}
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}