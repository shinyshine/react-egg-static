import React, { Component } from 'react';
import { List, Button } from 'antd';


const mock = [
    {
        course_id:11,
        filename:'Jessy_HSBC.doc',
        create_time:'2018-04-15 13:13:03',
        tea_id:20141002426,
        file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
        id:9,
        tea_name:'tDiang',
        url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc',
        title: '第五周的ppt',
        content: '请认真阅读ppt ok？？？？'
    },{
        course_id:11,
        filename:'Jessy_HSBC.doc',
        create_time:'2018-04-15 13:13:03',
        tea_id:20141002426,
        file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
        id:10,
        tea_name:'tDiang',
        url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc',
        title: '第五周的ppt',
        content: '请认真阅读ppt   ok？？？？'
    },{
        course_id:11,
        filename:'Jessy_HSBC.doc',
        create_time:'2018-04-15 13:13:03',
        tea_id:20141002426,
        file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
        id:911,
        tea_name:'tDiang',
        url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc',
        title: '第五周的ppt',
        content: '请认真阅读ppt   ok？？？？'
    },{
        course_id:11,
        filename:'Jessy_HSBC.doc',
        create_time:'2018-04-15 13:13:03',
        tea_id:20141002426,
        file_id:'56db8e9f08ba43d8b2ed15c13ecef41c',
        id:92,
        tea_name:'tDiang',
        url:'/fileDir/u/2018-03-13/dc0b7b03e6ce4e89866bb61892209492Jessy_HSBC.doc',
        title: '第五周的ppt',
        content: '请认真阅读ppt   ok？？？？'
    }
]

const FinishedFile = ({ item }) => (
    <div className="ant-upload-list-item ant-upload-list-item-done">
        <div className="ant-upload-list-item-info">
            <span><i className="anticon anticon-paper-clip"></i>
            <span className="ant-upload-list-item-name" title={item.filename}><a href={item.url}>{item.filename}</a></span></span>
        </div>
    </div> 
)
export default class Question extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }


    render() {
        return <div className="tab-container">
            <List
                itemLayout="horizontal"
                dataSource={mock}
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