import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import IconFont from '../IconFont';

class P extends Component {
  render(){
    return (
      <ScrollView>
        <TouchableOpacity style={{
            height:80, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.auth}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{flex:1,fontSize:16,color:'#000', marginTop:20}}>{this.props.phone}</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:20, height:80}}>
          <TouchableOpacity style={{
              flex:1, alignItems:'center',
              backgroundColor:'#fff'}} onPress={Actions.auth}>
              <Text style={{flex:1,fontSize:16,color:'#000', marginTop:20}}>最大额度</Text>
              <Text style={{fontSize:14,color:'#888', marginBottom:20}}>¥10000</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
              flex:1, alignItems:'center', marginLeft:1,
              backgroundColor:'#fff'}} onPress={Actions.auth}>
              <Text style={{flex:1,fontSize:16,color:'#000', marginTop:20}}>已使用</Text>
              <Text style={{fontSize:14,color:'#888', marginBottom:20}}>¥2000</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>实名认证 </Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>可提高最大额度 ¥5000</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>上传通讯录</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>可提高最大额度 ¥3000</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>绑定银行卡</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>可提高最大额度 ¥2000</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>绑定微信号</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>可提高最大额度 ¥1000</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>银行卡</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.about}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="selection" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>关于我们</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#ff5e45', borderRadius:5}} onPress={Actions.login}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>退出登录</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect(
  state=>state.loginForm
)(P);
