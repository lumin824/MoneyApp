import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { connect, Provider } from 'react-redux';
import { Scene, Router, Actions, Reducer } from 'react-native-router-flux';

import configStore from './configStore';
import * as page from './page';
import IconFont from './IconFont';

class TabIcon extends Component {
    render(){
      let iconName = this.props.selected ? this.props.activeIconName || this.props.iconName : this.props.iconName;
      let color = this.props.selected ? '#00D4C4' : '#fff';
        return (
          <View style={{alignItems:'center'}}>
            <IconFont name={iconName} style={{backgroundColor:'transparent'}} size={24} color={color} />
            <Text style={{color, fontSize:11}}>{this.props.iconText || this.props.title}</Text>
          </View>
        );
    }
}

class BackButton extends Component {
  render(){
    return (
      <TouchableOpacity style={this.props.style} onPress={Actions.pop}>
        <View style={{justifyContent:'center'}}>
          <IconFont name='back' size={20} color='#fff' />
        </View>
      </TouchableOpacity>
    );
  }
}

const ConnectedRouter = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#eee',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class App extends Component {
  render(){
    return (
      <ConnectedRouter
        getSceneStyle={getSceneStyle}
        navigationBarStyle={{backgroundColor:'#2D2E3F',borderBottomWidth:0}}
        titleStyle={{color:'#fff'}}
        >
        <Scene key='login' component={page.LoginPage} hideNavBar={true} hideTabBar={true} title='登录' type='reset' />
        <Scene key='main' tabs={true} type='replace' tabBarStyle={{backgroundColor:'#2D2E3F'}}>
          <Scene key='home' component={page.HomePage} title='功能' icon={TabIcon} iconName='home' activeIconName='homefill' />
          <Scene key='profile' component={page.ProfilePage} title='我的' icon={TabIcon} iconName='my' activeIconName='myfill' />
        </Scene>
        <Scene key='about' component={page.AboutPage} hideNavBar={false} hideTabBar={true} title='关于' backButton={BackButton}/>
        <Scene key='authHelp' component={page.AuthHelpPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='realNameAuth' component={page.RealNameAuthPage} hideNavBar={false} hideTabBar={true} title='实名认证' backButton={BackButton} />
        <Scene key='help' component={page.HelpPage} hideNavBar={false} hideTabBar={true} title='帮助中心' backButton={BackButton}/>
        <Scene key='register' component={page.RegisterPage} hideNavBar={false} hideTabBar={true} title='注册' backButton={BackButton}/>
        <Scene key='resetPassword' component={page.ResetPasswordPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='moneyReq' component={page.MoneyReqPage} hideNavBar={false} hideTabBar={true} title='申请贷款' backButton={BackButton} />
        <Scene key='moneyReqList' component={page.MoneyReqListPage} hideNavBar={false} hideTabBar={true} title='查询贷款' backButton={BackButton} />
        <Scene key='moneyReqDetail' component={page.MoneyReqDetailPage} hideNavBar={false} hideTabBar={true} title='贷款详情' backButton={BackButton} />

        <Scene key='inputStage' component={page.InputStagePage} hideNavBar={false} hideTabBar={true} title='申请期数' backButton={BackButton} />
        <Scene key='inputMoney' component={page.InputMoneyPage} hideNavBar={false} hideTabBar={true} title='申请金额' backButton={BackButton} />

        <Scene key='helpBindICloud' component={page.HelpBindICloudPage} hideNavBar={false} hideTabBar={true} title='申请金额' backButton={BackButton} />
        <Scene key='helpFlow' component={page.HelpFlowPage} hideNavBar={false} hideTabBar={true} title='申请金额' backButton={BackButton} />

      </ConnectedRouter>
    );
  }
};

const ConnectedApp = connect()(App);

class ReduxApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      store: configStore(()=>this.setState({isLoading:false}))
    }
  }
  render(){
    if(this.state.isLoading){
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default ReduxApp;
