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

import _map from 'lodash/map';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.moneyReqList();
  }


  render(){
    return (
      <View>
        <View style={{marginTop:20}} />
        {_map(this.props.moneyReqList, (o, i)=>{
          return (
            <View key={i}>
              <View style={{
                  height:45, marginTop:1,
                  flexDirection:'row',
                  backgroundColor:'#fff'}} onPress={Actions.userinfo}>
                  <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:15}}>金额:¥{o.money} {o.stage}期</Text>
                    <Text style={{fontSize:12, color:'#888'}}>利息:¥{o.interest} 管理费:¥{o.manage}</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:5}}>
                    <Text>待审核</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:15}}>
                    <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                  </View>
              </View>
            </View>
          );
        })}

      </View>
    );
  }
}

export default connect(
  state=>({moneyReqList: state.moneyReqList}),
  dispatch=>({
    action: bindActionCreators({
      moneyReqList: action.moneyReqList
    }, dispatch)})
)(P);
