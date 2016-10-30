import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class P extends Component {
  render(){
    return (<View style={{flex:1}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../../res/logo.png')} style={{width:200,height:200}} />
      </View>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text>服务电话：0515-80895555</Text>
        <Text>公司网址：http://www.81dai.com</Text>
      </View>
    </View>)
  }
}

export default P;
