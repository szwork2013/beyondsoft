import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute , Link } from 'dva/router';
// 路由配置
import LayoutPage from './routes/MainLayout/MainLayout';
import IndexPage from './routes/IndexPage/IndexPage';
import Demand from './routes/Demand/Demand';
import Candidate from './routes/Candidate/Candidate';
import Talents from './routes/Talents/Talents';
import Addtalents from './components/Talents/addNew';
import Recommend from './components/Talents/recommend';
import Collect from './components/Talents/collect';

import Project from './routes/Project/Project';
import Position from './routes/Position/Position';
import Users from './routes/Users/Users';
import Role from './routes/Users/Role';
import Authority from './routes/Users/Authority';
import Menus from './routes/Users/Menus';
import Message from './routes/Message/Message';
import Personal from './routes/Personal/Personal';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={LayoutPage}>
        <IndexRoute component={IndexPage} />
        <Route path="/indexPage" component={IndexPage} />
        <Route path="/message" component={Message} />
        <Route path="/Personal" component={Personal} />
        <Route path="/demand" component={Demand} />
        <Route path="/candidate" component={Candidate} />
        <Route path="/talents" component={Talents} />
        <Route path="/Addtalents" component={Addtalents} />
        <Route path="/Recommend" component={Recommend} />
        <Route path="/Collect" component={Collect} />
        <Route path="/Project" component={Project} />
        <Route path="/position" component={Position} />
        <Route path="/user" component={Users} />
        <Route path="/role" component={Role} />
        <Route path="/authority" component={Authority} />
        <Route path="/menus" component={Menus} />
      </Route>
    </Router>
  );
};
