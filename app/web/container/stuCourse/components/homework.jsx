import React, { Component } from 'react';
import { List, Button, Upload, message, Row, Col, Divider } from 'antd';
const queryString = require('query-string');

import { uploadApi, submitWorkApi } from 'service/file'
import { getStuTaskApi, getStuFinishedTaskApi, submitTaskApi } from 'service/task';

import { uploadProps } from 'service/upload';
import matchScore from 'utils/score'

const class_id = queryString.parse(location.search).class;



const FinishedFile = ({ item }) => (
    <div className="ant-upload-list-item ant-upload-list-item-done">
        <div className="ant-upload-list-item-info">
            <span><i className="anticon anticon-paper-clip"></i>
            <span className="ant-upload-list-item-name" title={item.url}><a href={item.filename}>{item.filename}</a></span></span>
        </div>
    </div> 
)
export default class Question extends Component {
    constructor() {
        super();
        this.state = {}

    }

    componentWillMount() {
        console.log('class', class_id)

        getStuTaskApi({ class_id }).then( res => {
            console.log('res 1', res);
            const data = res.data.data;
            this.setState({
                finished: data ? data.list : []
            })
        })

        getStuFinishedTaskApi({ class_id }).then( res => {
            console.log('res 2', res)
            const data = res.data.data;
            this.setState({
                unfinished: data ? data.list : []
            })
        })
    }

    uploadChange(info, task_id) {

        // 这里请求提交作业的接口
        if (info.file.status === 'done') {
            const file_id = info.file.response.file_id;

            submitTaskApi({
                file_id,
                task_id
            }).then( res => {
                console.log('submit res', res);

                if(!res.data.success) {
                    message.error('作业已过期，上传无效');
                }else {
                    message.success('作业提交成功')
                }

                this.updateData(info, task_id);
                
            })
            
        }

    }

    updateData(file, task_id) {
        const newData = [...this.state.unfinished];

        const target = newData.filter( item => item.task_id === task_id)[0];
        console.log('update data target', target)
        

        target.filename = file.file.name;
        target.url = '/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc';

        this.setState({
            unfinished: newData
        })
    }

    render() {
        const { finished, unfinished } = this.state;

        console.log('finished', finished);
        console.log('unfinished', unfinished)

        return <div className="tab-container">
            {/* <Divider orientation="left">未提交</Divider> */}
            <List
                loading={!unfinished}
                locale={{emptyText: ''}}
                itemLayout="horizontal"
                dataSource={unfinished}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <Row>
                                    <Col span={12}><strong>{item.title}</strong></Col>
                                    <Col span={8}><span className="deadline">截止日期: {item.end_time}</span></Col>
                                </Row>
                            }
                            description={
                            <div>
                                <p style={{marginBottom: '8px'}}>{item.content}</p>
                                {
                                    item.filename ? <FinishedFile item={item} />
                                    : <Upload name="logo" {...uploadProps} onChange={(e) => this.uploadChange(e, item.task_id)}>
                                        <Button type="primary">
                                            提交作业
                                        </Button>
                                      </Upload>
                                }
                            </div>}
                        />
                    </List.Item>
                )}
            />

            <Divider>已提交</Divider>

            <List
                loading={!finished}
                locale={{emptyText: '暂无已提交数据'}}
                itemLayout="horizontal"
                dataSource={finished}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<strong>{item.title} </strong>}
                            description={
                                <div>
                                    <p>{item.content}</p>
                                    <FinishedFile item={item} />
                                    <p>评分：{matchScore[item.grade]}</p>
                                    <p>老师评价：{item.remark}</p>
                                </div>}
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}