import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Message() {
  return (
    <div>
      消息中心
    </div>
  );
}

Message.propTypes = {
};

export default connect()(Message);
