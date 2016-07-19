import { createAction } from 'redux-actions';

import * as device from 'react-native-device';
import * as addressbook from 'react-native-addressbook';

import ImagePicker from 'react-native-image-picker';

//export var memberLogin = createAction('memberLoginResult', params=>Promise.resolve(params), params=>params);

export var updateMoneyReqForm = createAction('updateMoneyReqForm');

export var deviceInfo = createAction('deviceInfo', device.info);

export var addressbookList = createAction('addressbookList', addressbook.list);

export var imagePicker = createAction('imagePicker', params=>new Promise((resolve, reject)=>{
  ImagePicker.showImagePicker({
    title:'请选择',
    takePhotoButtonTitle:'用照相机拍照',
    chooseFromLibraryButtonTitle:'',
    cancelButtonTitle:'取消'
  },(e)=>e.uri?resolve(e.uri):reject('cancel'));
}));
