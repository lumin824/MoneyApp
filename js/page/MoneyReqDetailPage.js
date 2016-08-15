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
  componentDidMount(){
    this.props.action.applyList();
  }


  render(){
    return (
      <ScrollView>

        <View style={{
            height:45,marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>申请时间</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.createDate}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>申请金额</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.money}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>申请期数</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.periodNum}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>审核状态</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>
                {function(status){
                    switch(status){
                      case '0': return '你还未提交实名认证申请';
                      case '1': return '申请中';
                      case '2': return '申请通过';
                      case '3': return '申请未通过';
                      case '4': return '申请通过已放款';
                    }
                    return <Text>{type}</Text>
                  }(this.props.apply.status)}
              </Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>手机号</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.mobile}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>利率/利息</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.rate}/{this.props.apply.interest}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>管理费</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.manageMoney}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>审核时间</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.auditDate}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>放款时间</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.payDate}</Text>
            </View>
        </View>

        <View style={{
            height:45,marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>每期还款</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.periodMoney}</Text>
            </View>
        </View>

        <Text style={{marginVertical:20, marginHorizontal:10, fontSize:12, color:'#444'}}>分期详情</Text>

        {this.props.apply.applyPlanList.map((o,i)=>{
          return (
            <View key={i} style={{
                height:45,marginTop:1,
                flexDirection:'row',
                backgroundColor:'#fff'}}>
                <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontSize:15}}>{i+1}期 {o.repayDate}前应还{o.repayTotalMoney}</Text>
                </View>
                <View style={{justifyContent:'center', marginRight:15}}>
                  <Text style={{fontSize:12,color:'#888'}}>
                    {function(o){
                        switch(o.status){
                          case '0': return '未还款';
                          case '1': return '已还款';
                          case '2': return '未还清';
                        }
                      }(o)}
                  </Text>
                </View>
            </View>
          );
        })}

      </ScrollView>
    );
  }
}

export default connect(
  state=>({
    apply: _find(state.applyList.list, {id:state.applyList.selectedId})
  }),
  dispatch=>({
    action: bindActionCreators({
      applyList: action.applyList
    }, dispatch)})
)(P);
