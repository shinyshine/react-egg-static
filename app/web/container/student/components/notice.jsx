import React, { Component } from 'react';
import { List, Avatar, Icon, Card } from 'antd';
import './notice.scss';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `考试通知（请认真查看）${i}`,
    description: '数据结构',
    content: '下周四将于实验室A202进行期末机考，要求同学们独立完成',
    course_name: '数据结构',
    tea_name: '杨老师',
    deadline: '2018-04-05'
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
    }

    render() {
        return <div className="notice-list">
            <h2>公告栏</h2>
            {
                listData && listData.map( item => {
                    return <Card title={item.title} extra={<span>{item.course_name} {item.tea_name}</span>}>
                        {item.deadline ? <p>截止日期：{item.deadline}</p> : ''}
                        <p>{item.content}</p>
                    </Card>
                })
            }
        </div>
    }
}