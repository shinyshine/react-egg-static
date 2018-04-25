import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

import { loginApi } from 'service/account'
import cookies from 'js-cookie';
import { linkTo } from 'utils'
import './login.scss'

class Login extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                const options = Object.assign({}, values, {type: values.type ? 2 : 1})

                console.log(options)

                loginApi(options).then( res => {
                    if(res.data.success) {
                        message.success('登录成功');
                        cookies.set('_token_', res.data.jwt)
                        cookies.set('_type_', options.type)

                        if(values.type) {
                            linkTo('/teacher');
                        } else {
                            linkTo('/index');
                        }
                    } else {
                        message.error(res.data.error)
                    }
                })

                // ====调用登录接口
                // 登录成功后要存储token到cookie中
                // 判断是老师还是学生，登录后要跳转到不同的首页
                

            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="common-form login-form">
                <FormItem>
                    {getFieldDecorator('id', {
                        rules: [{ required: true, message: '请输入学号/工号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入学号/工号" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
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
                        登 录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);