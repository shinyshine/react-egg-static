import React, { Component } from 'react';
import { List, Icon, Spin, Popconfirm } from 'antd';

import { getTasksApi } from 'service/task'

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        const { class_id } = this.props;

        getTasksApi({ class_id }).then( res => {
            console.log(res);
            const data = res.data.data;
            
            this.setState({
                task: data ? data.list : []
            })
        })

    }

    delete() {
        
    }

    render() {
        const { task } = this.state;
        console.log('task', task)
        return <div className="tab-container">
            {(() => {
                if(task && task.length != 0) {
                    return <List
                        itemLayout="horizontal"
                        dataSource={task}
                        renderItem={item => (
                            <List.Item actions={[
                                <Popconfirm title="确认删除该次作业？" okText="确认" cancelText="取消" onConfirm={this.delete.bind(this, item.class_id)}>
                                    <a>删除</a>
                                </Popconfirm>
                            ]}>
                                <List.Item.Meta 
                                title={<strong>{item.title}</strong>}
                                description={
                                    <div>
                                        <p>截止时间：{item.end_time}</p>
                                        <p>{item.content}</p>
                                    </div>
                                } />
                            </List.Item>
                        )}
                    />
                } else if(task && task == 0) {
                    return <div style={{textAlign: 'center'}}>暂无数据</div>
                } else {
                    return <div style={{textAlign: 'center'}}><Spin /></div>
                }
            })()}

        </div>
    }
}