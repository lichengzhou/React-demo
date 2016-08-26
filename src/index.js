import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, hashHistory } from 'react-router';
import Page from './components/Page'
import Module from './components/Module'
import ModuleList from './components/ModuleList'
import NewPage from './components/NewPage'

// ReactDOM.render(<Page />, document.getElementById('app'));
ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={Page}>
      <Route path="/page/:pageId" component={Page} />
    </Route>
    <Route path="/page" component={Page} />
    <Route path="/module/:moduleId" component={Module} />
    <Route path="/moduleList" component={ModuleList} />
    <Route path="/createPage/:pageId" component={NewPage} />
 </Router>
), document.getElementById("app"));











