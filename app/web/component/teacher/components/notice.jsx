import React, { Component } from 'react';
import { List, Avatar, Icon, Card, Spin } from 'antd';


import { getLatestNoticesApi } from 'service/notice'
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `考试通知（请认真查看）${i}`,
    description: '数据结构',
    content: '下周四将于实验室A202进行期末机考，要求同学们独立完成',
    course_name: '数据结构',
    tea_name: '杨老师',
    // deadline: '2018-04-05'
  });
}

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
            console.log('res', res)

            const data = res.data.data;
            this.setState({
                notice: data ? data.list : []
            })
        })
    }

    render() {
        const { notice } = this.state;

        return <div className="notice-list">
            <h2>公告栏</h2>
            {
                notice && notice.length > 0 ?
                    notice.map( item => {
                        return <Card title={item.title}>
                            <p>{item.content}</p>
                        </Card>
                    })
                : ( 
                    notice && notice.length == 0 ?
                    <div style={{textAlign: 'center'}}>暂无数据</div>
                    : <div style={{textAlign: 'center'}}><Spin /></div>
                )
            }
        </div>
    }
}