import React, { Component } from 'react';
import { List, Button, Upload, message } from 'antd';

import { uploadApi, submitWorkApi } from 'service/file'
const data = [
    {
        title: '数据结构第九次作业',
        content: '课本89页课后练习题第3，4，5',
        deadline: '2018-04-04'


    },
    {
        title: '数据结构第八次作业',
        content: '课本89页课后练习题第3，4，5',
        deadline: '2018-04-04'


    },
    {
        title: '数据结构第七次作业',
        content: '课本89页课后练习题第3，4，5',
        deadline: '2018-04-04'


    },
    {
        title: '数据结构第六次作业',
        content: '课本89页课后练习题第3，4，5',
        deadline: '2018-04-04'


    },
];

const mock1 = [
    {
        filename:'CareerFrog_简历模板_中文(1).docx',
        grade: 'A+',
        task_id:8,
        submit_tid:8,
        title: '数据3第一章作业',
        content: '请完成1.5',
        url: '/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
    },{
        filename:'CareerFrog_简历模板_中文(1).docx',
        grade: 'A+',
        task_id:9,
        submit_tid:9,
        title: '数据3第二章作业',
        content: '请完成1.5',
        url: '/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
    },{
        filename:'CareerFrog_简历模板_中文(1).docx',
        grade: 'A+',
        task_id:10,
        submit_tid:10,
        title: '数据3第三章作业',
        content: '请完成1.5',
        url: '/fileDir/u/2018-03-13/14a8ec60100946e28fa4e2b414cb74ccCareerFrog_简历模板_中文(1).docx'
    },
]
const mock2 = [
    {
        tea_id:20141002426,
        create_time:'2018-04-10 11:09:11',
        class_id:21,
        end_time:'2018-04-11 00:00:00',
        task_id:10,
        tea_name:'tDiang',
        title:'数据第四章作业',
        content:'请完成4.5',
    },
    {
        tea_id:20141002426,
        create_time:'2018-04-10 11:09:11',
        class_id:21,
        end_time:'2018-04-11 00:00:00',
        task_id:11,
        tea_name:'tDiang',
        title:'数据第四章作业',
        content:'请完成4.5',
    }
]

let file_id = 0;
const uploadProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    // onChange(info) {
    //   if (info.file.status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //     console.log('info', info)
    //     console.log('success', info.file.response.id);
    //     file_id = info.file.response.id;

    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
  };

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

    }

    componentDidMount() {

    }

    componentWillMount() {
        this.setState({
            finished: mock1,
            unfinished: mock2
        })
    }

    uploadChange(info, task_id) {

        // 这里请求提交作业的接口
        if (info.file.status === 'done') {
            this.updateData(info, task_id);
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

        return <div className="tab-container">
            <List
                itemLayout="horizontal"
                dataSource={unfinished}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<strong>{item.title} <span className="deadline">截止日期: {item.end_time}</span></strong>}
                            description={
                            <div>
                                <p>{item.content}</p>
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

            <List
                itemLayout="horizontal"
                dataSource={finished}
                renderItem={item => (
                    <List.Item actions={[<Button type="primary" disabled>已提交</Button>]}>
                        <List.Item.Meta
                            title={<strong>{item.title} </strong>}
                            description={
                                <div>
                                    <p>{item.content}</p>
                                    <FinishedFile item={item} />
                                    <p>评分：{item.grade}</p>
                                </div>}
                        />
                    </List.Item>
                )}
            />
        </div>
    }
}