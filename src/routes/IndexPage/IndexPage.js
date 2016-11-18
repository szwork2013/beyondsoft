import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { Row,Col,Button } from 'antd';
function IndexPage() {
  return (
    <div className={styles.normal}>
    <h2 className={styles.title}>欢迎您，XXX！</h2>
    <div className={styles.content}>
      <Row gutter={40}>
        <Col span={8}>
          <Link to="/demand">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>需求管理</h2>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/candidate">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>候选人管理</h2>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/talents">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>人才管理</h2>
          </Link>
        </Col>
      </Row>
      <Row gutter={40}>
        <Col span={8}>
          <Link to="/project">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>项目组管理</h2>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/position">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>职位发布及管理</h2>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/user">
            <div className={styles.contentIcon}></div>
            <h2 className={styles.pd10}>用户管理</h2>
          </Link>
        </Col>
      </Row>
    </div>
    </div>
  );
}



export default connect()(IndexPage);
