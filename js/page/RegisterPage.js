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
import Toast from 'react-native-toast';

import action from '../action';

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
    let { mobile } = this.state;
    return !mobile || this.state.codeSecond > 0;
  }

  onPressCode(){
    let { mobile } = this.state;
    this.props.action.mobileCode({
      mobile
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '验证码发送失败'
                : '验证码发送成功';
      Toast.showShortBottom(msg);
      this.setState({code:action.payload.code,codeSecond:10})
    });
  }

  isDisabledSubmit(){
    let { mobile, code, password, password2 } = this.state;
    return !mobile || !code || !password || !password2;
  }

  onPressSubmit(){
    let { mobile, code, password, password2 } = this.state;
    this.props.action.register({
      mobile, code, password
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '注册失败'
                : '注册成功';
      Toast.showShortBottom(msg);
      if(!action.error) Actions.pop();
    });
  }

  render(){
    let codeButtonText = this.state.codeSecond ? `${this.state.codeSecond}秒后重新获取` : '获取验证码';
    return (
      <View>
        <View style={{
            height:45,
            marginTop:15, marginHorizontal:15,
            borderBottomWidth:1, borderColor: '#888',
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={mobile=>this.setState({mobile})} placeholder='请输入手机号' />
        </View>

        <View style={{
            height:45, flexDirection:'row',
            marginTop:10, marginHorizontal:15,
            borderBottomWidth:1, borderColor: '#888',
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={code=>this.setState({code})} value={this.state.code} placeholder='请输入验证码' />
          <TouchableOpacity style={{
              width:120, marginVertical:5, borderRadius:3,
              alignItems:'center', justifyContent:'center',
              backgroundColor: this.isDisabledCode() ? '#888':'#00D4C4'
            }} onPress={this.onPressCode.bind(this)} disabled={this.isDisabledCode()}>
            <Text style={{color:'#fff'}}>{codeButtonText}</Text>
          </TouchableOpacity>
        </View>

        <View style={{
            height:45, marginTop:10,marginHorizontal:15,
            borderBottomWidth:1, borderColor: '#888',
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={password=>this.setState({password})} placeholder='请输入密码' secureTextEntry={true} />
        </View>

        <View style={{
            height:45, marginTop:10,marginHorizontal:15,
            borderBottomWidth:1, borderColor: '#888',
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={password2=>this.setState({password2})} placeholder='请再次输入密码' secureTextEntry={true} />
        </View>

        <TouchableOpacity style={{
            height:45,
            alignItems:'center', justifyContent:'center',
            backgroundColor: this.isDisabledSubmit() ? '#888':'#00D4C4',
            borderRadius:5,
            marginHorizontal:15, marginTop:22,
          }} onPress={this.onPressSubmit.bind(this)} disabled={this.isDisabledSubmit()}>
          <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>注  册</Text>
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
      register: action.register,
      mobileCode: action.mobileCode
    }, dispatch)})
)(P);
