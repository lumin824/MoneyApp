import React, { Component } from 'react';

import {
  Text,
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
      let color = this.props.selected ? '#18B4ED' : '#B3B3B3';
        return (
          <View style={{alignItems:'center'}}>
            <IconFont name={iconName} style={{backgroundColor:'transparent'}} size={24} color={color} />
            <Text style={{color, fontSize:11}}>{this.props.iconText || this.props.title}</Text>
          </View>
        );
    }
}

const ConnectedRouter = connect()(Router);

class App extends Component {
  render(){
    return (
      <ConnectedRouter>
        <Scene key='login' component={page.LoginPage} title='登录' type='reset' />
        <Scene key='main' tabs={true} type='replace'>
          <Scene key='objectList' component={page.ObjectListPage} title='对象列表' icon={TabIcon} iconName='unie67e' activeIconName='unie67e' />
          <Scene key='profile' component={page.ProfilePage} title='我' icon={TabIcon} iconName='unie67e' activeIconName='unie67e' />
        </Scene>
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
