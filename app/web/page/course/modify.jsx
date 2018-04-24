import React from 'react'
import ReactDOM from 'react-dom'


import Header from 'component/newHeader/header.jsx';
import Modify from 'container/edit/modify';
import './edit.scss';


ReactDOM.render(
  <div>
    <Header></Header>
      <Modify />
  </div>,
  document.getElementById('app')
);