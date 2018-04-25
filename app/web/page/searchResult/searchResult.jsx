import React, { Component } from 'react';
import SearchResult from 'container/searchResult'

import Layout from 'component/Layout'

export default class Result extends Component {
    render() {
        return <Layout>
            <SearchResult />
        </Layout>
    }
}