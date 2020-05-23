// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect } from "react";
import cookie from "../../assets/libs/cookie";
import {
  Form,
  Steps,
  message,
  Tabs,
  Modal
} from "antd";
import config from '../../assets/config';
import { sendSMSCode, verifySMSCode } from "../../assets/api/index";
import { withRouter } from "react-router-dom";
import "./scan.scss";
import "antd/dist/antd.css";
let ip = "";
let smsInfo = [];
// var userAgent = navigator.userAgent;
// var isEdge = userAgent.indexOf("Edge") > -1;
// var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
// var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
// if(!isEdge && !isIE) {
//   window.RTCPeerConnection =
//   window.RTCPeerConnection ||
//   window.mozRTCPeerConnection ||
//   window.webkitRTCPeerConnection; //compatibility for Firefox and chrome
// var pc = new RTCPeerConnection({ iceServers: [] }),
//   noop = function () {};
// pc.createDataChannel(""); //create a bogus data channel
// pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
// pc.onicecandidate = function (ice) {
//   if (ice && ice.candidate && ice.candidate.candidate) {
//     ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
//       ice.candidate.candidate
//     )[1];
//     pc.onicecandidate = noop;
//   }
// };
// }

const { TabPane } = Tabs;
const { Step } = Steps;


// const layout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 12 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 0, span: 16 },
// };
const TICK_COUNT = 60;

function Login() {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [idFrontImageUrl, setIdFrontImageUrl] = useState("");
  const [idBackImageUrl, setIdBackImageUrl] = useState("");
  // const [step0Data, setStep0Data] = useState({});
  const [showTick, setShowTick] = useState(false);
  const [nonce, setNonce] = useState("");
  // const [supplyinfo, setSupplyinfo] = useState("");
  // const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);
  const [tickCount, setTickCount] = useState(TICK_COUNT);

  const [form] = Form.useForm();

  // 首次渲染和 timing 变化时触发 effect
  useEffect(() => {
    var obj = new window.WxLogin({
      self_redirect: false,
      id: "login_container",
      appid: config.appid,
      scope: "snsapi_login",
      redirect_uri: encodeURIComponent('http://5g.sparta.html5.qq.com/wxcodeJump?optype=1'),
      state: `${255}`,
      style: "",
      href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIyMHB4O21hcmdpbi10b3A6IDI4cHg7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7IG1hcmdpbi10b3A6IDE0cHg7fQ0KLnN0YXR1c19pY29uIHtkaXNwbGF5Om5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ==",
    });
    // });
  }, []);
  // 首次渲染和 timing 变化时触发 effect
  // useEffect(() => {
  //   var obj = new window.WxLogin({
  //     self_redirect: false,
  //     id: "login_container",
  //     appid: "wx7f19de6b83b4faad",
  //     scope: "snsapi_login",
  //     redirect_uri: encodeURIComponent(`https://5g.qq.com/wxCodeJump?optype=1&time=${parseInt(new Date().valueOf() / 1000)}`),
  //     state: `${255}`,
  //     style: "",
  //     href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIyMHB4O21hcmdpbi10b3A6IDI4cHg7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7IG1hcmdpbi10b3A6IDE0cHg7fQ0KLnN0YXR1c19pY29uIHtkaXNwbGF5Om5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ==",
  //   });
  // }, []);

  // 首次渲染和 timing 变化时触发 effect
  useEffect(() => {
    let interval;
    // 开始倒计时
    if (showTick) {
      interval = setInterval(() => {
        setTickCount((tickCount) => {
          if (tickCount <= 1) {
            setShowTick(false);
            clearInterval(interval);
            // 重置秒数
            return TICK_COUNT;
          } else {
            return tickCount - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showTick]);

  const showModal = () => {
    setVisible(true);
    // var obj = new window.WxLogin({
    //   self_redirect: false,
    //   id: "login_container1",
        // appid: config.appid,
    //   scope: "snsapi_login",
    //   redirect_uri: encodeURIComponent("http://5g.sparta.html5.qq.com/testPush?optype=2"),
    //   state: `${255}`,
    //   style: "",
    //   href: "",
    // });
  };

  // const onFinish = (values) => {
  //   // const verifycode = form.getFieldValue("verifycode");
  //   const data = Object.assign({}, values, {
  //     nonce,
  //     optype: 3,
  //     supplyinfo,
  //   });
  //   // console.log('data', data);
  //   // submit data
  //   verifySMSCode(data).then((res) => {
  //     if (res.code === 0) {
  //       setToken(res.loginToken);
  //       // cookie.set("supplyinfo", res.supplyinfo);
  //       message.success("恭喜您，登录成功！将在2S后跳转控制台页面");
  //       setTimeout(() => {
  //         return window.location.href = "/admin";
  //       }, 2000);
  //     } else if (res.code === 20002) {
  //       cookie.set("supplyinfo", res.supplyinfo);
  //       cookie.set("optype", 2);
  //       showModal();
  //       // message.success('将在2S后跳转注册页')
  //       // setTimeout(() => {
  //       //   return (window.location.href = "/");
  //       // },2000)
  //     } else {
  //       message.error("系统繁忙，请稍后再试");
  //     }
  //   });
  // };
  async function callback(res) {
    // res（用户主动关闭验证码）= {ret: 2, ticket: null}
    // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
    // console.log('res', res);
    if (res.ret === 0) {
      smsInfo = res;
      smsInfo["ip"] = ip.value;
      // 票据
      getVerifyCode();
    }
  }
  window.callback = callback;
  const getVerifyCode = async () => {
    const mobile = form.getFieldValue("mobileNo");
    if (smsInfo.ret === 0) {
      let data = {
        mobile: mobile,
        captchaTicket: smsInfo.ticket,
        captchaRandstr: smsInfo.randstr,
        appid: smsInfo.appid,
        reqIP: smsInfo.ip,
      };
      if (mobile && +("" + mobile.length) === 11) {
        setShowTick(true);
        sendSMSCode(data).then((res) => {
          if (res.code === 0) {
            setNonce(res.nonce);
            cookie.set('nonce', res.nonce)
          } else {
            message.error("系统繁忙，请稍后再试");
          }
        }).catch(err => {
          console.log('err', err);
           return message.error('服务异常，请稍后再试');
        });
      } else {
        message.error("请输入手机号");
      }
    }
    // send mobile verify code
  };

  return (
    <div>
      <div className="step-wrapper">
        <div className="header-logo"><a href='/'></a></div>
        <div className="login-left">
          <div className="login-content">
            <h1>
              <span className="line"></span>腾讯5G中台，所见即未来
            </h1>
            <img
              className="bg_center"
              src={require("../../assets/img/login/bg_center.png")}
            ></img>
            <p>
              {/* 介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍 */}
            </p>
          </div>
        </div>
        <div className="login-right">
        <div className="login-box">
          <button
            style={{ display: "none" }}
            id="TencentCaptcha"
            data-appid="2077717009"
            data-cbfn="callback"
          ></button>
          <i className="icon-logo"></i>

          <Tabs>
            <TabPane tab="微信扫码登录" key="1">
              <div id="login_container"></div>
              {/* <div>扫码关注后，自动登录</div> */}
            </TabPane>
            {/* <TabPane tab="短信快捷登录" key="2"> */}
              {/* <Row>
            <Col span={10} className="mobile-no">
              <Input placeholder="输入用户名/邮箱号/手机号" />
            </Col>
          </Row>
          <Row>
          <Col span={10} className="mobile-no-pass">
              <Input  placeholder="输入密码"/>
            </Col>
            <Col span={4} className="msg-btn-container">
              <Button size="small" type="primary" disabled={showTick} onClick={getVerifyCode}>{`获取短信验证码${showTick? tickCount:''}`}</Button>
            </Col>
          </Row> */}
              {/* <Form
                {...layout}
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label=""
                  name="mobileNo"
                  rules={[
                    { required: true, message: "请输入用户名/邮箱号/手机号" },
                  ]}
                >
                  <Input placeholder="输入用户名/邮箱号/手机号" />
                </Form.Item>
                <div className="box-sms">
                  <Form.Item
                    label=""
                    name="verifycode"
                    rules={[
                      {
                        required: true,
                        message: "请输入正确的验证码!",
                        min: 4,
                        max: 6
                      },
                    ]}
                  >
                    <Input placeholder="请输入您的验证码" />
                  </Form.Item>
                  <Col span={8} className="msg-btn-container">
                    <Button
                      size="small"
                      type="primary"
                      onClick={() =>
                        document.getElementById("TencentCaptcha").click()
                      }
                      disabled={showTick}
                      // onClick={getVerifyCode}
                    >{`获取短信验证码${showTick ? tickCount : ""}`}</Button>
                  </Col>
                </div>

                <Form.Item className="form-btn" {...tailLayout}>
                  <Button type="primary" className="btn-top" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane> */}
          </Tabs>
        </div>
        </div>
      </div>
      <div>
        <Modal
          visible={visible}
          footer={null}
          closable = {false}
        >
          <div id="login_container1"></div>
        </Modal>
        {/* <div id="login_container"></div> */}
      </div>
    </div>

  );
}

export default withRouter(Login);
