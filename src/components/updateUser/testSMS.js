import React, { useState, useEffect, useRef, useReducer } from "react";
import cookie from "../../assets/libs/cookie";
import config from '../../assets/config';
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import classnames from 'classnames';
import { handleIp } from '../../assets/libs/util';
let ip = { value: '' };
window.callback = handleIp(ip);

async function callback(res) {
  // res（用户主动关闭验证码）= {ret: 2, ticket: null}
  // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}

}
window.callback = callback;

  // 首次渲染和 timing 变化时触发 effect

function TestSMS(props) {

  useEffect(() => {
    var obj = new window.WxLogin({
      self_redirect: false,
      id: "login_container",
      appid: config.appid,
      scope: "snsapi_login",
      redirect_uri: encodeURIComponent("http://5g.sparta.html5.qq.com/testWx"),
      state: `${255}`,
      style: "",
      href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIyMHB4O21hcmdpbi10b3A6IDI4cHg7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7IG1hcmdpbi10b3A6IDE0cHg7fQ0KLnN0YXR1c19pY29uIHtkaXNwbGF5Om5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ==",
    });
  }, []);
    // submit data
    // verifySMSCode(data).then((res) => {
    //   if (res.code === 0) {
    //     setToken(res.loginToken);
    //     cookie.set("supplyinfo", res.supplyinfo);
    //     return (window.location.href = "/info");
    //   } else if (res.code === 20002) {
    //   }
    // });
    return (
        <div className={classnames(`${props.className ||  'test'}`)}>
        <Button
          id="TencentCaptcha"
          data-appid="2077717009"
          data-cbfn="callback"
          size="small"
          type="primary"
        >
        验证
        </Button>
        <div id='login_container'></div>
      </div>
      );
  };

export default withRouter(TestSMS);
