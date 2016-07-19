import { createAction } from 'redux-actions';
import Wilddog from 'wilddog';

var wilddog = new Wilddog('https://moneyapp.wilddogio.com');

var currentPhone;

export var memberLogin = createAction('memberLoginResult', params => new Promise((resolve, reject)=>{
  wilddog.child(`member/${params.phone}/password`).once('value', (data, error)=>{
    if(!error){
      let val = data.val();
      if(val == params.password)
      {
        currentPhone = params.phone;
        resolve({
          phone: params.phone
        });
      }
      else
        reject('pwd error');
    }else{
      reject(error);
    }
  });
}), params=>params);

export var memberReg = createAction('memberRegResult', params => new Promise((resolve, reject)=>{
  wilddog.child(`member/${params.phone}`).once('value', (data, error)=>{
    if(!error){
      let val = data.val();
      if(val){
        reject('member exist');
      }
      else{
        wilddog.child(`member/${params.phone}`).set({
          password: params.password
        }, (error)=>{
          error ? reject(error) : resolve('ok');
        });
      }
    }
    else{
      reject(error);
    }
  });
}), params=>params);

export var setAddressBook = createAction('setAddressBookResult', params => new Promise((resolve, reject)=>{
  if(!currentPhone){reject('no login'); return;}
  wilddog.child(`member/${currentPhone}/addressBook`).set(params, (error)=>{
    error ? reject(error) : resolve('ok');
  })
}), params=>params);

export var addMoneyReq = createAction('addMoneyReqResult', params => new Promise((resolve, reject)=>{
  if(!currentPhone) { reject('no login'); return;}

  wilddog.child(`member/${currentPhone}/moneyReq`).push(params, (data, error)=>{
    error ? reject(error) : resolve(data);
  });
}), params=>params);

export var moneyReqList = createAction('moneyReqListResult', params => new Promise((resolve, reject)=>{
  if(!currentPhone) { reject('no login'); return;}

  wilddog.child(`member/${currentPhone}/moneyReq`).once('value', (data,error)=>{
    error ? reject(error) : resolve(data.val());
  });
}), params=>params);
