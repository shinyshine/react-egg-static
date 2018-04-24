import React, { Component } from 'react';
const queryString = require('query-string');
import moment from 'moment'
import {Input, Form, Select, Button, Upload, Icon, DatePicker } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const labelData = {
    n: {
        title: '添加公告',
        title_label: '公告标题',
        content_label: '公告内容',
        title_valid: '公告标题不能为空',
        content_valid: '公告内容不能为空'
    },
    h: {
        title: '发布作业',
        title_label: '作业标题',
        content_label: '作业内容',
        title_valid: '作业标题不能为空',
        content_valid: '作业内容不能为空',
        deadline: '截止时间'
    }
}
const type = queryString.parse(location.search).type;
const textData = labelData[type];
const initData = {
    title: '数据结构第三次作业',
    content: '课本53页3-5题，交纸质版, 课本53页3-5题，交纸质版, 课本53页3-5题，交纸质版, 课本53页3-5题，交纸质版',
    deadline: '2018-4-4'
}

class Modify extends Component{
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(err);
            console.log(values);
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
        console.log('initData',initData)
        const { getFieldDecorator } = this.props.form;
        return <div className="main-container">
            <div className="form-container">
            <h2 className="sub-title">{textData.title}</h2>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label={textData.title_label}>
                        {getFieldDecorator('title', {
                            initialValue: initData.title,
                            rules: [{
                                required: true,
                                message: textData.title_valid
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    {
                        type === 'h'? 
                            <FormItem label={textData.deadline}>
                                {getFieldDecorator('deadline', {
                                    initialValue: moment(initData.deadline, 'YYYY-MM-DD')
                                })(
                                    <DatePicker />
                                )}
                            </FormItem> : null
                    }
                    

                    <FormItem label={textData.content_label}>
                        {getFieldDecorator('content', {
                            initialValue: initData.content,
                            rules: [{
                                required: true,
                                message: textData.content_valid
                            }]
                        })(
                            <TextArea rows={6} />
                        )}
                    </FormItem>

                    <FormItem label="上传文件">
                        {getFieldDecorator('fileList', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do">
                                <Button>
                                    <Icon type="upload" /> 点击上传
                                </Button>
                            </Upload>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit">修改</Button>
                    </FormItem>
                </Form>
            </div>
            
        </div>
    }
}
export default Form.create()(Modify)



