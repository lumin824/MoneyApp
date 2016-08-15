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

import _map from 'lodash/map';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.applyList();
  }


  render(){
    return (
      <ScrollView>
        <View style={{marginTop:20}} />
        {_map(this.props.list, (o, i)=>{
          return (
            <TouchableOpacity key={i} onPress={()=>{this.props.action.selectMoneyReq(o.id);Actions.moneyReqDetail();}}>
              <View style={{
                  height:45, marginTop:1,
                  flexDirection:'row',
                  backgroundColor:'#fff'}}>
                  <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:15}}>金额:¥{o.money} {o.periodNum}期</Text>
                    <Text style={{fontSize:12, color:'#888'}}>申请时间:{o.createDate}</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:5}}>

                    <Text>{
                      function(status){
                        switch(status){
                          case '0': return '你还未提交实名认证申请';
                          case '1': return '申请中';
                          case '2': return '申请通过';
                          case '3': return '申请未通过';
                          case '4': return '申请通过已放款';
                        }
                      }(o.status)
                      }</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:15}}>
                    <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                  </View>
              </View>

            </TouchableOpacity>
          );
        })}

      </ScrollView>
    );
  }
}

export default connect(
  state=>({
    list: state.applyList.list
  }),
  dispatch=>({
    action: bindActionCreators({
      applyList: action.applyList,
      selectMoneyReq: action.selectMoneyReq
    }, dispatch)})
)(P);
