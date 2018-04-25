import React, { Component } from 'react';
const queryString = require('query-string');
import {Input, Form, Select, Button, Upload, Icon, DatePicker, message, Breadcrumb, Menu } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

import { linkTo } from 'utils'

import { createTaskApi, createNoticeApi } from 'service/notice'
const labelData = {
    n: {
        title: '发布公告',
        title_label: '公告标题',
        content_label: '公告内容',
        title_valid: '公告标题不能为空',
        content_valid: '公告内容不能为空',
        deadline: '截止时间'
    },
    h: {
        title: '布置作业',
        title_label: '作业标题',
        content_label: '作业内容',
        title_valid: '作业标题不能为空',
        content_valid: '作业内容不能为空',
        deadline_valid: '截止时间不能为空',
        deadline: '截止时间'
    }
}
const type = queryString.parse(location.search).type;

const classId = queryString.parse(location.search).class_id;
const class_n = queryString.parse(location.search).class_n;
const course_n = queryString.parse(location.search).course_n;
const textData = labelData[type];
class Edit extends Component{
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // console.log(values.deadline.valueOf());
            if(!err) {
                const date = values.deadline;
                values.class_id = classId;
                if(type === 'h') {
                    // 发布作业
                    // values.ent_time = `${date.year()}-${date.month()+1}-${date.date()}`;
                    values.end_time = values.deadline.valueOf();
                    console.log('values', values)
                    delete values.deadline;
                    
                    createTaskApi(values).then( res => {
                        console.log(res);

                        if(res.data.success) {
                            message.success('布置作业成功');
                            linkTo('/teacher')
                        }
                    })
                } else {
                    console.log(values);
                    createNoticeApi(values).then( res => {
                        console.log('notice', res)

                        if(res.data.success) {
                            message.success('新增了一条公告');
                            linkTo('/teacher')
                        }
                    })
                }
            }
            

        });
    }
    normFile (e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="main-container">
            <Breadcrumb>
                <Breadcrumb.Item href="/teacher">
                <Icon type="home" /> 首页
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <span>{course_n}</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                {class_n}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="form-container">
                <h2 className="sub-title">{textData.title}</h2>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label={textData.title_label}>
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: textData.title_valid
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    { type === 'h' && <FormItem label={textData.deadline}>
                            {getFieldDecorator('deadline', {
                                rules: [{
                                    required: true,
                                    message: textData.deadline_valid
                                }]
                            })(
                                <DatePicker />
                            )}
                        </FormItem>
                    }
                    
                    

                    <FormItem label={textData.content_label}>
                        {getFieldDecorator('content', {
                            rules: [{
                                required: true,
                                message: textData.content_valid
                            }]
                        })(
                            <TextArea rows={6} />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit">发布</Button>
                    </FormItem>
                </Form>
            </div>
            
        </div>
    }
}
export default Form.create()(Edit)



