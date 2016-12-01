import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import style from './demand.less';
import {Row, Col,Breadcrumb ,Form, Input, Select ,Button,Table } from 'antd';
import reqwest from 'reqwest';
const FormItem = Form.Item;

const TableCom = React.createClass({
    getInitialState() {
      return {
        data: [],
        pagination: {},
        loading: false,
      };
    },
    upLoad(e){
      console.log(e);
    },
    delete(e){
      console.log(e);
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
      this.setState({ loading: true });
      reqwest({
        url: 'https://api.randomuser.me/',
        method: 'get',
        data: {
          results: 10,
        },
        type: 'json',
      }).then(data => {
        const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        pagination.showQuickJumper = true;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
      });
    },
    componentDidMount() {
      this.fetch();
    },
    render() {
      var self= this;
      const columns = [{
          title: '姓名',
          dataIndex: 'name',
          sorter: true,
          render: name => `${name.first} ${name.last}`,
          width: '20%',
        }, {
          title: '性别',
          dataIndex: 'gender',
          filters: [
            { text: '男', value: 'male' },
            { text: '女', value: 'female' },
          ],
          width: '20%',
        }, {
          title: '邮箱',
          dataIndex: 'email',
        }, {
        title: '操作',
        key: 'operation',
        render: (record) => {
          if(record.gender == 'female'){
            return(
            <span>
              <a href="#">修改</a>
              <span className="ant-divider"></span>
              <a data-id={record.gender} onClick={() =>self.upLoad(record.gender)}>提交</a>
              <span className="ant-divider"></span>
              <a data-id={record.gender} onClick={()=>self.delete(record.gender)}>删除</a>
            </span>)
          }else{
            return(
            <span>
              <Link to={'/candidate?demandId='+record.gender} data-id={record.gender} >查看候选人</Link>
              <span className="ant-divider"></span>
              <a href="#">取消</a>
            </span>)
          }
        }
      }];
      return (
        <Table columns={columns}
          rowKey={record => record.registered}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      );
    },
});
const Demand = () => {
  return (
    <div>
    <Breadcrumb>
      <Breadcrumb.Item className={style.h5}>需求管理</Breadcrumb.Item>
    </Breadcrumb>
    <hr className={style.mr10}/>
    <Form horizontal className="ant-advanced-search-form" >
      <Row gutter={16}>
        <Col sm={6} xs={6}>
          <FormItem
            label="需求岗位"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 12 }}
          >
            <Input  size="default" />
          </FormItem>
          <FormItem
            label="招聘类型"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 12 }}
          >
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Option value="0">服务</Option>
            <Option value="1">项目</Option>
            <Option value="2" >人头</Option>
          </Select>
          </FormItem>
          <Button type="primary">新建</Button>
        </Col>
        <Col sm={6} xs={6}>
          <FormItem
            label="职位级别"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
            <Select defaultValue="请选择" style={{ width: 120 }} >
              <Option value="0">急需</Option>
              <Option value="1">正常</Option>
            </Select>
          </FormItem>
          <FormItem
            label="需求状态"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Option value="0">未提交</Option>
            <Option value="1">进行中</Option>
            <Option value="2" >已取消</Option>
            <Option value="3" >已关闭</Option>
          </Select>
          </FormItem>
        </Col>
        <Col sm={6} xs={6}>
          <FormItem
            label="优先级"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Option value="0">实习生</Option>
            <Option value="1">初级</Option>
            <Option value="2" >中级</Option>
            <Option value="3">高级</Option>
          </Select>
          </FormItem>
        </Col>
        <Col sm={5} xs={5}>
          <FormItem
            label="需求类别"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
          >
          <Select defaultValue="请选择" style={{ width: 120 }} >
            <Option value="0">服务</Option>
            <Option value="1">项目</Option>
            <Option value="2" >人头</Option>
          </Select>
          </FormItem>
          <FormItem style={{ textAlign: 'right' }}>
          <Button  type="primary" htmlType="submit">搜索</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <TableCom />
    </div>
  );
};


export default Demand;
