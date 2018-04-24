import React, { Component } from 'react';
import StuInfo from 'container/stuInfo'

import Layout from 'component/Layout'
import './stuInfo.scss'

export default class Index extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <Layout>
            <StuInfo />
        </Layout>
    }
}