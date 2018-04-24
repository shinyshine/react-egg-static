import React, { Component } from 'react';

import Course from './components/course.jsx';
import Question from './components/question.jsx';

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
            <Question/>
        </div>
    }
}