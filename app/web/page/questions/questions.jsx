import React, { Component } from 'react';
import Header from 'component/newHeader/header.jsx';
import './questions.scss';
import Questions from 'container/questions'



export default class Teach extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <div className="teacher-container">
            <Header/>
            <div className="main-container">
                <Teacher list={[
                    1,2,3
                ]}/>
            </div>
        </div>;
    }
}