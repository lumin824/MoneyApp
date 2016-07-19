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

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <View>
        <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>你还未提交实名认证申请</Text>

        <View style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>当前帐号</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.phone}</Text>
            </View>
        </View>

        <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>实名认证后可使用xxx</Text>

        <View style={{
          height:45, marginTop:10,
          flexDirection:'row',
          backgroundColor:'#fff'}}>
          <View style={{justifyContent:'center', marginHorizontal:15}}>
            <Text style={{fontSize:15}}>真实姓名</Text>
          </View>
          <View style={{flex:1,justifyContent:'center', marginRight:15}}>
            <TextInput style={{flex:1,textAlign:'right'}} placeholder='必填'/>
          </View>
        </View>
        <View style={{
          height:45, marginTop:1,
          flexDirection:'row',
          backgroundColor:'#fff'}}>
          <View style={{justifyContent:'center', marginHorizontal:15}}>
            <Text style={{fontSize:15}}>手机号</Text>
          </View>
          <View style={{flex:1,justifyContent:'center', marginRight:15}}>
            <TextInput style={{flex:1,textAlign:'right'}} placeholder='必填'/>
          </View>
        </View>

        <TouchableOpacity style={{
            height:80, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={()=>this.props.action.imagePicker().then(action=>this.setState({uri1:action.payload}))}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              {this.state.uri1 ? (
                <Image source={{uri:this.state.uri1}} style={{height:60,width:80}} />
              ):(
                <View style={{height:60,width:80, backgroundColor:'#bbb', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:20}}>+</Text>
                </View>
              )}
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>二代身份证正面照片</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:80, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={()=>this.props.action.imagePicker().then(action=>this.setState({uri2:action.payload}))}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              {this.state.uri2 ? (
                <Image source={{uri:this.state.uri2}} style={{height:60,width:80}} />
              ):(
                <View style={{height:60,width:80, backgroundColor:'#bbb', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:20}}>+</Text>
                </View>
              )}
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>二代身份证背面照片</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:80, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={()=>this.props.action.imagePicker().then(action=>this.setState({uri3:action.payload}))}>
            <View style={{justifyContent:'center', marginLeft:10}}>

              {this.state.uri3 ? (
                <Image source={{uri:this.state.uri3}} style={{height:60,width:80}} />
              ):(
                <View style={{height:60,width:80, backgroundColor:'#bbb', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:20}}>+</Text>
                </View>
              )}

            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>手持二代身份证照片</Text>
              <Text style={{fontSize:10}}>要求：手持的身份证号码清晰，并且能看到手持人清晰的上半身照片</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#ff5e45', borderRadius:5}} onPress={Actions.pop}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>提交审核</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>state.loginForm,
  dispatch=>({
    action: bindActionCreators({
      imagePicker: action.imagePicker
    }, dispatch)})
)(P);
