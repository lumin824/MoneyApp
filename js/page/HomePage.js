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


import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.bankList();
  }
  render(){
    return (
      <View>
        <View style={{flexDirection:'row', marginTop:15}}>
          <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity
              style={{
                width:100, height:100, borderWidth:1, borderRadius:5, borderColor:'#888',
                alignItems:'center', justifyContent:'center'}} onPress={Actions.moneyReq}>
              <View style={{
                  width:50, height:50,
                  backgroundColor:'#ed5565',
                  borderRadius:25,
                  alignItems:'center', justifyContent:'center'}}>
                <IconFont name="sponsor" style={{backgroundColor:'transparent'}} size={36} color="#fff" />
              </View>
              <Text style={{marginTop:5}}>申请贷款</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity
              style={{
                width:100, height:100, borderWidth:1, borderRadius:5, borderColor:'#888',
                alignItems:'center', justifyContent:'center'}} onPress={Actions.moneyReqList}>
              <View>
                <View style={{
                    width:50, height:50,
                    backgroundColor:'#ffce54',
                    borderRadius:25,
                    alignItems:'center', justifyContent:'center'}}>
                  <IconFont name="searchlist" style={{backgroundColor:'transparent'}} size={36} color="#fff" />
                </View>
                <Text style={{marginTop:5}}>查询贷款</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            {null && (
            <TouchableOpacity
              style={{
                width:100, height:100, borderWidth:1, borderRadius:5, borderColor:'#888',
                alignItems:'center', justifyContent:'center'}}
              onPress={Actions.help}>
              <View style={{width:50, height:50,
                  backgroundColor:'#48cfad',
                  borderRadius:25,
                  alignItems:'center', justifyContent:'center'}}>
                <IconFont name="creative" style={{backgroundColor:'transparent'}} size={36} color="#fff" />
              </View>
              <Text style={{marginTop:5}}>帮助中心</Text>
            </TouchableOpacity>
            )}
          </View>

        </View>

        <View style={{flexDirection:'row', marginTop:15}}>
          <View style={{flex:1, alignItems:'center'}}>
            {null && (
              <TouchableOpacity
                style={{
                  width:100, height:100, borderWidth:1, borderRadius:5, borderColor:'#888',
                  alignItems:'center', justifyContent:'center'}}>
                <View style={{
                    width:50, height:50,
                    backgroundColor:'#5d9cec',
                    borderRadius:25,
                    alignItems:'center', justifyContent:'center'}}>
                  <IconFont name="refund" style={{backgroundColor:'transparent'}} size={36} color="#fff" />
                </View>
                <Text style={{marginTop:5}}>快速还款</Text>
              </TouchableOpacity>
            )}

          </View>
          <View style={{flex:1, alignItems:'center'}}>
          </View>
          <View style={{flex:1, alignItems:'center'}}>
          </View>
        </View>
        <View style={{margin:15}}>
          <Text style={{fontSize:16,color:'#00D4C4'}}>帮你贷</Text>
          <Text style={{lineHeight:20, marginTop:3}}>1.年满18周岁，iPhone型号为5s及以上，已实名认证且已绑定银行卡的用户可申请。</Text>
          <Text style={{lineHeight:20, marginTop:3}}>2.本产品是抵押iPhone进行贷款，根据手机型号将有不同的借款金额。</Text>
          <Text style={{lineHeight:20, marginTop:3}}>3.用户若违约，本公司有权对用户iPhone进行任何处置。</Text>
          <Text style={{lineHeight:20, marginTop:3}}>4.在申请资料齐全的情况下，请您耐心等待，会在24小时给到您审核结果。</Text>
          <Text style={{lineHeight:20, marginTop:3}}>5.具体详情请看帮助中心。</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  state=>({}),
  dispatch=>({
  action: bindActionCreators({
    bankList: action.bankList
  }, dispatch)})
)(P);
