import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './talents.less';
import {Icon, Row, Col, InputNumber,Radio,Upload, Breadcrumb, Form, Input, Select, Button} from 'antd';
import reqwest from 'reqwest';
import { Link } from 'react-router'
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AddNew =React.createClass({
  handleChangeclick(e){
    console.log("111");
  },
  render(){
    var self = this;
    return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item className={style.h5}><Link to="/Talents"><span>人才管理</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Icon type="user" /><span>新建人才</span></Breadcrumb.Item>
        <Breadcrumb.Item className={style.pullright}><Button type="primary">从简历导入</Button></Breadcrumb.Item>
      </Breadcrumb>
      <div className={style.pd20}>
        <Form horizontal>
          <Row gutter={16}>
            <Col sm={8}>
              <FormItem
                label="人才姓名"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="年龄"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <InputNumber min={1} max={200} style={{ width: 100 }} />
              </FormItem>
              <FormItem
                label="人才电话"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="人才学位"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="毕业院校"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="当前职位"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="意向职位"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="来源"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
            </Col>
            <Col sm={8}>
              <FormItem
                label="人才性别"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
              <RadioGroup >
                <RadioButton value="male">男</RadioButton>
                <RadioButton value="female">女</RadioButton>
              </RadioGroup>
              </FormItem>
              <FormItem
                label="人才户籍"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="Email"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="院校级别"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Select defaultValue="请选择">
                  <Option value="0">普通院校</Option>
                  <Option value="1">985</Option>
                  <Option value="2">211</Option>
                  <Option value="3">留学</Option>
                </Select>
              </FormItem>
              <FormItem
                label="专业"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="工作经验"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="工作地点"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
              >
                <Input size="default" />
              </FormItem>
              <FormItem
                label="附件"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                help="请上传人才简历"
              >
                <Upload name="file" action="/upload.do" listType="file" onClick={()=>self.handleChangeclick}>
                  <Button type="ghost">
                    <Icon type="upload" /> 点击上传
                  </Button>
                </Upload>
              </FormItem>
            </Col>
          </Row>
          <Row>
          <Col sm={16}>
            <FormItem
              label="人才评价"
              id="control-textarea"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
            >
              <Input type="textarea" id="control-textarea" rows="3" />
            </FormItem>

            </Col>
          </Row>
          <Row>
            <FormItem wrapperCol={{ span: 16, offset: 2 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">提交</Button><span className="ant-divider"></span>
              <Button type="primary" >保存</Button><span className="ant-divider"></span>
              <Link to="/Talents"><Button type="primary" >取消</Button></Link>
            </FormItem>
          </Row>
        </Form>
      </div>
    </div>
  );
  }
});


export default AddNew;
