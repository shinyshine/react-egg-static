import React from 'react'
import ReactDOM from 'react-dom'


import Header from 'component/newHeader/header.jsx';
import Edit from 'container/edit/edit';
import './edit.scss';


ReactDOM.render(
  <div>
    <Header></Header>
      <Edit />
  </div>,
  document.getElementById('app')
);