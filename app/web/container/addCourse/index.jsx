import React, { Component } from 'react';
import { Form, Input, Icon, Button, message } from 'antd';

const FormItem = Form.Item;

import { createCourseApi } from 'service/course'
import { linkTo } from 'utils'

// 用户添加班级的输入框灵活增减
let uuid = 0;
class Add extends Component {
    constructor(props) {
        super(props);
    }
    remove(k) {
        console.log(k)
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add () {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let classStr = '';
                values.course_class.map( item => {
                    classStr += `${item},`
                })

                values.class_name = classStr;

                createCourseApi(values).then( res => {
                    console.log('add course', res)
                    if(res.data.success) {
                        message.success('成功创建一门课程');
                        linkTo('/teacher');
                    }
                })

            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        let keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem key={k}>
                    {getFieldDecorator(`course_class[${k}]`)(
                        <Input placeholder="请填写班级名称" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            );
        });
        return (
            <div className="form-container">
                <h2 className="sub-title">添加课程</h2>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="课程名称">
                        {getFieldDecorator('course_name', {
                            rules: [{
                                required: true,
                                message: '课程名称不能为空'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="课程简介">
                        {getFieldDecorator('course_intro')(
                            <Input />
                        )}
                    </FormItem>
                    <div className="ant-form-item-label">
                        <label htmlFor="course_class">课程班级</label>
                    </div>
                    
                    {formItems}
                    <FormItem>
                        <Button type="dashed" onClick={this.add.bind(this)}>
                            <Icon type="plus" /> 添加班级
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit">添加</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default Form.create()(Add)