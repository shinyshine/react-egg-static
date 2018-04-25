import React, { Component } from 'react';
import Header from 'component/newHeader/header.jsx';
import './teacher.scss';
import Teacher from 'component/teacher/teacher';



export default class Teach extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <div className="teacher-container">
            <Header/>
            <div className="main-container">
                <Teacher />
            </div>
        </div>;
    }
}