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
            height:45,marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.realNameAuth}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>个人信息</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.user.mobile}</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45,marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.realNameAuth}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>实名认证</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>
                {function(type, msg){
                  switch(type){
                    case '0': return '点击认证';
                    case '1': return '审核中';
                    case '2': return '已认证';
                    case '3': return '重新认证';
                  }
                  return <Text>{type}</Text>
                }(this.props.user.identification)}
              </Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>通讯录认证</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>开发中</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45,marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>绑定微信</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>开发中</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>绑定支付宝</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>开发中</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>绑定银行卡</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:12,color:'#888'}}>开发中</Text>
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
  state=>({
    user:state.loginUser
  })
)(P);
