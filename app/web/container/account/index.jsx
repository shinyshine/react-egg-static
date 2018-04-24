import React, { Component } from 'react';

import { Row, Col, Button, Form, Input } from 'antd';
const FormItem = Form.Item;

const userinfo = {
    imgUrl: '',
    id: '20141002418',
    email: '39334590@qq.com',
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
        // return <div className="account-container">
        //     <Row>
        //         <Col span={12}>
        //             <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524435296874&di=6559a4e418f27b3b771ad4e407008fc0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D117129877%2C2397568981%26fm%3D214%26gp%3D0.jpg" />
        //         </Col>
        //         <Col span={12}></Col>
        //     </Row>
        //     <Row>
        //         <Col span={2}>账号：</Col>
        //         <Col span={22}>20141002418</Col>
        //     </Row>
        //     <Row>
        //         <Col span={2}>邮箱：</Col>
        //         <Col span={22}>393235901@qq.com</Col>
        //     </Row>
        //     <Row>
        //         <Col span={2}>用户名</Col>
        //         <Col span={22}>diang</Col>
        //     </Row>
        //     <Row>
        //         <Col span={2}>电话号码：</Col>
        //         <Col span={22}>18826103737</Col>
        //     </Row>
        // </div>
        return <div className="account-container">
          <div className="avatar-container">
            <Row>
                <Col span={2}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524435296874&di=6559a4e418f27b3b771ad4e407008fc0&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D117129877%2C2397568981%26fm%3D214%26gp%3D0.jpg" />
                </Col>
                <Col span={12}><Button>上传头像</Button></Col>
            </Row>
            
          </div>
          <FormItem label='账号' {...formItemLayout}>
            <Input value="20141002418" disabled />
                
            </FormItem>
            <FormItem label='用户名' {...formItemLayout}>
            <Input value={userinfo.username} disabled />
                
            </FormItem>
            <FormItem label='手机号码' {...formItemLayout}>
            <Input value='18826103737' disabled />
                
            </FormItem>
           <FormItem label='邮箱' {...formItemLayout}>
            <Input value={userinfo.email} onChange={this.handleChange} />

            </FormItem>
            <Button type="primary" htmlType="submit" className="common-form-button">
                修 改
            </Button>
        </div>
    }
}

export default Form.create()(Account);