import React, { Component } from 'react';

import { Modal, Button, Rate, Input,message } from 'antd';
const { TextArea } = Input;
import matchScore from 'utils/score';
import  { setGradeApi } from 'service/task'

import { server } from 'config/config.server'

export default class Pop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('changde', nextProps)
        const thisProps = this.props;
        // if(nextProps.visible) {
        // console.log('nextProps.visible', nextProps.visible)
            
        //     this.setState({
        //         visible: true
        //     })
        // }

        console.log(nextProps)
        if(!nextProps.action && nextProps.modalItem) {
            // 数据item发生变化
            const { grade, comment } = nextProps.modalItem;
            console.log('comment', comment)
            this.setState({
                score: grade,
                scoreTxt: matchScore[grade],
                comment
            })
        }
       
        
    }
    handleCancel(){
        this.setState({
            score: 0,
            scoreTxt: matchScore[0]
        })
        // 返回列表
        // this.setState({ 
        //     visible: false
        // });

        this.props.handleCancel();
    }
    handleOk() {
        this.setState({ loading: true });

        // setTimeout(() => {
        //     this.setState({ loading: false});
        // }, 1000)

        // 在这里提交作业的评分到接口
        // todo...

        // 然后触发父组件的onComment改版全局state
        // 改变是否评分的状态，分数
        const { task_id, submit_tid } = this.props.modalItem;
        const { score, comment } = this.state;

        setGradeApi({
            submit_tid,
            grade: score,
            remark: comment
        }).then( res => {
            console.log('set grade', res)
            if(res.data.success) {
                message.success('已提交评分');
                this.setState({ loading: false });
                this.props.onComment(task_id, submit_tid, { score, comment })
                this.props.handleCancel();
                
            } else {
                message.error('出现错误，请稍后重试')
            }
        })
        

        
    }
    setStars(value) {
        this.setState({
            score: value,
            scoreTxt: matchScore[value]
        })
    }
    inputChange(e) {

        this.setState({
            comment: e.target.value
        })
    }

    render() {
        const { loading, score, scoreTxt, comment } = this.state;
        const { visible } = this.props;

         const modalItem = this.props.modalItem || {};
        return <div>
            <Modal
                visible={visible}
                title={modalItem.stu_name || ''}
                onOk={this.handleOk}
                onCancel={this.handleCancel.bind(this)}
                footer={[
                    <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>返回列表</Button>,
                    <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk.bind(this)}>
                        提交评分
                    </Button>,
                ]}>
                <div className="ant-upload-list-item ant-upload-list-item-done">
                    <div className="ant-upload-list-item-info">
                        <span><i className="anticon anticon-paper-clip"></i>
                        <span className="ant-upload-list-item-name" title={modalItem.filename}><a href={`${server}${modalItem.url}`}>{modalItem.filename}</a></span></span>
                    </div>
                </div> 
                <h2>点评</h2>
                <Rate count={7} onChange={this.setStars.bind(this)} value={score}/> {scoreTxt}
                <TextArea rows={4} value={comment} onChange={this.inputChange.bind(this)} />
            </Modal>
        </div>
    }
}