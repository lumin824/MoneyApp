import React, { Component } from 'react';
import {
  Image,
  Slider,
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
      val: parseInt(props.periodNum)
    };
  }
  onPressEnter(val){

    let periodNum = this.state.val + '';
    this.props.action.updateMoneyReqForm({
      periodNum
    });
    Actions.pop();
  }
  render(){
    return (
      <View>
        <View style={{alignItems:'center', marginTop:20}}>
          <Text style={{fontSize:24}}>{this.state.val} 期</Text>
        </View>
        <Slider
          minimumTrackTintColor='#C2A62B'
          maximumTrackTintColor='#00D4C4'
          style={{marginHorizontal:15}} onValueChange={val => this.setState({val})} value={this.state.val} step={1} minimumValue={1} maximumValue={24} />

        <View style={{marginTop:20}} />
        {[1,3,6,12,24].map((o,i)=>(
          <TouchableOpacity key={i} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={()=>this.setState({val:o})}>
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

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#00D4C4', borderRadius:5}} onPress={this.onPressEnter.bind(this)}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>确定</Text>
            </View>
        </TouchableOpacity>
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
