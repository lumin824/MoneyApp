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

import _find from 'lodash/find';

import action from '../action';

class P extends Component {

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  render(){
    return (
      <View style={{marginTop:100,flex:1}}>

        <View style={{borderWidth:1, height:48}}>
          <TextInput style={{flex:1}} placeholder='用户名' />
        </View>

        <View style={{borderWidth:1, height:48}}>
          <TextInput style={{flex:1}} placeholder='登录密码' />
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={Actions.register}>
            <Text>注册帐号</Text>
          </TouchableOpacity>
          <View style={{flex:1}} />
          <TouchableOpacity onPress={Actions.resetPassword}>
            <Text>忘记密码</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
            height:48,
            borderWidth:1,
            alignItems:'center', justifyContent:'center'}} onPress={Actions.main}>
          <Text>登录</Text>
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
    }, dispatch)})
)(P);
