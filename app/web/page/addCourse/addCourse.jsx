import React, {Component} from 'react'
import Header from 'component/newHeader/header.jsx';
import './addCourse.scss'

import AddCourse from 'container/addCourse'

export default class Add extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <div>
            <Header/>
            <div className="main-container">
                <AddCourse />
            </div>
        </div>;
    }
}