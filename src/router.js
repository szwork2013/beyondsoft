import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute , Link } from 'dva/router';
// 路由配置
import LayoutPage from './routes/MainLayout/MainLayout';
import IndexPage from './routes/IndexPage/IndexPage';
import Demand from './routes/Demand/Demand';
import Candidate from './routes/Candidate/Candidate';
import Schedule from './routes/Candidate/schedule';
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
        {/* 默认页面 */}
        <Route path="/indexPage" component={IndexPage} />
        {/* 消息中心 */}
        <Route path="/message" component={Message} />
        {/* 个人中心 */}
        <Route path="/Personal" component={Personal} />
        {/* 需求管理 */}
        <Route path="/demand" component={Demand} />
        {/* 候选人管理 */}
        <Route path="/candidate" component={Candidate} />
        {/* 候选人面试进度管理 */}
        <Route path="/schedule" component={Schedule} />
        {/* 人才管理 */}
        <Route path="/talents" component={Talents} />
        {/* 添加人才 */}
        <Route path="/Addtalents" component={Addtalents} />
        {/* 推荐人才 */}
        <Route path="/Recommend" component={Recommend} />
        {/* 收藏人才 */}
        <Route path="/Collect" component={Collect} />
        {/* 项目组管理 */}
        <Route path="/Project" component={Project} />
        {/* 职位管理 */}
        <Route path="/position" component={Position} />
        {/* 用户管理 */}
        <Route path="/user" component={Users} />
        {/* 角色管理 */}
        <Route path="/role" component={Role} />
        {/* 权限管理 */}
        <Route path="/authority" component={Authority} />
        {/* 菜单管理 */}
        <Route path="/menus" component={Menus} />
      </Route>
    </Router>
  );
};
