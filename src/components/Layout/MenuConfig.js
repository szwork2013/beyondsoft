/**
 * [Config description]
 * @type {Object}
 *
 * header 管理后台头部配置
 *     title    String  标题
 *     icon     String   标题图标
 *     style    Object  自定义样式
 *
 * sider  管理后台侧栏配置
 *     menu     Array   sider列表
 *     openKeys Array   默认展开的sider区
 *     selectedKey  String  默认打开的功能区
 *     style    Object  自定义样式
 *
 * main  功能区域配置
 *     components   Object  配置sider对应功能区域组件
 *         Feature1     Object  对应sider menu 中的功能key对 应功能组件
 *     style        Object  配置样式
 */

const Config = {
    header: {
        title: "博彦招聘系统",
        icon: "appstore",
        style: {
            padding: "15px 15px 15px 25px",
            borderBottom: "1px solid #E9E9E9",
            backgroundColor: "#F5F5F5"
        }
    },

    sider: {
        menu: [
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
                icon: "book"
            },{
                title: "职位发布及管理",
                key: "position",
                icon: "code-o",
                items: [
                    {title: "职位招聘管理", key: "Feature4"}
                    {title: "职位招聘管理-审核", key: "Feature4"}
                ]
            },{
                title: "用户管理",
                key: "Users",
                icon: "solution",
                items: [
                    {title: "用户管理", key: "Feature4"}
                    {title: "角色管理", key: "Feature4"}
                    {title: "权限管理", key: "Feature4"}
                    {title: "菜单管理", key: "Feature4"}
                ]
            }
        ],
        openKeys:['demand'],
        selectedKey: "demand",
        style: {}
    },

    userInfo:{
        name: BaiduInfo.name || '游客',
        aver: BaiduInfo.aver || "http://himg.bdimg.com/sys/portrait/item/113e68695f79696e6766656e67525e.jpg",
        permission: BaiduInfo.permission,
        loginUrl: BaiduInfo.loginUrl
    }
}

export default Config;
