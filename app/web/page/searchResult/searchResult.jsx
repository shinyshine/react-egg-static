import React, { Component } from 'react';
import SearchResult from 'container/searchResult'

import Layout from 'component/Layout'
const data = { 
    count: 2, 
    list: [
        { 
            course_id: 24, 
            update_time: null, 
            tea_id: 20141002426, 
            create_time: '2019-04-12 21:54:28', 
            course_name: 'DB2', 
            tea_name: 'tDiang', 
            introduction: '11255',
            class: [{
                class_id: '1',
                class_name: '1402'
            },{
                class_id: '2',
                class_name: '1404'
            }] 
        },
        { 
            course_id: 25, 
            update_time: null, 
            tea_id: 20141002426, 
            create_time: '2015-04-12 21:54:28', 
            course_name: 'DB2323', 
            tea_name: 'tDiang321', 
            introduction: '11255' ,
            class: [{
                class_id: '1',
                class_name: '1402'
            },{
                class_id: '2',
                class_name: '1404'
            }] 
        },
        { 
            course_id: 26, 
            update_time: null, 
            tea_id: 20141002426, 
            create_time: '2018-06-12 21:54:28', 
            course_name: 'DB2545', 
            tea_name: 'tDiang12', 
            introduction: '11255',
            class: [{
                class_id: '1',
                class_name: '1402'
            },{
                class_id: '2',
                class_name: '1404'
            }] 
        }
    ],
    success: true, 
    message: null, 
    error: null 
}

export default class Result extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return <Layout>
            <SearchResult data={data.list} />
        </Layout>
    }
}