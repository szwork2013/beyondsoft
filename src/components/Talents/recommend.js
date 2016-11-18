import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './talents.less';
import {Icon, Row, Col, Steps, Breadcrumb, Form, Input, Select, Button} from 'antd';
import reqwest from 'reqwest';
import { Link } from 'react-router'
const Step = Steps.Step;

const AddNew =React.createClass({
  getInitialState() {
    return {
      current: 1,
    };
  },
  next() {
    let current = this.state.current + 1;
    if (current === steps.length) {
      current = 0;
    }
    this.setState({ current });
  },
  render(){
    var self = this;
    const { current } = this.state;
    return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item className={style.h5}><Link to="/Talents"><span>人才管理</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Icon type="like" /><span>推荐人才</span></Breadcrumb.Item>
      </Breadcrumb>
      <Steps current={0} className={style.mt20}>
        <Step title="选择需求" description="选择需求进入下一步" />
        <Step title="沟通" description="对多个人才进行沟通" />
        <Step title="发送邮件" description="对沟通通过的人才发送邮件" />
        <Step title="完成" description="操作完成" />
      </Steps>
      <Row className={style.mt20}>
      <Col sm={6}>
        <h3>待推荐人才：</h3>
        <div>ajax获取选中人才</div>
      </Col>
      <Col sm={18}>
        2
      </Col>
      </Row>
    </div>
  );
  }
});


export default AddNew;
