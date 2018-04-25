import React, { Component } from 'react';

import Course from './components/course';
import Notice from './components/notice';

export default class Teacher extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {

    }


    render() {
        return <div className="content">
            <Course/>
            <Notice/>
        </div>
    }
}