import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
import style from './talents.less';
import {Row, Col,Breadcrumb ,Form, Input, Select,button,Table,Modal,InputNumber,Radio,Upload,Icon  } from 'antd';
import reqwest from 'reqwest';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
let FormWrap =React.createClass({
  handleSearch(e){
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },
  render(){
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol:{ span: 9 },
      wrapperCol:{ span: 10 },
    };
    return(
      <Form horizontal onSubmit={this.handleSearch}>
        <Row gutter={16}>
          <Col sm={5}>
            <FormItem
              label="工作经验"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 10 }}
            >
            <Select defaultValue="请选择" style={{ width: 120 }} {...getFieldProps('experience', { initialValue: '' })}>
              <Option value="0">1-3年</Option>
              <Option value="1">3-5年</Option>
              <Option value="2" >5年以上</Option>
            </Select>
            </FormItem>
          </Col>
          <Col sm={5}>
            <FormItem
              label="人才状态"
              {...formItemLayout}
            >
              <Select defaultValue="请选择" style={{ width: 120 }} {...getFieldProps('state', { initialValue: '' })}>
                <Option value="0">未提交</Option>
                <Option value="1">带推荐</Option>
                <Option value="2">已推荐</Option>
                <Option value="3">已关闭</Option>
              </Select>
            </FormItem>
          </Col>
          <Col sm={6}>
            <FormItem
              label="条件查询"
              {...formItemLayout}
            >
            <Input  size="default" placeholder="姓名/手机号" {...getFieldProps('nameOrphone', { initialValue: '' })}/>
            </FormItem>
          </Col>
          <Col sm={5} offset={3}>
            <FormItem style={{ textAlign: 'right' }}>
            <Button  type="primary" htmlType="submit">查询</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
});
FormWrap = Form.create()(FormWrap);
let FromModel =React.createClass({
  render(){
    var self = this;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { getFieldProps } = this.props.form;
    return(
      <Form horizontal>
        <Row gutter={24}>
          <Col sm={12}>
            <Input type="hidden" {...getFieldProps('key', { initialValue: this.props.record.key })}/>
            <FormItem
              label="人才姓名"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('name', { initialValue: this.props.record.name })}/>
            </FormItem>
            <FormItem
              label="年龄"
              {...formItemLayout}
            >
              <InputNumber min={1} max={200} style={{ width: 100 }}  {...getFieldProps('age', { initialValue: this.props.record.age })}/>
            </FormItem>
            <FormItem
              label="人才电话"
              {...formItemLayout}
            >
              <Input size="default"  {...getFieldProps('phone', { initialValue: this.props.record.phone })}/>
            </FormItem>
            <FormItem
              label="人才学位"
              {...formItemLayout}
            >
              <Select {...getFieldProps('degree', { initialValue: this.props.record.degree })}>
                <Option value="0">中专</Option>
                <Option value="1">大专</Option>
                <Option value="2">本科</Option>
                <Option value="3">博士</Option>
              </Select>
            </FormItem>
            <FormItem
              label="毕业院校"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('college', { initialValue: this.props.record.college })}/>
            </FormItem>
            <FormItem
              label="当前职位"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('position', { initialValue: this.props.record.position })}/>
            </FormItem>
            <FormItem
              label="意向职位"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('wantPosition', { initialValue: this.props.record.wantPosition })}/>
            </FormItem>
            <FormItem
              label="来源"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('from', { initialValue: this.props.record.from })}/>
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem
              label="人才性别"
              {...formItemLayout}
            >
            <RadioGroup {...getFieldProps('gender', { initialValue: this.props.record.gender })}>
              <RadioButton value="male">男</RadioButton>
              <RadioButton value="female">女</RadioButton>
            </RadioGroup>
            </FormItem>
            <FormItem
              label="人才户籍"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('census', { initialValue: this.props.record.census })}/>
            </FormItem>
            <FormItem
              label="Email"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('email', { initialValue: this.props.record.email })}/>
            </FormItem>
            <FormItem
              label="院校级别"
              {...formItemLayout}
            >
              <Select {...getFieldProps('level', { initialValue: this.props.record.level })}>
                <Option value="0">普通院校</Option>
                <Option value="1">985</Option>
                <Option value="2">211</Option>
                <Option value="3">留学</Option>
              </Select>
            </FormItem>
            <FormItem
              label="专业"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('profession', { initialValue: this.props.record.profession })}/>
            </FormItem>
            <FormItem
              label="工作经验"
              {...formItemLayout}
            >
              <Select {...getFieldProps('experience', { initialValue: this.props.record.experience })}>
                <Option value="0">1-3年</Option>
                <Option value="1">3-5年</Option>
                <Option value="2">5年以上</Option>
              </Select>
            </FormItem>
            <FormItem
              label="工作地点"
              {...formItemLayout}
            >
              <Input size="default" {...getFieldProps('address', { initialValue: this.props.record.address })}/>
            </FormItem>
            <FormItem
              label="附件"
              {...formItemLayout}
            >
              <div>简历1</div>
              {/* <Upload name="file" action="/upload.do" listType="file" onClick={()=>self.handleChangeclick}>
                <Button type="ghost">
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload> */}
            </FormItem>
          </Col>
        </Row>
        <Row>
        <Col sm={24}>
          <FormItem
            label="人才评价"
            id="control-textarea"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 19 }}
          >
            <Input type="textarea" id="control-textarea" rows="3" {...getFieldProps('evaluate', { initialValue: this.props.record.evaluate })}/>
          </FormItem>

          </Col>
        </Row>
      </Form>
    )
  }
})
FromModel = Form.create()(FromModel);
const TableWrap = React.createClass({
    getInitialState() {
      var self = this;
      return {
        data: [],
        selectedRowKeys: [],  // 这里配置默认勾选列
        pagination: {
          pageSize : 10
        },
        loading: false,
        visible: false,
        record:''
      };
    },
    data(){
      const data = [];
      for (let i = 1; i < 46; i++) {
        data.push({
          key: i,
          name: `翔${i}`,
          position:"web前端",
          phone:'15867195478',
          gender:'female',
          profession:"计算机",
          experience:'0',
          age: i+18,
          address:`西湖区湖底公园${i}号`,
          degree:'0',
          college:`杭州湖底公园${i}大学`,
          wantPosition:"web前端",
          from:"58同城",
          census:"绍兴",
          level:'0',
          email:"158684578@163.com",
          evaluate:"哈哈哈哈哈",
          state:'0'
        });
      }

      this.setState({
        data: data,
      });
    },
    showModal(record) {
      this.setState({
        visible: true,
        record : record
      });
    },
    handleOk(e) {
      console.log('点击了确定', this.refs.modelform.getFieldsValue());
      this.setState({
        visible: false,
        record : this.refs.modelform.getFieldsValue()
      });
    },
    handleCancel(e) {
      console.log('点击了取消');
      this.setState({
        visible: false,
      });
    },
    upLoad(e){
      console.log(e);
    },
    delete(e){
      console.log(e);
    },
    handleTableChange(pagination, filters, sorter) {
      const pager = this.state.pagination;
      pager.current = pagination.current;
      pager.showQuickJumper = true;
      // pager.showSizeChanger = true;
      this.setState({
        pagination: pager,
      });
      // this.fetch({
      //   results: pagination.pageSize,
      //   page: pagination.current,
      //   sortField: sorter.field,
      //   sortOrder: sorter.order
      // });
      this.data();
    },
    fetch(params = {}) {
      this.setState({ loading: true });
      reqwest({
        url: 'http://api.randomuser.me',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then(data => {
        const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        pagination.showSizeChanger= true;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
      });
    },
    componentWillMount() {
      // this.fetch();
      this.data();
    },
    onSelectChange(selectedRowKeys){
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    },

    render() {
      var self= this;
      const { loading, selectedRowKeys } = self.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: self.onSelectChange,
      };
      const hasSelected = selectedRowKeys.length > 0;
      const columns = [{
          title: '姓名',
          dataIndex: 'name',
          sorter: true,
          width: '10%',
        }, {
          title: '职位',
          dataIndex: 'position',
          width: '6%'
        }, {
          title: '电话',
          dataIndex: 'phone',
          width: '10%',
        }, {
          title: '性别',
          dataIndex: 'gender',
          filters: [
            { text: '男', value: 'male' },
            { text: '女', value: 'female' },
          ],
          width: '5%',
        }, {
          title: '专业',
          dataIndex: 'profession',
        }, {
          title: '工作经验',
          dataIndex: 'experience',
          render:(experience)=>{
            if(experience=='0'){
              return(
                <span>1-3年</span>
              )
            }else if(experience=='1'){
              return(
                <span>3-5年</span>
              )
            }else if(experience=='2'){
              return(
                <span>5年以上</span>
              )
            }
          }
        }, {
          title: '工作地点',
          dataIndex: 'address',
        }, {
          title: '人才状态',
          dataIndex: 'state',
          render:(state)=>{
            if(state=='0'){
              return(
                <span>未提交</span>
              )
            }else if(state=='1'){
              return(
                <span>待推荐</span>
              )
            }else if(state=='2'){
              return(
                <span>已推荐</span>
              )
            }else if(state=='3'){
              return(
                <span>已关闭</span>
              )
            }
          }
        }, {
          title: '操作',
          key: 'operation',
          render: (record) => {
            return(
            <span>
              <a data-id={record.key} onClick={() =>self.showModal(record)}>修改</a>
              <span className="ant-divider"></span>
              <a data-id={record.gender} onClick={()=>self.delete(record.gender)}>删除</a>
            </span>)
        }
      }];

      return (
        <div>
          <div style={{ marginBottom: 8 }}>
            <Link to="/Addtalents"><Button type="primary">新建</Button></Link><span className="ant-divider"></span>
            <Link to={hasSelected ? `/Recommend?TalentsCode=${selectedRowKeys}`  : '/Recommend'}><Button type="ghost">推荐</Button></Link><span className="ant-divider"></span>
            <Link to={hasSelected ? `/Collect?TalentsCode=${selectedRowKeys}`  : '/Collect'}><Button type="ghost">收藏</Button></Link>
          </div>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys} ` : ''}</span>
          <Table rowSelection={rowSelection}
            columns={columns}
            rowKey={record => record.key}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
            scroll={{ y: 240 }}
          />
          <Modal title="修改" visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
          {
            self.state.visible ?
            <FromModel ref="modelform" record={self.state.record}/>
            :null
          }
          </Modal>
        </div>
      );
    },
});
const Talents = React.createClass({

  render(){
  return (
    <div>
    <Breadcrumb>
      <Breadcrumb.Item className={style.h5}>人才管理</Breadcrumb.Item>
    </Breadcrumb>
    <hr className={style.mr10}/>
    <FormWrap />
    <TableWrap />
    </div>
  );
  }
});


export default Talents;
