// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect, useRef, useReducer } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Col, Row, message, notification } from "antd";
import {
  sendSMSCode,
  verifySMSCode,
  checkUserLoginToken,
  changeUserInfo,
} from "../../assets/api/index";
import { handleIp } from '../../assets/libs/util';
import Dices from "../../components/updateUser/Dices";
import Title from "../../components/updateUser/title";
import "./loginInfo.scss";
import cookie from "../../assets/libs/cookie";
import config from "../../assets/config";
let ip = { value: '' };

let smsInfo = [];
window.callback = handleIp(ip);;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 17 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 20 },
};

const enrolls = [
  "计算机视觉",
  "语言识别",
  "自然语言理解",
  "机器人",
  "专业系统",
  "其他",
];
const abilities = [
  "医疗",
  "互联网服务",
  "短信触达",
  "游戏",
  "音视频",
  "政府",
  "农业",
  "通信电子",
  "制造业",
  "房地产",
];
let TICK_COUNT = 60;

// interface Gender {
//   [index: number]: string;
// }

const GENDER = {
  0: "male",
  1: "female",
};

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Login(props) {
  const [gender, setGender] = useState('');
  const [ability, setAbility] = useState([]);
  const [enroll, setEnroll] = useState([]);
  const [showTick, setShowTick] = useState(false);
  const [tickCount, setTickCount] = useState(TICK_COUNT);
  const [openid, setOpenid] = useState("");
  const [nonce, setNonce] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [supplyinfo, setSupplyinfo] = useState("");
  const [codeSuccess, setCodeSuccess] = useState(false);

  function reducer(state) {
    return state - 1;
  }
  //   const [tickCount, dispatch] = useReducer(reducer, TICK_COUNT);

  const [form] = Form.useForm();
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
  useEffect(() => {
    notification.open({
      message: '公告',
      description:
        '腾讯5G中台正在灰度测试中，功能需审核后开通，希望获取您以下信息，方便与您进一步联系。',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      duration: 0,
      style: {
        top: 109
      },
    });
  },[])
  const onFinish = (values) => {
    const data = Object.assign({}, values, {
      gender: GENDER[gender],
      needinfo: ability.concat(enroll).join(","),
      openid,
      nonce,
      optype: cookie.get("optype"),
      supplyinfo: cookie.get("supplyinfo"),
    });
    let information = Object.assign({}, values, {
      needinfo: ability.concat(enroll).join(","),
      gender: '' +gender
    });
    //check mobile verify code
    // return ;
    verifySMSCode(data).then((res) => {
      if (res.code === 0) {
        information['userid'] = res.userInfoValue.userid;
        information['appid'] = config.appid;
        let data = {
          userid: res.userInfoValue.userid,
          logintoken: res.logintoken,
          information: information,
        };
        let userInfo = {
          userid: res.userInfoValue.userid,
          logintoken: res.logintoken,
        }
        cookie.set('userInfo', JSON.stringify(userInfo));
        changeUserInfo(data).then((res) => {
          if (res.code === 0) {
            cookie.set("userInfoValue", JSON.stringify(res.userInfoValue));
            message.success("恭喜您，注册成功。稍后2S后跳转控制台页面!");
            setTimeout(() => {
              window.location.href = "/admin";
            }, 2000);
          } else {
            message.error("系统繁忙，请稍后再试");
          }
        });
        // checkUserLoginToken(data).then((res) => {
        //   if (res.code === 0) {
        //     cookie.set("userInfo", JSON.stringify(res.userInfo));
        //     // message.success("恭喜您，注册成功。稍后2S后跳转首页");
        //     // setTimeout(() => {
        //     //   window.location.href = "/";
        //     // }, 2000);
        //   } else {
        //     message.error("系统繁忙，请稍后再试");
        //   }
        // });
      } else if (+res.code === 21005) {
        return message.error("短信验证码错误，请重新输入");
      } else if (+res.code === 21007) {
        return message.error("该手机号已存在，请更换其他手机号");
      } else if (+res.code === 21006) {
        return message.error("该微信号已注册，请更换其他微信号");
      } else {
        message.error("系统繁忙，请稍后再试");
      }
    }).catch(err => {
      console.log('err', err);
      
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const changeGender = (e, gender) => {
    if (e.target.checked) {
      setGender(gender);
    }
  };

  const changeAbilities = (active) => {
    setEnroll(active);
  };

  const changeEnrolls = (active) => {
    setAbility(active);
  };
  async function callback(res) {
    // res（用户主动关闭验证码）= {ret: 2, ticket: null}
    // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
    // console.log("res", res);
    if (res.ret === 0) {
      smsInfo = res;
      smsInfo["ip"] = ip.value;
      // 票据
      getVerifyCode();
    }
  }
  window.callback = callback;
  const getVerifyCode = async () => {
    const mobile = form.getFieldValue("tel") || '';
    if (smsInfo.ret === 0) {
      let data = {
        mobile: mobile,
        captchaTicket: smsInfo.ticket,
        captchaRandstr: smsInfo.randstr,
        appid: smsInfo.appid,
        reqIP: smsInfo.ip,
      };
      if (+("" + mobile.length) === 11) {
        setShowTick(true);
        sendSMSCode(data).then((res) => {
          if (res.code === 0) {
            setNonce(res.nonce);
          } else if(+res.code === 21004) {
           return message.error('发送短信失败，请稍后再试')
          } else {
            return message.error('系统繁忙，请稍后再试');
          }
        });
      } else {
        message.error("请输入手机号");
      }
    }
  };

  return (
    <div className="infoUser">
      <div className="headerTop">
        <a href='/'>
          <img
            className="header-logo"
            src={require("../../assets/img/v2/logo.png")}
          ></img>
        </a>
      </div>
      <div className="layout">
        <Form
          {...layout}
          className="login-form"
          scrollToFirstError
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Title>完善信息</Title>
          <div className="info box-border">
            <Form.Item
              label="名称"
              name="name"
              rules={[{ required: true, message: "请输入您的用户名!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item 
            label="性别" 
            name="gender" 
            className="gender-row"
            rules={[{ required: true, message: "请勾选您的性别!" }]} >
              <Checkbox
                checked={gender === 0}
                onChange={(e) => changeGender(e, 0)}
              >
                男
              </Checkbox>
              <Checkbox
                checked={gender === 1}
                onChange={(e) => changeGender(e, 1)}
              >
                女
              </Checkbox>
            </Form.Item>
            <Form.Item
              label="公司"
              name="company"
              rules={[{ required: true, message: "请输入公司名称!" }]}
            >
              <Input placeholder="输入公司名称" />
            </Form.Item>
            {props.qrCodeLogin ? (
              <Form.Item
                label="手机号码"
                name="tel"
                rules={[
                  { required: true, message: "请输入正确的手机号码!", max: 11 },
                ]}
              >
                <Row className="flex-input">
                  <Col span={14}>
                    <Input placeholder="+86" maxLength='11'/>
                  </Col>
                  <Col span={8} className="msg-btn-container">
                    <Button
                      size="small"
                      type="primary"
                      disabled={showTick}
                      id="TencentCaptcha"
                      data-appid="2077717009"
                      data-cbfn="callback"
                    >{`${
                      showTick ? `倒计时${tickCount}秒` : "获取短信验证码"
                    }`}</Button>
                  </Col>
                </Row>
              </Form.Item>
            ) : (
              <Form.Item
                label="微信账号"
                name="wechatAccount"
                rules={[{ required: true, message: "请输入微信账号!" }]}
              >
                <Input />
              </Form.Item>
            )}

            {props.qrCodeLogin ? (
              <Form.Item
                label="短信验证码"
                name="verifycode"
                rules={[{ required: true, message: "请输入短信验证码!" }]}
              >
                <Col span={8}>
                  <Input className="flex-input" maxLength='6'/>
                </Col>
              </Form.Item>
            ) : null}

            <Form.Item
              label="联系地址"
              name="address"
              rules={[{ required: false, message: "请输入你的联系地址!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="电子邮箱"
              name="email"
              rules={[{ required: false, message: "请输入你的电子邮箱!" }]}
            >
              <Input className="flex-input" />
            </Form.Item>
          </div>
          <Title>注册需求</Title>
          <div className="demand box-border">
            <Form.Item
              className="left-align"
              label=""
              name="needinfo"
              rules={[
                { required: false, message: "Please input your username!" },
              ]}
            >
              <Checkbox>我有能力，想要入驻</Checkbox>
              <p className="ho-content">*勾选您需要入驻的能力</p>
              <Dices texts={enrolls} onClick={changeEnrolls} />
            </Form.Item>

            <Form.Item className="left-align" label="" name="needinfo">
              <Checkbox>我有场景，想要能力</Checkbox>
              <p className="ho-content">*勾选您需要想要的能力</p>
              <Dices texts={abilities} onClick={changeAbilities} />
            </Form.Item>
          </div>
          {/* <Title>
            关注公众号
            <i>（请用微信扫描下方二维码,关注公众号，以方便获悉实时动态）</i>
          </Title>
          <div className="follow box-border">
            <div className="official-content">
              <div className="follow-title">关注公众号 以方便获悉实时动态</div>
              <img src={require("../../assets/img/info/wx.png")}></img>
            </div>
            <div className="posi-box">
              <Form.Item
                className="left-align"
                {...tailLayout}
                name="isAgree"
                valuePropName="checked"
                rules={[{ required: false, message: "请阅读并同意协议!" }]}
              >
              </Form.Item>
            </div>
          </div> */}
          <div className="read-hook">
            <Form.Item
              className="left-align"
              {...tailLayout}
              name="isAgree"
              valuePropName="checked"
              rules={[{ required: true, message: "请阅读并同意协议!" }]}
            >
              <Checkbox className="flo-left">
                <a href="http://privacy.qq.com">阅读并同意《腾讯隐私政策》</a>
              </Checkbox>
            </Form.Item>
          </div>
          <div className="clearfix"></div>
          <div className="confrim">
            <Button type="primary" htmlType="submit" className="confrim-btn">
              完成注册
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(Login);
