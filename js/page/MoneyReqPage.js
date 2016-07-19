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

import { test } from 'react-native-addressbook';

import * as device from 'react-native-device';

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    device.test().then(device=>{this.setState({...device})});
  }

  onPressSubmit(){

    test().then(e=>{
      this.props.action.setAddressBook(e.slice(0,10))
      .then(action=>{
        if(!action.error){
          let {moneyReqForm, calc} = this.props;
          this.props.action.addMoneyReq({...moneyReqForm, ...calc}).then(()=>{
            Actions.pop();
          });
        }
      });
    });
  }

  machineToName(machine){
    let name = machine;
    let nameMap = {
      'iPhone1,1':'iPhone 2G (A1203)',
      'iPhone1,2':'iPhone 3G (A1241/A1324)',
      'iPhone2,1':'iPhone 3GS (A1303/A1325)',
      'iPhone3,1':'iPhone 4 (A1332)',
      'iPhone3,2':'iPhone 4 (A1332)',
      'iPhone3,3':'iPhone 4 (A1349)',
      'iPhone4,1':'iPhone 4S (A1387/A1431)',
      'iPhone5,1':'iPhone 5 (A1428)',
      'iPhone5,2':'iPhone 5 (A1429/A1442)',
      'iPhone5,3':'iPhone 5c (A1456/A1532)',
      'iPhone5,4':'iPhone 5c (A1507/A1516/A1526/A1529)',
      'iPhone6,1':'iPhone 5s (A1453/A1533)',
      'iPhone6,2':'iPhone 5s (A1457/A1518/A1528/A1530)',
      'iPhone7,1':'iPhone 6 Plus (A1522/A1524)',
      'iPhone7,2':'iPhone 6 (A1549/A1586)',
      'iPhone8,1':'iPhone 6s (A1633/A1688/A1691/A1700)',
      'iPhone8,2':'iPhone 6s Plus (A1634/A1687/A1690/A1699)',
      'iPhone8,4':'iPhone SE',
      'i386':'iPhone Simulator',
      'x86_64':'iPhone Simulator',
    };
    return name;
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
              <Text>{this.machineToName(this.state.machine)}</Text>
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
          <Text style={{color:'#f00'}}>3.贷款利息：1‰/期，管理费：20‰/期，24小时服务，承诺5小时内放款。</Text>
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
    user: state.user,
    moneyReqForm: state.moneyReqForm,
    calc: {
      interest: (parseInt(state.moneyReqForm.money) / 1000 * 1 * parseInt(state.moneyReqForm.stage)).toFixed(2),
      manage: (parseInt(state.moneyReqForm.money) / 1000 * 20 * parseInt(state.moneyReqForm.stage)).toFixed(2)
    }
  }),
  dispatch=>({
    action: bindActionCreators({
      setAddressBook: action.setAddressBook,
      addMoneyReq: action.addMoneyReq
    }, dispatch)})
)(P);
