import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import reqwest from 'reqwest';
import style from './candidate.less';
import SlideCom from '../../components/candidate/slideComponent';
import {Row, Col,Breadcrumb ,Form, Input, Select ,Button,Table ,Icon} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


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
    const info ={
      name:'沈奇峰',
      telephone:15867245135,
      position:'java开发',
      resume:'沈奇峰的简历.zip'
    }
    return (
      <div>
        <Breadcrumb >
          <Breadcrumb.Item className={style.h5}><Link to="/Candidate"><span>候选人管理</span></Link></Breadcrumb.Item>
          <Breadcrumb.Item><Icon type="clock-circle-o" /><span>查看面试进度</span></Breadcrumb.Item>
        </Breadcrumb>
        <hr className={style.mr10}/>
        <div className={style.h40}>
          <Row gutter={16}>
          <Col sm={6} xs={6}>
            <FormItem
              label="候选人"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              <span>{info.name}</span>
            </FormItem>
          </Col>
          <Col sm={6} xs={6}>
            <FormItem
              label="电话"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
            >
              <span>{info.telephone}</span>
            </FormItem>
          </Col>
          <Col sm={6} xs={6}>
            <FormItem
              label="意向职位"
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <span>{info.position}</span>
            </FormItem>
          </Col>
          <Col sm={6} xs={6}>
            <FormItem
              label="简历"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <span>{info.resume}</span>
            </FormItem>
          </Col>
          </Row>
        </div>
        
        <SlideCom />
      </div>
    );
  }
}

Candidate.propTypes = {
};

export default Candidate;
