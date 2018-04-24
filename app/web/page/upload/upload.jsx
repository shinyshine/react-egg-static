import React from 'react'
import ReactDOM from 'react-dom'


import Header from 'component/newHeader/header.jsx';
import Upload from 'container/upload';
import './upload.scss';


ReactDOM.render(
  <div>
    <Header></Header>
      <Upload />
  </div>,
  document.getElementById('app')
);