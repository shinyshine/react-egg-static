import React, { Component } from 'react';
const queryString = require('query-string');
import {Input, Form, Select, Button, Upload, Icon, DatePicker, message } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
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
        deadline: '截止时间'
    }
}
let file_id = 0;
const uploadProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log('info', info)
        console.log('success', info.file.response.id);
        file_id = info.file.response.id;

      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
// const type = queryString.parse(location.search).type;

const classId = queryString.parse(location.search).class;
console.log('classId', classId)
const textData = labelData['n'];
class Edit extends Component{
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(err);
            // console.log(values.deadline.valueOf());
            values.file_id = file_id;
            values.class_id = classId;
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
        const { getFieldDecorator } = this.props.form;
        return <div className="main-container">
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
                    <FormItem label={textData.deadline}>
                        {getFieldDecorator('deadline')(
                            <DatePicker />
                        )}
                    </FormItem>
                    

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

                    <FormItem label="上传文件">
                        {/* {getFieldDecorator('fileList', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do">
                                <Button>
                                    <Icon type="upload" /> 点击上传
                                </Button>
                            </Upload>
                        )} */}

                        <Upload name="logo" {...uploadProps}>
                            <Button>
                                <Icon type="upload" /> 点击上传
                            </Button>
                        </Upload>
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



