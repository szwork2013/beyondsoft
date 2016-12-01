import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import reqwest from 'reqwest';
import style from './candidate.less';
import {Row, Col,Breadcrumb ,Form, Input, Select ,Button,Table } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

// 表格组件
class TableCom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          pagination: {},
          loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){

    }
    render() {
      const columns = [{
          title: '姓名',
          dataIndex: 'name',
          key:'name',
          width: '20%',
        }, {
          title: '需求',
          dataIndex: 'demand',
          key:'demand',
          width: '20%',
        }, {
          title: '电话',
          dataIndex: 'telephone',
          key:'telephone',
          width: '15%',
        },  {
          title: '意向职位',
          dataIndex: 'toPosition',
          key:'toPosition',
          width: '15%',
        },  {
          title: '简历',
          dataIndex: 'resume',
          key:'resume',
          render: text => <a download href={text}>{text}</a>,
          width: '15%',
        }, {
        title: '操作',
        key: 'operation',
        render: (record) => {
          var ids = record.key;
            return(
            <span>
              <Link to={'/schedule?keyid='+ids} >进度管理</Link>
            </span>)
        }
      }];

      return (
        <div>
          <Table columns={columns}
            rowKey={record => record.key}
            dataSource={this.props.dataSource}
            pagination={this.props.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
        </div>
      );
    }
}
// 表单搜索
let FormWrap =React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },
  fetch(params = {}) {
    this.setState({ loading: true });
    reqwest({
      url: 'http://api.randomuser.me',
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
      pagination.showSizeChanger= true;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  },
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <Form horizontal className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col sm={6} offset={11}>
            <FormItem
              label="所关联需求"
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
            >
            <Select defaultValue="请选择" style={{ width: 120 }} {...getFieldProps('demandLink', { initialValue: '' })}>
              <Option value="0">网易培训</Option>
              <Option value="1">百度人脸</Option>
            </Select>
            </FormItem>
          </Col>
          <Col sm={5}>
            <FormItem
              labelCol={{ span: 12 }}
            >
              <Input style={{height:'32px'}} size="large" placeholder="根据姓名、职位查询" {...getFieldProps('searchValue', { initialValue: '' })} />
            </FormItem>
          </Col>
          <Col sm={2}>
            <FormItem style={{ textAlign: 'right' }}>
              <Button  type="primary" htmlType="submit">搜索</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
});
FormWrap = Form.create()(FormWrap);

class Candidate extends React.Component {
  render() {
    // 表格数据源
    const dataSource=[{
        key: '1',
        name: '胡彦斌',
        demand: 'java招聘',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      }, {
        key: '2',
        name: '工头',
        demand: 'java招聘',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      }, {
        key: '3',
        name: '沈奇峰',
        demand: 'java招聘',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      },{
        key: '4',
        name: '晓光',
        demand: 'java招聘',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      }, {
        key: '5',
        name: '阿敏',
        demand: 'web前端',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      },{
        key: '6',
        name: '翔',
        demand: 'java招聘',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
      }, {
        key: '7',
        name: '伟峰',
        demand: 'web前端',
        telephone: 15867193214,
        toPosition:'java工程师',
        resume:'xxx.zip'
    }];
    // 表格分页配置
    const pagination = {
      total: dataSource.length,
      showQuickJumper: true,
      pageSize:5,
      onChange: (current) => {
        console.log('Current: ', current);
      },
    };

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item className={style.h5}>候选人管理</Breadcrumb.Item>
        </Breadcrumb>
        <hr className={style.mr10}/>
        <FormWrap />
        <TableCom dataSource={dataSource} pagination={pagination}/>
      </div>
    );
  }
}

Candidate.propTypes = {
};

export default Candidate;
