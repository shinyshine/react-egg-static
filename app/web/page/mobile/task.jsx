import React, { Component } from 'react';
import LayoutM from 'component/LayoutM'

import Task from 'container/mobile/task'

export default class Index extends Component {
    render() {
        return <LayoutM>
            <Task />
        </LayoutM>
    }
}