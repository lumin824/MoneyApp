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
  constructor(props){
    super(props);
    this.state = {
      val: props.stage
    };
  }
  onPressEnter(val){
    let stage = val;
    this.props.action.updateMoneyReqForm({
      stage
    });
    Actions.pop();
  }
  render(){
    return (
      <View>
        <View style={{marginTop:20}} />
        {['12','24'].map((o,i)=>(
          <TouchableOpacity key={i} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={this.onPressEnter.bind(this, o)}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15}}>{o} 期</Text>
              </View>

              {this.state.val == o ? (
                <View style={{justifyContent:'center', marginRight:15}}>
                  <IconFont name='check' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                </View>
              ):null}

          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default connect(
  state=>state.moneyReqForm,
  dispatch=>({
    action: bindActionCreators({
      updateMoneyReqForm: action.updateMoneyReqForm
    }, dispatch)})
)(P);
