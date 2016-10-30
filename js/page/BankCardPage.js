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

import _find from 'lodash/find';
import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
  }

  onPressSubmit(){

    let { bankForm } = this.props;
    let { accout, bankDeposit } = this.state;

    this.props.action.bankApply({
      type:bankForm.type, accout, bankDeposit
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '提交申请失败'
                : '提交申请成功';
      Toast.showShortBottom(msg);
      if(!action.error){
        this.props.action.bankCardList();
        Actions.pop();
      }
    });

    return;
  }


  render(){
    return (
      <View>
        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={()=>Actions.inputBankType()}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>银行类型</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <Text>{this.props.bank ? this.props.bank.label : '请选择银行'}</Text>
            </View>
        </TouchableOpacity>
        <View style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>银行账号</Text>
            </View>
	          <View style={{flex:1,justifyContent:'center', marginRight:15}}>
              <TextInput style={{flex:1,textAlign:'right'}} onChangeText={accout=>this.setState({accout})} placeholder='请输入银行卡号'/>
            </View>
        </View>

        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.inputMoney}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>开户行</Text>
            </View>
            <View style={{flex:1,justifyContent:'center', marginRight:15}}>
              <TextInput style={{flex:1,textAlign:'right'}} onChangeText={bankDeposit=>this.setState({bankDeposit})} placeholder='请输入开户行'/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#00D4C4', borderRadius:5}} onPress={this.onPressSubmit.bind(this)}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>提交申请</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>({
    bankForm: state.bankForm,
    bank: _find(state.bankList.list, {value:state.bankForm.type}),
  }),
  dispatch=>({
    action: bindActionCreators({
      bankApply: action.bankApply,
      bankCardList: action.bankCardList
    }, dispatch)})
)(P);
