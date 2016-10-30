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

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return (
      <ScrollView>
        <View style={{marginTop:20}} />
        {this.props.list.map((o,i)=>(
          <TouchableOpacity key={i} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={()=>{this.props.action.updateBankForm({type:o.value});Actions.pop();}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15}}>{o.label}</Text>
              </View>

              {this.props.backId == o.value ? (
                <View style={{justifyContent:'center', marginRight:15}}>
                  <IconFont name='check' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                </View>
              ):null}

          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default connect(
  state=>({
    backId: state.bankForm.type,
    list: state.bankList.list
  }),
  dispatch=>({
    action: bindActionCreators({
      updateBankForm: action.updateBankForm,
      bankList: action.bankList
    }, dispatch)})
)(P);
