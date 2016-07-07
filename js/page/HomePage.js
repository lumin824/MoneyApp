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

class P extends Component {
  render(){
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{width:100, height:100, borderWidth:1, alignItems:'center'}}>
          <View style={{flex:1}}>
            <IconFont name="unie67e" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
          </View>
          <Text>申请贷款</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{width:100, height:100, borderWidth:1, alignItems:'center'}}>
          <View style={{flex:1}}>
            <IconFont name="unie67e" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
          </View>
          <Text>查询贷款</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{width:100, height:100, borderWidth:1, alignItems:'center'}}
          onPress={Actions.help}>
          <View style={{flex:1}}>
            <IconFont name="unie67e" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
          </View>
          <Text>帮助中心</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default P;
