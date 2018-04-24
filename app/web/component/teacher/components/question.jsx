import React, { Component } from 'react';
import { List } from 'antd';

const data = [
    {
        title: '这是讨论板的title - 1',
    },
    {
        title: '这是讨论板的title - 2',
    },
    {
        title: '这是讨论板的title - 3',
    },
    {
        title: '这是讨论板的title - 4',
    },
];
export default class Teacher extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }


    render() {
        return <div className="question-list">
            <h2>讨论板</h2>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="这是讨论板提出的问题"
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}