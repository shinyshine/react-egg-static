import React, { Component } from 'react';

import { Row, Col, Button, Form, Input, message } from 'antd';
const FormItem = Form.Item;
import { userInfoApi, updateInfoApi } from 'service/account'
const userinfo = {
    imgUrl: '',
    id: '20141002418',
    email: '39334590@qq.com',
    username: 'diang'
}
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }

    componentWillMount() {
        userInfoApi().then( res => {
            this.setState({
                info: res.data.message
            })
    
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);

            updateInfoApi(values).then( res => {
                console.log('update info', res)

                if(res.data.success) {
                    message.success('成功修改个人信息')
                } else {
                    message.error('操作失败，请稍后重试')
                }
            })
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { info } = this.state;

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
          {/* <div className="avatar-container">
            <Row>
                <Col span={2}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524435296874&di=6559a4e418f27b3b771ad4e407008fc0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D117129877%2C2397568981%26fm%3D214%26gp%3D0.jpg" />
                </Col>
                <Col span={12}><Button>上传头像</Button></Col>
            </Row>
            
          </div> */}
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label='账号' {...formItemLayout}>
                    <Input value={info.id} disabled />
                </FormItem>
                <FormItem label='用户名' {...formItemLayout}>
                    <Input value={info.username} disabled />
                </FormItem>

                <FormItem label='手机号码' {...formItemLayout}>
                    {getFieldDecorator('phone', {
                        initialValue: info.phone
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label='邮箱' {...formItemLayout}>
                    {getFieldDecorator('email', {
                        initialValue: info.email
                    })(
                        <Input />
                    )}
                    
                </FormItem>
                <Row>
                    <Col span={2}></Col>
                    <Col span={3}>
                        <Button type="primary" htmlType="submit" className="common-form-button">
                            修 改
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    }
}

export default Form.create()(Account);