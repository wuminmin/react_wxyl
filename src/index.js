import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import BasicDemo from './BraftEditor'
import MyNews from './MyNews'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/wen_zhang" component={BasicDemo} />
      <Route exact path="/mynews" component={MyNews} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))