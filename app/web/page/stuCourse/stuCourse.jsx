import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Header from 'component/newHeader/header.jsx';
import { BrowserRouter } from 'react-router-dom';
import './stuCourse.scss';
import StuCourse from 'container/stuCourse';
import './stuCourse.scss'

ReactDOM.render(
    <div className="stu-course">
        <Header/>
        <div className="main-container">
            <BrowserRouter>
                <StuCourse />
            </BrowserRouter>
            
            
        </div>
    </div>,
    document.getElementById('app')
);