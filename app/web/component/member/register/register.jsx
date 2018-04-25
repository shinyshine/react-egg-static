import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

import { registerApi, test } from 'service/account'


import './register.scss'
class Login extends Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const options = Object.assign({}, values, { type: values.type ? 2 : 1})

                console.log('options', options)

                registerApi(options).then( res => {
                    if(res.data.success) {
                        message.success('注册成功');
                        window.location.reload();
                    } else {
                        message.error('注册失败，请稍后重试')
                    }
                })

            } 

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="common-form register-form">
                <FormItem>
                    {getFieldDecorator('id', {
                        rules: [{ required: true, message: '请输入学号/工号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入学号/工号" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入真实姓名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入真实姓名" />
                        )}
                </FormItem>
                {/* <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                        )}
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone" />
                </FormItem> */}
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('repwd', {
                        rules: [{ required: true, message: '请重复密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请重复密码" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('type', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>我是老师</Checkbox>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="common-form-button">
                        注 册
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);