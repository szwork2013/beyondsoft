import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Authority() {
  return (
    <div>
      权限管理
    </div>
  );
}

Authority.propTypes = {
};

export default connect()(Authority);
