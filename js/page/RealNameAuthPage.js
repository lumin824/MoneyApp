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

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  constructor(props){
    super(props);
    let imageList = this.props.user.imageList;
    this.state = {
      name: this.props.user.name,
      no: this.props.user.no,
      uri1: imageList[0]? 'http://221.231.6.51:81' + imageList[0].image: null,
      uri2: imageList[1]? 'http://221.231.6.51:81' + imageList[1].image: null,
      uri3: imageList[2]? 'http://221.231.6.51:81' + imageList[2].image: null,
      image1: imageList[0]?imageList[0].image:null,
      image2: imageList[1]?imageList[1].image:null,
      image3: imageList[2]?imageList[2].image:null,
    };

    console.log(this.state);
  }

  componentDidMount(){
    this.props.action.userInfo();
  }

  onSelectImage(idx){
    this.props.action.imagePicker().then(
      action=>{
        let uri = action.payload;
        this.props.action.uploadImage({file:{uri,type:'image/jpg',name:uri}})
        .then(action=>this.setState({['image'+idx]:action.payload}));
        this.setState({['uri'+idx]:action.payload});
        return ;
      }
    );
  }

  onPressSubmit(){
    let { name, no, image1, image2, image3 } = this.state;
    let images = [image1,image2,image3].join(',');
    this.props.action.identification({
      name, no, images
    })
    .then(action=>{
      let msg = action.error
                ? action.payload.message || '申请提交失败'
                : '申请提交成功';
      Toast.showShortBottom(msg);
      if(!action.error) Actions.pop();
    });
  }
  render(){
    return (
      <View>
        {function(type, msg){
          switch(type){
            case '0': return <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>你还未提交实名认证申请</Text>;
            case '1': return <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>已提交实名认证申请</Text>;
            case '2': return <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>已通过实名认证</Text>;
            case '3': return <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>认证申请被拒绝:{msg}</Text>;
          }
          return <Text>{type}</Text>
        }(this.props.user.identification, this.props.user.remarks)}


        <View style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>当前帐号</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.user.mobile}</Text>
            </View>
        </View>

        <Text style={{marginTop:10, marginHorizontal:10, fontSize:12, color:'#444'}}>实名认证后可使用本软件</Text>

        <View style={{
          height:45, marginTop:10,
          flexDirection:'row',
          backgroundColor:'#fff'}}>
          <View style={{justifyContent:'center', marginHorizontal:15}}>
            <Text style={{fontSize:15}}>真实姓名</Text>
          </View>
          <View style={{flex:1,justifyContent:'center', marginRight:15}}>
            <TextInput style={{flex:1,textAlign:'right'}} onChangeText={name=>this.setState({name})} value={this.state.name} placeholder='必填'/>
          </View>
        </View>

        <View style={{
          height:45, marginTop:1,
          flexDirection:'row',
          backgroundColor:'#fff'}}>
          <View style={{justifyContent:'center', marginHorizontal:15}}>
            <Text style={{fontSize:15}}>身份证号码</Text>
          </View>
          <View style={{flex:1,justifyContent:'center', marginRight:15}}>
            <TextInput style={{flex:1,textAlign:'right'}} onChangeText={no=>this.setState({no})} value={this.state.no} placeholder='必填'/>
          </View>
        </View>

        <TouchableOpacity style={{
            height:80, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={this.onSelectImage.bind(this,1)}>
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
            backgroundColor:'#fff'}} onPress={this.onSelectImage.bind(this,2)}>
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
            backgroundColor:'#fff'}} onPress={this.onSelectImage.bind(this,3)}>
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
            backgroundColor:'#ff5e45', borderRadius:5}} onPress={this.onPressSubmit.bind(this)}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>提交审核</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>({
    user:state.loginUser
  }),
  dispatch=>({
    action: bindActionCreators({
      imagePicker: action.imagePicker,
      identification: action.identification,
      userInfo: action.userInfo,
      uploadImage: action.uploadImage
    }, dispatch)})
)(P);
