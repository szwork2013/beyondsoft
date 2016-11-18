import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Personal() {
  return (
    <div>
      个人中心
    </div>
  );
}

Personal.propTypes = {
};

export default connect()(Personal);
