import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './slideComponent.less';
import {Icon, Row, Col, InputNumber,Radio,Upload, Breadcrumb, Form, Input, Select, Button} from 'antd';
import reqwest from 'reqwest';
import { Link } from 'react-router'
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
// 面试进度组件 -面试中
class Interview extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        radiovalue : 0,
        timeValue : '2016-12-02'
      };
      this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      radiovalue : e.target.value
    })
    console.log(this.props.showData)
  }
  render(){
    return (
      <div>
      <Row gutter={16} className={style.pdt20}>
        <Col sm={10} xs={10}>
          <FormItem
            label="面试结果："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
          <RadioGroup onChange={this.onChange} value={this.state.radiovalue} style={{position:'relative',top:'-2px'}}>
            <Radio value={0}>通过</Radio>
            <Radio value={1}>拒绝</Radio>
          </RadioGroup>
          </FormItem>
        </Col>
        <Col sm={6} xs={6} offset={6}>
          <FormItem
            label="面试时间："
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
          >
          <span>{this.state.timeValue}</span>
          </FormItem>
        </Col>

      </Row>
      <Row>
        <Col sm={22} xs={22}>
          <FormItem
            label="原因： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
          >
          <Input type="textarea" autosize={{ minRows: 4, maxRows: 6 }} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col sm={4} xs={4} offset={18}>
          <Button type="primary">提交</Button> <Button type="ghost">面试结束</Button>
        </Col>
      </Row>
      <hr className={style.hr}/>
      <Row className={style.pd10}>
        <Col sm={22} xs={22}>
          <FormItem
            label="记录： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
            className={style.mrgb10}
          >
          <div className={style.bord}>
          {this.state.record}
          </div>
          </FormItem>
        </Col>
      </Row>
      </div>
    )
  }
}
// 面试进度组件 -offer中
class Offer extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        radiovalue : 0
      };
      this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      radiovalue : e.target.value
    })
  }
  render(){
    return (
      <div>
      <Row gutter={16} className={style.pdt20}>
        <Col sm={10} xs={10}>
          <FormItem
            label="offer结果："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
          <RadioGroup onChange={this.onChange} value={this.state.radiovalue} style={{position:'relative',top:'-2px'}}>
            <Radio value={0}>通过</Radio>
            <Radio value={1}>拒绝</Radio>
          </RadioGroup>
          </FormItem>
        </Col>
        <Col sm={8} xs={8} offset={4}>
          <FormItem
            label="入职时间："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
          >
          <Input />
          </FormItem>
        </Col>

      </Row>
      <Row>
        <Col sm={22} xs={22}>
          <FormItem
            label="原因： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
          >
          <Input type="textarea" autosize={{ minRows: 4, maxRows: 6 }} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={3} offset={19}>
          <Button type="primary">提交</Button>
        </Col>
      </Row>
      <hr className={style.hr}/>
      <Row className={style.pd10}>
        <Col sm={22} xs={22}>
          <FormItem
            label="记录： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
            className={style.mrgb10}
          >
          <div className={style.bord}>
          {this.props.record}
          </div>
          </FormItem>
        </Col>
      </Row>
      </div>
    )
  }
}
// 面试进度组件 -待入职
class Notentry extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        radiovalue : 0
      };
      this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      radiovalue : e.target.value
    })
  }
  render(){
    return (
      <div>
      <Row gutter={16} className={style.pdt20}>
        <Col sm={10} xs={10}>
          <FormItem
            label="入职结果："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
          <RadioGroup onChange={this.onChange} value={this.state.radiovalue} style={{position:'relative',top:'-2px'}}>
            <Radio value={0}>未入职</Radio>
            <Radio value={1}>已入职</Radio>
          </RadioGroup>
          </FormItem>
        </Col>
        <Col sm={8} xs={8} offset={4}>
          <FormItem
            label="入职时间："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
          >
          <Input />
          </FormItem>
        </Col>

      </Row>
      <Row>
        <Col sm={22} xs={22}>
          <FormItem
            label="原因： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
          >
          <Input type="textarea" autosize={{ minRows: 4, maxRows: 6 }} />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={3} offset={19}>
          <Button type="primary">提交</Button>
        </Col>
      </Row>
      <hr className={style.hr}/>
      <Row className={style.pd10}>
        <Col sm={22} xs={22}>
          <FormItem
            label="记录： "
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
            className={style.mrgb10}
          >
          <div className={style.bord}>
          {this.props.record}
          </div>
          </FormItem>
        </Col>
      </Row>
      </div>
    )
  }
}

class slide extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        states :'1',
        data : [
          {
            'id':1,
            'name' : '项目组一',
            'state' :'面试中'
         },
         {
           'id':2,
           'name' : '项目组二',
           'state' :'offer中'
         },
         {
           'id':3,
           'name' : '项目组三',
           'state' :'待入职'
         }
       ],
       showData:[{
         'timeValue':'',
         'radiovalue':'',
         'reason':'',
         'record':''
       }]
      };
      this.handleChangeclick = this.handleChangeclick.bind(this);
  }
  handleChangeclick(e){
    this.setState({
      states : e.target.id,
      showData:[{
        'timeValue':'2016-12-02',
        'radiovalue':'1',
        'reason':'他很好！',
        'record':'面试通过'
      }
      ]
    })

  }
  fetch(url,method,params = {}) {
    this.setState({ loading: true });
    reqwest({
      url: 'https://api.randomuser.me/',
      method: 'get',
      data: {
        results: 10,
      },
      type: 'json',
    }).then(data => {

      this.setState({
        loading: false,
        data: data.results
      });
    });
  }
  componentDidMount() {
    // this.fetch();
  }
  render(){
    var self = this;
    const datas = this.state.data;
    var states = this.state.states;
    var showCom;
    if(states  === '1'){
      showCom = <Interview />;
     }
    else if(states  === '2')
    {
      showCom = <Offer />;
    }else if(states  === '3'){
      showCom = <Notentry />;
    }
    return (
      <div>
      <Row gutter={16} className={style.pd20}>
        <Col sm={6} xs={6}>
        <h3>所在项目组：</h3>
          <div className={style.he400}>
          <ul>
            {
              datas.map(function(list,i){
                return <li key={i} className={style.pdtb10}>
                  <span className={style.fl}>{list.name}</span>
                  <a onClick={self.handleChangeclick} id={list.id} className={style.fr}>{list.state}</a>
                </li>
              })
            }
            </ul>
          </div>
        </Col>
        <Col sm={17} xs={17} offset={1}>
          <h3>进度：</h3>
          <div className={style.he400}>
            { showCom }
          </div>
        </Col>
      </Row>
      </div>
  );
  }
};


export default slide;
