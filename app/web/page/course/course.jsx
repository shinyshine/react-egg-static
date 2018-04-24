import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import Header from 'component/newHeader/header.jsx';
import Course from 'component/course/course';
import store from 'component/course/store';
import './course.scss';


ReactDOM.render(
  <div>
    <Header></Header>
    <Provider store={store}>
      <Course />
    </Provider>
  </div>,
  document.getElementById('app')
);