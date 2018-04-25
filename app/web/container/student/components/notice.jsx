import React, { Component } from 'react';
import { List, Avatar, Icon, Card, Spin} from 'antd';
import './notice.scss';
import { getLatestNoticesApi } from 'service/notice'

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
export default class Notice extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        getLatestNoticesApi().then( res => {
            console.log(res);
            const data = res.data.data;

            this.setState({
                notice: data ? data.list : []
            })
        })
    }

    render() {
        const { notice } = this.state;
        console.log('notice', notice)
        return <div className="notice-list">
            <h2>公告栏</h2>
            {
                notice && notice.length > 0 ?
                    notice.map( item => {
                        return <Card title={item.title} extra={<span><span style={{marginRight:'16px'}}>{item.course_name}</span> {item.tea_name}</span>}>
                            <p>{item.content}</p>
                        </Card>
                    })
                : ( notice && notice.length == 0 ? <div style={{textAlign: 'center'}}>暂无数据</div> : <div style={{textAlign: 'center'}}><Spin /></div>)
            }
        </div>
    }
}