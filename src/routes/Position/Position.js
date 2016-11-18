import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Position() {
  return (
    <div>
      职位招聘管理
    </div>
  );
}

Position.propTypes = {
};

export default connect()(Position);
