import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import action from '../action';
import { Tip } from '../component';

class P extends Component {
  constructor(props){
    super(props);
    this.state = {
      codeSecond:0,
    };
  }

  componentDidMount(){
    this.interval = setInterval(this.onTick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  onTick(){
    let { codeSecond } = this.state;
    if(codeSecond > 0){
      this.setState({codeSecond:codeSecond-1});
    }
  }

  isDisabledCode(){
    let { phone } = this.state;
    return !phone || this.state.codeSecond > 0;
  }

  onPressCode(){
    let { phone } = this.state;
    this.props.action.smsCode({
      phone
    }).then(action=>this.setState({code:action.payload.code,codeSecond:10}));
  }

  isDisabledSubmit(){
    let { phone, code, password, password2 } = this.state;
    return !phone || !code || !password || !password2;
  }

  onPressSubmit(){
    let { phone, code, password, password2 } = this.state;
    this.props.action.memberReg({
      phone, code, password
    }).then(action=>{
      if(!action.error){ Actions.pop() }
      else{
        this.setState({tip:action.payload.description});
      }
    });
  }

  render(){
    let codeButtonText = this.state.codeSecond ? `${this.state.codeSecond}秒后重新获取` : '获取验证码';
    return (
      <View>
        <View style={{
            height:45,
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1,
            borderTopLeftRadius:5, borderTopRightRadius:5,
            marginHorizontal:15,marginTop:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={phone=>this.setState({phone})} placeholder='请输入手机号' />
        </View>

        <View style={{
            height:45, flexDirection:'row',
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1,
            marginHorizontal:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={code=>this.setState({code})} value={this.state.code} placeholder='请输入验证码' />
          <TouchableOpacity style={{
              width:120,
              alignItems:'center', justifyContent:'center',
              backgroundColor: this.isDisabledCode() ? '#888':'#18B4ED'
            }} onPress={this.onPressCode.bind(this)} disabled={this.isDisabledCode()}>
            <Text style={{color:'#fff'}}>{codeButtonText}</Text>
          </TouchableOpacity>
        </View>

        <View style={{
            height:45,
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1,
            marginHorizontal:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={password=>this.setState({password})} placeholder='请输入密码' secureTextEntry={true} />
        </View>

        <View style={{
            height:45,
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1, borderBottomWidth:1,
            borderBottomLeftRadius:5, borderBottomRightRadius:5,
            marginHorizontal:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={password2=>this.setState({password2})} placeholder='请再次输入密码' secureTextEntry={true} />
        </View>

        <Tip msg={this.state.tip} />

        <TouchableOpacity style={{
            height:45,
            alignItems:'center', justifyContent:'center',
            backgroundColor: this.isDisabledSubmit() ? '#888':'#18B4ED',
            borderRadius:5,
            marginHorizontal:15, marginTop:22,
          }} onPress={this.onPressSubmit.bind(this)} disabled={this.isDisabledSubmit()}>
          <Text style={{color:'#fff', fontSize:18}}>注册</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>({
  }),
  dispatch=>({
    action: bindActionCreators({
      memberReg: action.memberReg,
      smsCode: action.smsCode
    }, dispatch)})
)(P);
