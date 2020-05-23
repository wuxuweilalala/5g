import React, { useEffect } from 'react';
import qs from "querystring";
import { wxCode, checkUserLoginToken } from '../../assets/api/index';
import cookie from "../../assets/libs/cookie";
import { message } from 'antd';
function Jump() {
    useEffect(() => {
        var queryParams = qs.parse(
          window.location.search.slice(window.location.search.indexOf("?") + 1)
        );
        queryParams['supplyinfo'] = cookie.get('supplyinfo') || '';
        wxCode(queryParams).then(res => {
          if(+res.code === 20001) {
            if(+queryParams.optype === 1) {
              cookie.set('optype', 4)
              cookie.set('supplyinfo', res.supplyinfo)
              return window.location.href = '/info';
            }
          } else if (+res.code === 0) {
            let data = {
              userid : res.userInfoValue.userid,
              logintoken : res.logintoken
            }
            cookie.set('userInfo', JSON.stringify(data))
            cookie.set('userInfoValue', JSON.stringify(res.userInfoValue));
            if(+queryParams.optype === 2) {
              cookie.set('optype', 2)
              cookie.set('supplyinfo', res.supplyinfo)
              return window.location.href = '/mnInfo';
            }
            checkUserLoginToken(data).then(res => {
              if(res.code === 0 ) {
                message.success('恭喜您，登录成功！2S后跳转控制台页面');
                return setTimeout(() => {
                   window.location.href = '/admin';
                },2000)
              }
            }).catch (err => {
              message.error('系统繁忙，请稍后再试')
            })
          } else if(+res.code === 21005) {
            return message.error("短信验证码错误，请重新输入");
         }else if(+res.code === 21006) {
             message.error('该微信号已注册，请更换其他微信号')
             setTimeout(() => {
              window.location.href = '/login';
            },2000)
          } else if(+res.code === 21007) {
             message.error('该手机号已注册，请更换其他手机号')
             setTimeout(() => {
              window.location.href = '/login';
            },2000)
          } else if (+res.code === 21014) {
             message.error('系统繁忙，请稍后再试')
             setTimeout(() => {
              window.location.href = '/login';
            },2000)
          } else {
            message.error('微信扫码失败，请重新扫码。')
            setTimeout(() => {
              window.location.href = '/login';
            },2000)
          }
        }).catch(err => {
          console.log('err', err);
        });
      }, []);
    return (
        <div>
        </div>
    );
}
export default Jump;