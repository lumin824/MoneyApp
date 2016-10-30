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

import _find from 'lodash/find';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.action.bankCardList();
  }
  render(){
    return (
      <ScrollView>
        <View style={{marginTop:20}} />
        {this.props.list.map((o,i)=>(
          <TouchableOpacity key={i} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={()=>{this.props.action.updateMoneyReqForm({bankId:o.id});Actions.pop();}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15}}>{o.bank ? o.bank.label : o.type}</Text>
                <Text style={{fontSize:12, color:'#888'}}>卡号:{o.account}</Text>
              </View>

              {this.props.moneyReqForm.bankId == o.id ? (
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
  state=>{
    {
      let list = state.bankCardList.list;
      list = list.map(o=>({...o,bank:_find(state.bankList.list, {value:o.type})}));
      return {list, bankList: state.bankList.list, moneyReqForm: state.moneyReqForm};
    }
  },
  dispatch=>({
    action: bindActionCreators({
      updateMoneyReqForm: action.updateMoneyReqForm,
      bankCardList: action.bankCardList,
    }, dispatch)})
)(P);
