import React, { Component } from 'react';

import { Modal, Button, Rate, Input } from 'antd';
const { TextArea } = Input;
import matchScore from 'utils/score';

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

        setTimeout(() => {
            this.setState({ loading: false});
        }, 1000)
        // 在这里提交作业的评分到接口
        // todo...

        // 然后触发父组件的onComment改版全局state
        // 改变是否评分的状态，分数
        const { task_id, submit_tid } = this.props.modalItem;
        const { score, comment } = this.state;

        this.props.onComment(task_id, submit_tid, { score, comment })
        this.props.handleCancel();
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
                title={modalItem.title || ''}
                onOk={this.handleOk}
                onCancel={this.handleCancel.bind(this)}
                footer={[
                    <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>返回列表</Button>,
                    <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk.bind(this)}>
                        提交评分
                    </Button>,
                ]}>
                <p>{modalItem.content || ''}</p>
                <ul className="file-list">
                {
                    modalItem.files && modalItem.files.map( (item,index) => {
                        return <li key={index}><a href={item.link}>{item.filename}</a></li>
                    })
                }
                </ul>
                <h2 className="sub-title">点评</h2>
                <Rate count={7} onChange={this.setStars.bind(this)} value={score}/> {scoreTxt}
                <TextArea rows={4} value={comment} onChange={this.inputChange.bind(this)} />
            </Modal>
        </div>
    }
}