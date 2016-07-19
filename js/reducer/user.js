import { handleActions } from 'redux-actions';

export var loginForm = handleActions({
  'memberLoginResult': (state, action) => (action.error ? state : action.meta)
},{});

export var user = handleActions({
  'memberLoginResult': (state, action) => (action.error ? state : action.payload)
}, {});


export var productList = handleActions({
  'productListResult': (state, action) => (action.error ? state : action.payload)
},[]);

export var moneyReqList = handleActions({
  'moneyReqListResult': (state, action) => (action.error ? state : action.payload)
},{});

export var moneyReqForm = handleActions({
  'updateMoneyReqForm': (state, action) => ({...state, ...action.payload})
},{
  money:'2000',
  stage:'12',
});
