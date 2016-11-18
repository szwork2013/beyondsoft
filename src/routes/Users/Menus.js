import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Menus() {
  return (
    <div>
      菜单管理
    </div>
  );
}

Menus.propTypes = {
};

export default connect()(Menus);
