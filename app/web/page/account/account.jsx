import React, { Component } from 'react';
import Account from 'container/account'

import Layout from 'component/Layout'
import './account.scss'

export default class Index extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <Layout>
            <Account />
        </Layout>
    }
}