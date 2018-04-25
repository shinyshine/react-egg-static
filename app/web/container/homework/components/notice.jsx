import React, { Component } from 'react';
import { List, Icon, Spin } from 'antd';

import { getNoticesApi } from 'service/notice'

export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const { class_id } = this.props;

        getNoticesApi({ class_id }).then( res => {
            console.log(res);
            const data = res.data.data;
            this.setState({
                notice: data ? data.list : []
            })
        })

    }

    render() {
        const { notice } = this.state;
        return <div className="tab-container">
            {(() => {
                    if(notice && notice.length != 0) {
                        return <List
                            itemLayout="horizontal"
                            dataSource={notice}
                            renderItem={item => (
                                <List.Item actions={[<a>删除</a>]}>
                                    <List.Item.Meta 
                                    title={<strong>{item.title}</strong>}
                                    description={
                                        <div>
                                            <p>创建时间：{item.create_time}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    } />
                                </List.Item>
                            )}
                        />
                    } else if(notice && notice == 0) {
                        return <div style={{textAlign: 'center'}}>暂无数据</div>
                    } else {
                        return <div style={{textAlign: 'center'}}><Spin /></div>
                    }
                })()}
            
        </div>
    }
}