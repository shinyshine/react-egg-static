import React, { Component } from 'react';
import { List, Button } from 'antd';
import { fileListApi } from 'service/course'

import { server } from 'config/config.server'

const queryString = require('query-string');
const class_id = queryString.parse(location.search).class;
const course_id = queryString.parse(location.search).course;

const FinishedFile = ({ item }) => (
    <div className="ant-upload-list-item ant-upload-list-item-done">
        <div className="ant-upload-list-item-info">
            <span><i className="anticon anticon-paper-clip"></i>
            <span className="ant-upload-list-item-name" title={item.filename}><a href={`${server}${item.url}`}>{item.filename}</a></span></span>
        </div>
    </div> 
)
export default class Question extends Component {
    constructor() {
        super();

        this.state = {}
    }

    componentWillMount() {
        fileListApi({course_id}).then( res => {
            console.log('file list', res)
            const data = res.data.data;

            this.setState({
                file: data ? data.list : []
            })
        })
    }


    render() {
        const { file } = this.state;
        return <div className="tab-container">
            <List
                loading={!file}
                locale={{emptyText: '暂无相关课程资料'}}
                itemLayout="horizontal"
                dataSource={file}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<strong>{item.title}</strong>}
                            description={
                                <div>
                                    <p>{item.content}</p>
                                    <FinishedFile item={item} />
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}