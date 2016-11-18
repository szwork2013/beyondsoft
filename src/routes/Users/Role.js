import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Role() {
  return (
    <div>
      角色管理
    </div>
  );
}

Role.propTypes = {
};

export default connect()(Role);
