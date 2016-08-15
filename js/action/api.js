import { createAction } from 'redux-actions';

import { Actions } from 'react-native-router-flux';

import mapValues from 'lodash/mapValues';
import forEach from 'lodash/forEach';

//let httpServer = 'http://www.tdong.cn:8080/api/';

let httpServer = 'http://221.231.6.51:81/api/';

let httpApiList = {
  'mobileCode': {url:'mobileCode'},
  'register': {url:'register'},
  'login': {url:'login',obtainToken:true},
  'identification':{url:'admin/user/identification',withToken:true},
  'apply': {url:'admin/loan/apply', withToken:true},
  'applyList': {url:'admin/loan/applyList', withToken:true},
  'userInfo': {url:'admin/user/info', withToken:true},
  'uploadImage': {url:'admin/user/uploadImage', withToken:true},

  'moneyReq': 'moneyReq',
  'moneyReqList': 'moneyReqList',
  'memberAuthList': 'member-auth-list',
  'productList': 'product-list',
  'productBuy': 'product-buy',
  'productBuyList': 'product-buy-list',
  'productPay': 'product-pay'
};

let defaultHeader = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

var httpActions = mapValues(httpApiList, (actionConfig, actionName) => {
  if(typeof(actionConfig) === 'string') actionConfig = {url:actionConfig};
  let requestAction = createAction(actionName + 'Request');
  let resultAction = createAction(actionName + 'Result',
    params => {
      let url = actionConfig.url;

      let body;
      if(actionConfig.jsonBody){
        body = JSON.stringify(params);
      }else{
        body = new FormData();
        params = {...params, developer:'lumin824@163.com'};
        forEach(params, (o, k)=>{ body.append(k,o || '')});
      }

      let headers = { ...defaultHeader };
      if(actionConfig.headers) headers = {...actionConfig.headers};

      if(actionConfig.withToken) headers['X-Auth-Token'] = token;
      return fetch(`${httpServer}${url}`, {body,method:'POST',headers})
      // .then(response=>{
      //   let text = response.text();
      //   console.log(text);
      //   return response.status == '200' ? text: Promise.reject(text)
      // })
      .then(response => response.text())
      .then(text=>{console.log(text);let json = JSON.parse(text); return json;})
      .then(json=>{
        if(!json.success){
          //if(json.status == 200) Actions.login();
          return Promise.reject(new Error(json.message));
        }
        if(actionConfig.obtainToken) token = json.info.token;
        return json.info;
      });
    }, params=>params
  );

  return params => dispatch => {
    dispatch(requestAction(params));
    return dispatch(resultAction(params));
  }
});

export default {
  ...httpActions
}
