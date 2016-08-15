import { handleActions } from 'redux-actions';

export var loginForm = handleActions({
  'loginResult': (state, action) => (action.error ? state : action.meta)
},{});

export var loginUser = handleActions({
  'loginResult': (state, action) => (action.error ? state : {...state, ...action.payload.user}),
  'userInfoResult': (state, action) => (action.error ? state : {...state, ...action.payload}),
}, {});


export var productList = handleActions({
  'productListResult': (state, action) => (action.error ? state : action.payload)
},[]);

export var applyList = handleActions({
  'applyListResult': (state, action) => (action.error ? state : {...state, list:action.payload}),
  'selectMoneyReq': (state, action) => ({...state, selectedId:action.payload})
},{
  list:[],
  selectedId:null
});

export var moneyReqForm = handleActions({
  'updateMoneyReqForm': (state, action) => ({...state, ...action.payload})
},{
  money:'2000',
  periodNum:'12',
});
