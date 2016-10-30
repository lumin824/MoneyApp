import { handleActions } from 'redux-actions';

import * as cfg from '../config';

let machineToName = (machine) => {
  let nameMap = {
    'iPhone1,1':'iPhone 2G (A1203)',
    'iPhone1,2':'iPhone 3G (A1241/A1324)',
    'iPhone2,1':'iPhone 3GS (A1303/A1325)',
    'iPhone3,1':'iPhone 4 (A1332)',
    'iPhone3,2':'iPhone 4 (A1332)',
    'iPhone3,3':'iPhone 4 (A1349)',
    'iPhone4,1':'iPhone 4S (A1387/A1431)',
    'iPhone5,1':'iPhone 5 (A1428)',
    'iPhone5,2':'iPhone 5 (A1429/A1442)',
    'iPhone5,3':'iPhone 5c (A1456/A1532)',
    'iPhone5,4':'iPhone 5c (A1507/A1516/A1526/A1529)',
    'iPhone6,1':'iPhone 5s (A1453/A1533)',
    'iPhone6,2':'iPhone 5s (A1457/A1518/A1528/A1530)',
    'iPhone7,1':'iPhone 6 Plus (A1522/A1524)',
    'iPhone7,2':'iPhone 6 (A1549/A1586)',
    'iPhone8,1':'iPhone 6s (A1633/A1688/A1691/A1700)',
    'iPhone8,2':'iPhone 6s Plus (A1634/A1687/A1690/A1699)',
    'iPhone8,4':'iPhone SE',
    'i386':'iPhone Simulator',
    'x86_64':'iPhone Simulator',
  };
  return nameMap[machine] || machine;
}

export var deviceInfo = handleActions({
  'deviceInfo': (state, action) => ({...action.payload, machineName:machineToName(action.payload.machine)})
},{});

export var authForm = handleActions({

},{

})

export const bankList = handleActions({
  'bankListResult': (state, action) => (action.error ? state : {...state, list:action.payload})
},{
  list:[]
});

export const bankForm = handleActions({
  'updateBankForm': (state, action) => ({...state, ...action.payload})
},{});

export const bankCardList = handleActions({
  'bankCardListResult': (state, action) => (action.error ? state : {...state, list:action.payload})
},{
  list:[]
})

export const config = handleActions({},cfg);
