import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
function Candidate() {
  return (
    <div>
      候选人管理
    </div>
  );
}

Candidate.propTypes = {
};

export default connect()(Candidate);
