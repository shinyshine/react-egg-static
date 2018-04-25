import React, { Component } from 'react';
import Header from 'component/newHeader/header.jsx';
import './student.scss';
import Student from 'container/student';



export default class Teach extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <div className="student-container">
            <Header/>
            <div className="main-container">
                <Student />
            </div>
        </div>;
    }
}