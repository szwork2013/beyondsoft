import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './MainLayout.css';
import Slide from '../../components/Layout/Header';
import { Row, Col,Icon } from 'antd';
function MainLayout({ children,location }) {
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={6} className={styles.pd10}>
          <div className={styles.logo} ></div>
          <h2 className={styles.din}>&nbsp;&nbsp;博彦招聘项目</h2>
        </Col>
        <Col span={3} offset={15} className={styles.pd10,styles.tr}>
          <Link to="/message"><div className={styles.mail} ></div></Link>
          <Link to="/personal"><div className={styles.user} ></div></Link>
        </Col>
      </Row>
      <Row>
        <Col span={4} className={styles.vh90}>
          <Slide location={location} />
        </Col>
        <Col span={20} className={styles.h90,styles.ovysc}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

MainLayout.propTypes = {
  // children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

export default MainLayout;
