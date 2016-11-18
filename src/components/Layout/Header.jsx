import React, { PropTypes } from 'react';
// import MenuConfig from './MenuConfig';
import { Row, Col, Menu, Icon ,Button } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    /* eslint no-empty:0 */
  } catch (e) {}
  return key;
}

const Sider = React.createClass({
  getInitialState() {
    return {
      current: 'demand',
      openKeys: [],
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  // onOpenChange(openKeys) {
  //   const state = this.state;
  //   const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
  //   const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
  //
  //   let nextOpenKeys = [];
  //   if (latestOpenKey) {
  //     nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
  //   }
  //   if (latestCloseKey) {
  //     nextOpenKeys = this.getAncestorKeys(latestCloseKey);
  //   }
  //   this.setState({ openKeys: nextOpenKeys });
  // },
  // getAncestorKeys(key) {
  //   const map = {
  //     sub3: ['sub2'],
  //   };
  //   return map[key] || [];
  // },openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} defaultOpenKeys={['sub1']}
  render() {
    // 配置菜单树，到时候后台传过来
    const menuConfig = [
          {
              title: "需求管理",
              key: "demand",
              icon: "bars",
              items: [
                  {title: "需求管理", key: "demand"}
              ]
          },
          {
              title: "候选人管理",
              key: "candidate",
              icon: "team",
              items: [
                  {title: "候选人管理", key: "candidate"}
              ]
          },
          {
              title: "人才管理",
              key: "talents",
              icon: "user",
              items: [
                  {title: "人才管理", key: "talents"}
              ]
          },
          {
              title: "项目组管理",
              key: "project",
              icon: "book",
              items: [
                  {title: "项目组管理", key: "project"}
              ]
          },{
              title: "职位发布及管理",
              key: "position",
              icon: "code-o",
              items: [
                  {title: "职位招聘管理", key: "position"}
              ]
          },{
              title: "用户管理",
              key: "user",
              icon: "solution",
              items: [
                  {title: "用户管理", key: "user"},
                  {title: "角色管理", key: "role"},
                  {title: "权限管理", key: "authority"},
                  {title: "菜单管理", key: "menus"}
              ]
          }
      ];

    return (
      <div>
        <Menu
          onClick={this.handleClick}
          defaultOpenKeys={[getMenuKeyFromUrl(location.pathname)]}
          selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
          mode="inline"
        >
        {
          menuConfig.map(function(item){
            return (
              <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                {
                  item.items.map(function(child){
                    return(
                      <Menu.Item key={child.key}><Link to={"/"+child.key}>{child.title}</Link></Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
        </Menu>
      </div>
    );
  },
});
export default Sider;
