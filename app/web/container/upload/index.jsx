import React, { Component } from 'react';
const queryString = require('query-string');
import {Input, Form, Select, Button, Upload, Icon, DatePicker, message } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

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

const courseId = queryString.parse(location.search).cid;
console.log('courseId', courseId)
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
            values.course_id = courseId;
            console.log(values);

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="main-container">
            <div className="form-container">
                <h2 className="sub-title">上传资料</h2>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="上传标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '标题不能为空'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    

                    <FormItem label="内容简介">
                        {getFieldDecorator('content')(
                            <TextArea rows={6} />
                        )}
                    </FormItem>

                    <FormItem label="上传文件">

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



