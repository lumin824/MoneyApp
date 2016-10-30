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
import Toast from 'react-native-toast';

import _find from 'lodash/find';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
  }

  onPressIcloudBind(){
    let applyId = this.props.apply.id;
    this.props.action.icloudBind({
      applyId
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '提交失败'
                : '提交成功';
      Toast.showShortBottom(msg);
      if(!action.error){
        this.props.action.applyList();
        Actions.pop();
      }
    });
  }
  onPressLoanHasReceive(){
    let applyId = this.props.apply.id;
    this.props.action.loanHasReceive({
      applyId
    }).then(action=>{
      let msg = action.error
                ? action.payload.message || '提交失败'
                : '提交成功';
      Toast.showShortBottom(msg);
      if(!action.error){
        this.props.action.applyList();
        Actions.pop();
      }
    });
  }

  render(){
    return (
      <ScrollView>
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
              <Text style={{fontSize:15}}>状态</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>
                {function(status){
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
                    return <Text>{type}</Text>
                  }(this.props.apply.status)}
              </Text>
            </View>
        </View>

        {this.props.apply.status == '3' ? (
          <View style={{
              height:45,marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15}}>备注</Text>
              </View>
              <View style={{justifyContent:'center', marginRight:15}}>
                <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.remarks}</Text>
              </View>
          </View>
        ) : null}

        {this.props.apply.status == '7' ? (
          <View style={{
              height:45,marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15}}>备注</Text>
              </View>
              <View style={{justifyContent:'center', marginRight:15}}>
                <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.payRemarks}</Text>
              </View>
          </View>
        ) : null}

        {this.props.apply.status == '2' || this.props.apply.status == '11' ? (
          <View>
            <Text style={{marginVertical:20, marginHorizontal:10, fontSize:12, color:'#f00'}}>请使用以下信息绑定手机</Text>
            <View style={{
                height:45,marginTop:0,
                flexDirection:'row',
                backgroundColor:'#fff'}}>
                <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontSize:15}}>iCloud账号</Text>
                </View>
                <View style={{justifyContent:'center', marginRight:15}}>
                  <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.icloud.username}</Text>
                </View>
            </View>

            <TouchableOpacity style={{
                height:45, marginTop:20,
                flexDirection:'row',
                marginHorizontal:15,
                backgroundColor:'#00D4C4', borderRadius:5}} onPress={this.onPressIcloudBind.bind(this)}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
                  <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>确认绑定</Text>
                </View>
            </TouchableOpacity>
          </View>
        ) : null}

        {this.props.apply.status == '7' ? (
          <View>
            <Text style={{marginVertical:20, marginHorizontal:10, fontSize:12, color:'#f00'}}>请确认信息</Text>
            <View style={{
                height:45,marginTop:0,
                flexDirection:'row',
                backgroundColor:'#fff'}}>
                <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontSize:15}}>实际打款</Text>
                </View>
                <View style={{justifyContent:'center', marginRight:15}}>
                  <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.payFactMoney}</Text>
                </View>
            </View>
            <TouchableOpacity style={{
                height:45, marginTop:20,
                flexDirection:'row',
                marginHorizontal:15,
                backgroundColor:'#00D4C4', borderRadius:5}} onPress={this.onPressLoanHasReceive.bind(this)}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
                  <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>确认收款</Text>
                </View>
            </TouchableOpacity>
          </View>
        ) : null}




        <View style={{
            height:45,marginTop:20,
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
              <Text style={{fontSize:15}}>每期还款</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <Text style={{fontSize:12,color:'#888'}}>{this.props.apply.periodMoney}</Text>
            </View>
        </View>

        {this.props.apply.auditDate ? (
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
        ) : null}

        {this.props.apply.payDate ? (
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
        ) : null}

        { ~['9','10'].indexOf(this.props.apply.status) && this.props.apply.applyPlanList.length ? (
          <View>
            <Text style={{marginVertical:20, marginHorizontal:10, fontSize:12, color:'#444'}}>分期详情</Text>
            {this.props.apply.applyPlanList.map((o,i)=>{
              return (
                <View key={i} style={{
                    height:45,marginTop:1,
                    flexDirection:'row',
                    backgroundColor:'#fff'}}>
                    <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                        <Text style={{fontSize:15}}>{i+1}期 {o.repayDate}</Text>
                        <Text style={{fontSize:12, color:'#888'}}>应还{o.repayTotalMoney} 已还{o.repayFactMoney}</Text>
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
          </View>
        ):null}


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
      icloudBind: action.icloudBind,
      loanHasReceive: action.loanHasReceive,
      applyList: action.applyList
    }, dispatch)})
)(P);
