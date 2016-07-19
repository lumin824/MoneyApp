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
  componentDidMount(){
    this.props.action.deviceInfo();
  }

  onPressSubmit(){

    this.props.action.addressbookList()
      .then(action=>action.payload)
      .then(list=>this.props.action.setAddressBook(list))
      .then(action=>action.error ? Promise.reject('err') : null)
      .then(()=>{
        let { moneyReqForm, calc} = this.props;
        return this.props.action.addMoneyReq({...moneyReqForm, ...calc, review:true});
      })
      .then(()=>Actions.pop())
      .catch(e=>console.log(e));


    // addressbook.list().then(e=>{
    //   console.log(e);
    //   return;
    //   this.props.action.setAddressBook(e.slice(0,10))
    //   .then(action=>{
    //     if(!action.error){
    //       let {moneyReqForm, calc} = this.props;
    //       this.props.action.addMoneyReq({...moneyReqForm, ...calc}).then(()=>{
    //         Actions.pop();
    //       });
    //     }
    //   });
    // });
  }


  render(){
    return (
      <View>
        <View style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>iPhone型号</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <Text>{this.props.device.machineName}</Text>
            </View>
        </View>
        <View style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>手机号</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <Text>{this.props.user.phone}</Text>
            </View>
        </View>
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.inputMoney}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>申请金额</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:5}}>
              <Text>¥ {this.props.moneyReqForm.money}</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.inputStage}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>申请期数</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:5}}>
              <Text>{this.props.moneyReqForm.stage} 期</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>
        <View style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>贷款利息</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <Text>¥ {this.props.calc.interest}</Text>
            </View>
        </View>
        <View style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>管理费</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <Text>¥ {this.props.calc.manage}</Text>
            </View>
        </View>

        <View style={{marginHorizontal:15, marginTop:20}}>
          <Text style={{color:'#f00'}}>1.贷款金额：¥100～¥2000，且为100的整数倍。</Text>
          <Text style={{color:'#f00'}}>2.申请期数：7天为1期。</Text>
          <Text style={{color:'#f00'}}>3.贷款利息：0.03％/天，管理费：0.27％/天，24小时服务，承诺5小时内放款。</Text>
          <Text style={{color:'#f00'}}>4.第一次申请需要上传本地通讯录，上传成功后才能提交申请。</Text>
        </View>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#18B4ED', borderRadius:5}} onPress={this.onPressSubmit.bind(this)}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>上传通讯录并提交申请</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>({
    device: state.deviceInfo,
    user: state.user,
    moneyReqForm: state.moneyReqForm,
    calc: {
      interest: (parseInt(state.moneyReqForm.money) / 10000 * 3 * 7 * parseInt(state.moneyReqForm.stage)).toFixed(2),
      manage: (parseInt(state.moneyReqForm.money) / 10000 * 27 * 7 * parseInt(state.moneyReqForm.stage)).toFixed(2)
    }
  }),
  dispatch=>({
    action: bindActionCreators({
      deviceInfo: action.deviceInfo,
      setAddressBook: action.setAddressBook,
      addMoneyReq: action.addMoneyReq,
      addressbookList: action.addressbookList
    }, dispatch)})
)(P);
