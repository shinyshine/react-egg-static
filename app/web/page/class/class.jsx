import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {match, RouterContext} from 'react-router'
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config'
import Layout from 'framework/layout/layout.jsx';
import Header from 'component/newHeader/header';
import { create } from 'container/homework/store';
import routes from 'container/homework/routes'
import SSR from 'container/homework/index'

import './class.scss';
const clientRender = () => {
  console.log('client render')
  console.log('__INITIAL_STATE__', window.__INITIAL_STATE__)
  const store = create(window.__INITIAL_STATE__);

  const { url, query } = store.getState();
  ReactDOM.render(
    <div>
      <Header></Header>
      <Provider store={ store }>
        <BrowserRouter>
          <SSR url={ url } query={query}/>
        </BrowserRouter>
      </Provider>
    </div>,
    document.getElementById('app')
  );
};

const serverRender = (context, options)=> {
  console.log('server render')
  const { url, query } = context.state;
  const branch = matchRoutes(routes, url);
  const promises = branch.map(({route}) => {
    const fetch = route.component.fetch;
    return fetch instanceof Function ? fetch() : Promise.resolve(null)
  });
  return Promise.all(promises).then(data => {
    const initState = context.state;
    data.forEach(item => {
      Object.assign(initState, item);
    });
    
    context.state = Object.assign({}, context.state, initState);
    
    const store = create(initState);
    return () =>(
      <Layout>
        <div>
          <Header></Header>
          <Provider store={store}>
            <StaticRouter location={url} context={{}}>
              <SSR url={url} query={query}/>
            </StaticRouter>
          </Provider>
        </div>
      </Layout>
    )
  });
};

export default EASY_ENV_IS_NODE ?  serverRender : clientRender();



