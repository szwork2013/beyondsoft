import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import style from './user.less';
import {Modal,Radio,Row, Col,Breadcrumb ,Form, Input, Select ,Button,DatePicker,Table } from 'antd';
import reqwest from 'reqwest';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const TableCom = React.createClass({
    getInitialState() {
      return {
        data: [],
        pagination: {},
        loading: false,
        visible: false,
        record :{}
      };
    },
    showModal(e) {
      this.setState({
        visible: true,
        record : e.target
      });
      console.log(e);
    },
    handleOk(e) {
      console.log('点击了确定');
      this.setState({
        visible: false,
      });
    },
    handleCancel(e) {
      this.setState({
        visible: false,
      });
    },
    edit(e){
      console.log(e);
    },
    delete(e){
      console.log("删除"+e);
    },
    handleTableChange(pagination, filters, sorter) {
      const pager = this.state.pagination;
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order
      });
    },
    fetch(params = {}) {
      // 发起ajax请求数据
      this.setState({ loading: true });
      reqwest({
        url: 'https://api.randomuser.me',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then(data => {
        const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        pagination.current =1;
        pagination.showQuickJumper = true;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
      });
    },
    componentDidMount() {
      // 调用ajax数据渲染
      this.fetch();
    },
    render() {
      var self= this;
      const columns = [{
          title: '用户名',
          dataIndex: 'name',
          sorter: true,
          render: name => `${name.first} ${name.last}`,
          width: '10%',
        }, {
          title: '工号',
          dataIndex: 'location',
          sorter: true,
          render: location => `${location.postcode}`,
          width: '10%',
        }, {
          title: '姓名',
          dataIndex: 'id',
          sorter: true,
          render: id => `${id.name}`,
          width: '6%',
        },  {
            title: '密码',
            dataIndex: 'login',
            sorter: true,
            render: login => `${login.password}`,
            width: '10%',
          }, {
          title: '性别',
          dataIndex: 'gender',
          render: gender => {
            if(gender == 'female'){
              return(
                <span>女</span>
              )
            }else if(gender == 'male'){
              return(
                <span>男</span>
              )
            }
          },
          width: '5%',
        }, {
          title: '手机号',
          dataIndex: 'cell',
        }, {
          title: '出生日期',
          dataIndex: 'registered',
        }, {
          title: '工作邮箱',
          dataIndex: 'email',
        },  {
          title: '用户角色',
          dataIndex: 'nat',
        }, {
        title: '操作',
        key: 'operation',
        width: '15%',
        render: (record) => {
            var id = record.location.postcode;
            return(
            <span>
              <a data-id={id} onClick={() =>self.showModal(record)}>修改</a>
              <span className="ant-divider"></span>
              <a data-id={id} onClick={() =>self.delete(id)} className="ant-dropdown-link">删除</a>
            </span>)
        }
      }];
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      var { record } = this.props;
      return (
        <div>
          <Table columns={columns}
            rowKey={record => record.registered}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
          <Modal title="修改" visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
          <Form  inline onSubmit={this.handleSubmit} >
            <Row gutter={16}>
              <Col sm={12}>
                <FormItem
                  label="用户名"
                  {...formItemLayout}
                >
                  <Input defaultValue={this.record}/>
                </FormItem>
                <FormItem
                  label="姓&nbsp;&nbsp;&nbsp;&nbsp;名"
                  {...formItemLayout}
                >
                  <Input name="username"/>
                </FormItem>
                <FormItem
                  label=" 手机号"
                  {...formItemLayout}
                >
                  <Input />
                </FormItem>
                <FormItem
                  label=" 工作邮箱"
                  {...formItemLayout}
                >
                  <Input />
                </FormItem>
              </Col>
              <Col sm={12}>
                <FormItem
                  label="工号"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Input />
                </FormItem>
                <FormItem
                  label="性别"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                >
                  <div>
                    <RadioGroup size="small" defaultValue="0">
                      <Radio value="0">男</Radio>
                      <Radio value="1">女</Radio>
                    </RadioGroup>
                  </div>
                </FormItem>
                <FormItem
                  label="出生日期"
                  {...formItemLayout}
                >
                  <DatePicker size="default" />
                </FormItem>
                <FormItem
                      label="用户角色"
                      {...formItemLayout}
                    >
                  <Select style={{ width: 112 }}>
                    <Option value="0">需求人</Option>
                    <Option value="1">HR</Option>
                    <Option value="2">经理</Option>
                    <Option value="3">总监</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </Form>
          </Modal>

        </div>
      );
    },
});
const NewAdd =React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },
  showModal(e) {
    this.setState({
      visible: true
    });
  },
  handleOk(e) {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log('点击了取消');
    this.setState({
      visible: false,
    });
  },
  render() {
    var self= this;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    return (
      <div>
        <Button onClick={() =>self.showModal()} type="primary">新增</Button>
        <Modal title="新增" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
        <Form  onSubmit={this.handleSubmit} >
          <Row gutter={16}>
            <Col sm={12}>
              <FormItem
                label="用户名"
                {...formItemLayout}
              >
                <Input defaultValue={this.record}/>
              </FormItem>
              <FormItem
                label="姓&nbsp;&nbsp;&nbsp;&nbsp;名"
                {...formItemLayout}
              >
                <Input name="username"/>
              </FormItem>
              <FormItem
                label=" 手机号"
                {...formItemLayout}
              >
                <Input />
              </FormItem>
              <FormItem
                label=" 工作邮箱"
                {...formItemLayout}
              >
                <Input />
              </FormItem>
            </Col>
            <Col sm={12}>
              <FormItem
                label="工号"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="性别"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <div>
                  <RadioGroup size="small" defaultValue="0">
                    <Radio value="0">男</Radio>
                    <Radio value="1">女</Radio>
                  </RadioGroup>
                </div>
              </FormItem>
              <FormItem
                label="出生日期"
                {...formItemLayout}
              >
                <DatePicker size="default" />
              </FormItem>
              <FormItem
                    label="用户角色"
                    {...formItemLayout}
                  >
                <Select style={{ width: 112 }}>
                  <Option value="0">需求人</Option>
                  <Option value="1">HR</Option>
                  <Option value="2">经理</Option>
                  <Option value="3">总监</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </Form>
        </Modal>
      </div>
    );
  },
});
const User = () => {
  return (
    <div>
    <Breadcrumb>
      <Breadcrumb.Item className={style.h5}>用户管理</Breadcrumb.Item>
    </Breadcrumb>
    <hr className={style.mr10}/>
    <Form inline className="ant-advanced-search-form">
      <Row gutter={16}>
        <Col sm={5}>
          <NewAdd />
        </Col>
        <Col sm={5} offset={14}>
          <FormItem style={{ textAlign: 'right' }}>
            <Input placeholder="可以根据工号、手机号、用户角色进行查询"/>
          </FormItem>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Col>
      </Row>
    </Form>
    <TableCom />
    </div>
  );
};


export default User;
