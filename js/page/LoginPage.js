import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-toast';

import _find from 'lodash/find';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: props.username,
      password: props.password
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  isDisabledSubmit(){
    let { username, password } = this.state;
    return !username || !password;
  }

  onPressSubmit(){
    let { username, password } = this.state;
    this.props.action.login({
      username, password
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '登陆失败'
                : '登陆成功';
      Toast.showShortBottom(msg);
      if(!action.error) Actions.main();
    });
  }

  render(){
    return (
      <View style={{flex:1, backgroundColor:'#2D2E3F'}}>
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../../res/logo.png')} style={{width:200,height:200}} />
        </View>

        <View style={{flex:1}}>
          <View style={{
              height:45,
              flexDirection:'row',
              borderBottomWidth:1, borderColor:this.state.focusUsername ? '#C2A62B' : '#888', borderRadius:3,
              marginHorizontal:15
            }}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="people" style={{backgroundColor:'transparent'}} size={20} color={this.state.focusUsername ? '#C2A62B' : '#fff'} />
            </View>
            <TextInput style={{
                flex:1,
                marginHorizontal:10,
                backgroundColor:'transparent',
                color: this.state.focusUsername ? '#C2A62B' : '#fff'
              }} onFocus={()=>this.setState({focusUsername:true})} onBlur={()=>this.setState({focusUsername:false})} onChangeText={username=>this.setState({username})} value={this.state.username} placeholder='请输入手机号' placeholderTextColor='#fff' />
          </View>

          <View style={{
              height:45,
              flexDirection:'row',
              borderBottomWidth:1, borderColor:this.state.focusPassword ? '#C2A62B' : '#888', borderRadius:3,
              marginHorizontal:15, marginTop:10,
            }}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="lock" style={{backgroundColor:'transparent'}} size={20} color={this.state.focusPassword ? '#C2A62B' : '#fff'} />
            </View>
            <TextInput style={{
                flex:1,
                marginHorizontal:10,
                backgroundColor:'transparent',
                color: this.state.focusPassword ? '#C2A62B' : '#fff'
              }} onFocus={()=>this.setState({focusPassword:true})} onBlur={()=>this.setState({focusPassword:false})} onChangeText={password=>this.setState({password})} value={this.state.password} placeholder='请输入密码' placeholderTextColor='#fff' secureTextEntry={true} />
          </View>


          <View style={{flexDirection:'row', height:45, marginHorizontal:15, marginTop:20}}>
            <TouchableOpacity style={{
                alignItems:'center', justifyContent:'center',
              }} onPress={Actions.register}>
              <Text style={{marginHorizontal:10, fontSize:16, color:'#fff'}}>注册帐号</Text>
            </TouchableOpacity>
            <View style={{flex:1}} />
            {null && (
              <TouchableOpacity style={{
                  alignItems:'center', justifyContent:'center',
                }} onPress={Actions.resetPassword}>
                <Text style={{color:'#fff', marginHorizontal:10, fontSize:16}}>忘记密码</Text>
              </TouchableOpacity>
            )}

          </View>

          <TouchableOpacity style={{
              height:45,
              alignItems:'center', justifyContent:'center',
              backgroundColor: this.isDisabledSubmit() ? '#888':'#00D4C4',
              borderRadius:5,
              marginHorizontal:15, marginTop:20, marginBottom:50
            }} onPress={this.onPressSubmit.bind(this)} disabled={this.isDisabledSubmit()}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>登  录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  state=>state.loginForm,
  dispatch=>({
    action: bindActionCreators({
      login: action.login
    }, dispatch)})
)(P);
