
import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './hello.jsx';

if (typeof window === 'object') {
  // 在客户端渲染-----window 对象存在
  const state = window.__INITIAL_STATE__;
  render(<Hello {...state} />, document.getElementById('app'));
} else {
  // 在服务端渲染，不存在window对象
  module.exports = Hello;
}
