import React, { Component } from 'react';

import { List } from 'antd-mobile';
const Item = List.Item;
import { getStuClassApi } from 'service/class'


export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        getStuClassApi().then( res => {
            console.log('mobile', res)
        })
    }

    render() {
        return <div>
            task here
        </div>
    }
}