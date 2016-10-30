import React, { Component } from 'react';
import {
  Alert,
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
import Toast from 'react-native-toast';

import _map from 'lodash/map';
import _find from 'lodash/find';

import { SwipeView } from '../component';
import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.bankCardList();
  }

  bankCardDelete(bankId, account, audit){
    let opt = '解绑';
    if(audit == '0') opt = '取消申请';
    else if(autdit == '2') opt ='删除申请';
    Alert.alert('确认操作',`确认${opt} ${account}吗?`,[{text:'确认', onPress:()=>{
      this.props.action.bankCardDelete({bankId}).then(action=>{
        let msg = action.error
                  ? action.payload.message || '操作失败'
                  : '操作成功';
        Toast.showShortBottom(msg);
        if(!action.error){
          this.props.action.bankCardList();
        };
      });
    }},{text:'取消'}]);
  }


  render(){
    return (
      <ScrollView>
        <View style={{marginTop:20}} />
        {_map(this.props.list, (o, i)=>{
          return (
            <TouchableOpacity key={i} onPress={()=>this.bankCardDelete(o.id, o.account, o.audit)}>
              <View style={{
                  height:45, marginTop:1,
                  flexDirection:'row',
                  backgroundColor:'#fff'}}>
                  <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:15}}>{o.bank ? o.bank.label : o.type}</Text>
                    <Text style={{fontSize:12, color:'#888'}}>卡号:{o.account}</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:5}}>
                    <Text style={{fontSize:12,color:'#888'}}>{
                      function(status){
                        switch(status){
                          case '0': return '待审核';
                          case '1': return '审核通过';
                          case '2': return '审核未通过';
                        }
                      }(o.audit)
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
  state=>{
    let list = state.bankCardList.list;
    list = list.map(o=>({...o,bank:_find(state.bankList.list, {value:o.type})}));
    return {list, bankList: state.bankList.list};
  },
  dispatch=>({
    action: bindActionCreators({
      bankCardList: action.bankCardList,
      bankCardDelete: action.bankCardDelete
    }, dispatch)})
)(P);
