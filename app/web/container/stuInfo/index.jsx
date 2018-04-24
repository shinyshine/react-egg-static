import React, { Component } from 'react';

import { Row, Col, Button, Form, Input } from 'antd';
const FormItem = Form.Item;

const userinfo = {
    imgUrl: '',
    id: '20141002418',
    email: '39334590@qq.com',
    phone: '18826103737',
    username: 'diang'
}
class Account extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
        })
    }

    handleChange(e) {
        console.log(e.target.value)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 2 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
            },
          };

        return <div className="account-container">
          <div className="avatar-container">
            <Row>
                <Col span={2}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524435296874&di=6559a4e418f27b3b771ad4e407008fc0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D117129877%2C2397568981%26fm%3D214%26gp%3D0.jpg" />
                </Col>
            </Row>
            
          </div>
          <FormItem label='账号' {...formItemLayout}>
            <p>{userinfo.id}</p>
                
            </FormItem>
            <FormItem label='用户名' {...formItemLayout}>
            <p>{userinfo.username}</p>
                
            </FormItem>
            <FormItem label='手机号码' {...formItemLayout}>
            <p>{userinfo.phone}</p>
                
            </FormItem>
           <FormItem label='邮箱' {...formItemLayout}>
            <p>{userinfo.email}</p>

            </FormItem>
        </div>
    }
}

export default Form.create()(Account);