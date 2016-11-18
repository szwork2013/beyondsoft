import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Project() {
  return (
    <div>
      项目组管理
    </div>
  );
}

Project.propTypes = {
};

export default connect()(Project);
