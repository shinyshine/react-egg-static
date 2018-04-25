import React, { Component } from 'react';
const queryString = require('query-string');
import {Input, Form, Select, Button, Upload, Icon, DatePicker, message, Breadcrumb, Menu } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
import { linkTo } from 'utils'

import { uploadProps, shareFileApi } from 'service/upload';

const courseId = queryString.parse(location.search).cid;
const class_n = queryString.parse(location.search).class_n;
const course_n = queryString.parse(location.search).c_name;
console.log('courseId', courseId)
class Edit extends Component{
    constructor(props) {
        super(props);

        this.state = {
            file_id: 0
        }

        this.uploadProps = Object.assign({}, uploadProps, {
            onChange: (info) => {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功`);

                    this.setState({
                        file_id: info.file.response.file_id
                    })

                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(err);
            // console.log(values.deadline.valueOf());
            values.file_id = this.state.file_id;
            values.course_id = courseId;

            console.log(values);
            shareFileApi(values).then( res => {
                if(res.data.success) {
                    message.success('上传资料成功');
                    linkTo('/course/file');
                }
            })



        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { file_id } = this.state;
        return <div className="main-container">
            <Breadcrumb>
                <Breadcrumb.Item href="/teacher">
                <Icon type="home" /> 首页
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <span>{course_n}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
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
                        {getFieldDecorator('introduction')(
                            <TextArea rows={6} />
                        )}
                    </FormItem>

                    <FormItem label="上传文件">

                        <Upload name="logo" {...this.uploadProps}>
                            <Button>
                                <Icon type="upload" /> 点击上传
                            </Button>
                        </Upload>
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit" disabled={!file_id}>发布</Button>
                    </FormItem>
                </Form>
            </div>
            
        </div>
    }
}
export default Form.create()(Edit)



