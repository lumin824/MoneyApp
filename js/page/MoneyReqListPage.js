import React, { Component } from 'react';
import {
  Image,
  RefreshControl,
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
  constructor(props){
    super(props);
    this.state = {loading:false};
  }
  componentDidMount(){
    this.setState({loading:true});
    this.props.action.applyList().then(action=>{
      this.setState({loading:false});
    });
  }

  onRefresh(){
    this.setState({loading:true});
    this.props.action.applyList().then(action=>{
      this.setState({loading:false});
    });
  }


  render(){
    return (
      <ScrollView refreshControl={
          <RefreshControl refreshing={this.state.loading} onRefresh={this.onRefresh.bind(this)} />
        }>
        <View style={{marginTop:20}} />
        {_map(this.props.list, (o, i)=>{
          return (
            <TouchableOpacity key={i} onPress={()=>{this.props.action.selectMoneyReq(o.id);Actions.moneyReqDetail();}}>
              <View style={{
                  height:45, marginTop:1,
                  flexDirection:'row',
                  backgroundColor:'#fff'}}>
                  <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:15}}>¥{o.money} {o.periodNum}期</Text>
                    <Text style={{fontSize:12, color:'#888'}}>申请时间:{o.createDate}</Text>
                  </View>
                  <View style={{justifyContent:'center', marginRight:5}}>

                    <Text>{
                      function(status){
                        switch(status){
                          case '1': return '待审核';
                          case '2': return '审核通过';
                          case '3': return '申请未通过';
                          case '4': return '绑定完成';
                          case '5': return '确认绑定';
                          case '6': return '待放款';
                          case '7': return '放款成功';
                          case '8': return '放款失败';
                          case '9': return '确认收款';
                          case '10': return '完成';
                          case '11': return '重新绑定';
                          default: return status;
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
