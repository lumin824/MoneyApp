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

import QRCode from 'react-native-qrcode';

class P extends Component {
  render(){
    return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <QRCode value={`${this.props.httpServer}enroll?rId=${this.props.uid}`} size={200} bgColor='purple' fgColor='white' />
    </View>);
  }
}

export default connect(
  state=>({
    httpServer: state.config.httpServer,
    uid:state.loginUser.id
  }),
  dispatch=>({
    action: bindActionCreators({
    }, dispatch)})
)(P);
