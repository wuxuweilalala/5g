import axios from "../libs/api.request";
import API from "./map";
import cookie from '../../assets/libs/cookie';
import config from '../../assets/config';
var userInfo = JSON.parse(cookie.get('userInfo')) || '';
var time = parseInt(new Date().valueOf() / 1000);
export const wxCode = (params) => {
  return axios.request({
    url: API.scanWXQRCode,
    data: {
      appid: config.appid,
      wxcode: params.code,
      optype: +params.optype,
      supplyinfo : params.supplyinfo,
      Timestamp: parseInt(new Date().valueOf() / 1000),
    },
    method: "POST",
  });
};

export const sendSMSCode = (params) => {
  return axios.request({
    url: API.sendSMScode,
    data: {
      appid: config.appid,
      tel: params.mobile,
      Timestamp: time,
      captchaTicket: params.captchaTicket,
      captchaRandstr: params.captchaRandstr,
      reqIP: params.reqIP,
    },
    method: "POST",
  });
};

export const verifySMSCode = (params) => {
  return axios.request({
    url: API.verifySMSCode,
    data: {
      appid: config.appid,
      tel: params.tel,
      nonce: params.nonce,
      optype: +params.optype,
      verifycode: params.verifycode,
      supplyinfo: params.supplyinfo,
      Timestamp: time,
    },
    method: "POST",
  });
};
export const uploadFile = (params) => {
  return axios.request({
    url: API.uploadFile + "logintoken=" +userInfo.logintoken + "&appid=" + config.appid + "&userid=" + userInfo.userid + '&timestamp=' + time,
    method: "POST",
  });
};

export const checkUserLoginToken = (params) => {
  return axios.request({
    url: API.checkUserLoginToken,
    data: {
      appid: config.appid,
      userid: params.userid,
      logintoken: params.logintoken,
      timestamp: time
    },
    method: "POST",
  });
};

export const createCompany = (params) => {
    return axios.request({
      url: API.createCompany,
      data: {
        appid: config.appid,
        userid: params.userid,
        logintoken: params.logintoken,
        timestamp: time,
        companyInfoValue: params.data
      },
      method: "POST",
    });
  };

export const changeUserInfo = (params) => {
    return axios.request({
      url: API.changeUserInfo,
      data: {
        appid: config.appid,
        userid: params.userid,
        logintoken: params.logintoken,
        timestamp: time,
        userInfoValue: params.information
      },
      method: "POST",
    });
  };
  export const fileContent = (params) => {
    return axios.request({
      url: API.fileContent,
      data: {
        appid: config.appid,
        userid: params.userid,
        logintoken: params.logintoken,
        timestamp: time,
        fileName: params.fileName
      },
      method: "POST",
    });
  };
  export const queryUserInfo = (params) => {
    return axios.request({
      url: API.queryUserInfo,
      data: {
        appid: config.appid,
        userid: params.userid,
        logintoken: params.logintoken,
        timestamp: time
      },
      method: "POST",
    });
  }



  export const handleTime = () => {
    var date = new Date();
    // 获取当前月份
    var nowMonth = date.getMonth() + 1;
    // 获取当前是几号
    var strDate = date.getDate();
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
       nowMonth = "0" + nowMonth;
    }
    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
       strDate = "0" + strDate;
    }
    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    var nowDate = date.getFullYear() + '年' + nowMonth + '月' + strDate + '日';
    return  nowDate;
  }
