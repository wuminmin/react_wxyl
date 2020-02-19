// import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, HashRouter } from 'react-router-dom';
import App from './App';
import BasicDemo from './BraftEditor';
import MyNews from './MyNews';
import MyImg from './MyImg';
const routing = (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/wz" component={BasicDemo} />
      <Route exact path="/mynews" component={MyNews} />
      <Route exact path="/tp" component={MyImg} />
    </div>
  </HashRouter>
)
ReactDOM.render(routing, document.getElementById('root'))