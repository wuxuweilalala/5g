// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Col, Row, message } from "antd";
import { wxCode, sendSMSCode, verifySMSCode, checkUserLoginToken } from '../../assets/api/index';
import Dices from "../../components/updateUser/Dices";
import Title from "../../components/updateUser/title";
import "./loginMnInfo.scss";
import cookie from "../../assets/libs/cookie";
import config from "../../assets/config";


let ip = '';
let smsInfo = [];
let NONCE = cookie.get('nonce') || '';
let OPTYPE = cookie.get('optype') || '';
let SUPPLYINFO = cookie.get('supplyinfo') || '';
let TICK_COUNT = 60;
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
// interface Gender {
//   [index: number]: string;
// }

const GENDER = {
  0: "男",
  1: "女",
};

function MnInfo(props) {
  const [gender, setGender] = useState(0);
  const [ability, setAbility] = useState([]);
  const [enroll, setEnroll] = useState([]);
  const [showTick, setShowTick] = useState(false);
  const [tickCount, setTickCount] = useState(TICK_COUNT);
  const [openid, setOpenid] = useState("");
  const [nonce, setNonce] = useState(NONCE);
  const [optype, setOptype] = useState(OPTYPE);
  // const [token, setToken] = useState('');
  // const [userId, setUserId] = useState('');
  const [supplyinfo, setSupplyinfo] = useState(SUPPLYINFO);
  // const [codeSuccess, setCodeSuccess] = useState(false);

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

  },[])
  // useEffect(() => {
  //   var queryParams = qs.parse(
  //     window.location.search.slice(window.location.search.indexOf("?") + 1)
  //   );
  //   wxCode(queryParams).then(res => { 
  //     if(+res.code === 20001) {
  //       window.location.href = '/info';
  //     } else if (+res.code === 0) {
  //       let data = {
  //         userid : res.userInfoValue.userid,
  //         logintoken : res.logintoken
  //       }
  //       data['appid'] = config.appid;
  //       cookie.set('userInfo', JSON.stringify(data))
  //       checkUserLoginToken(data).then(res => {
  //         if(res.code === 0 ) {
  //           message.success('恭喜您，登录成功！2S后跳转首页')
  //         }
  //       })
  //       setTimeout(() => {
  //         window.location.href = '/';
  //       },1000)
  //     } else {
  //       message.error('微信扫码失败，请重新扫码。');
  //         // window.location.href = '/login';
  //     }
  //     setSupplyinfo(res.supplyinfo);
  //   });
  // }, []);
  const onFinish = (values) => {
    const data = Object.assign({}, values, {
      gender: GENDER[gender],
      needs: ability.concat(enroll).join(","),
      openid,
      nonce : nonce,
      optype: optype,
      supplyinfo : supplyinfo
    });
    // check mobile verify code
    // verifySMSCode(data).then(res => {
    //   console.log('res', res);
    //   if(res.code === 0) {
    //     setToken(res.logintoken);
    //     setUserId(res.userInfoValue.userid);
    //     setCodeSuccess(true);
    //   }  else {
    //     message.error('系统繁忙，请稍后再试')
    //   }
    // })
    const userInfo = JSON.parse(cookie.get('userInfo'));
    // if(codeSuccess === true) {
    const data1 = {
        userid : userInfo.userid,
        logintoken : userInfo.logintoken
      }
      checkUserLoginToken(data1).then(res => {
        if (res.code === 0) {
          message.success('恭喜您，修改信息成功。稍后2S后跳转首页')
          setTimeout(() => {
            window.location.href = '/';
          },2000)
        }  else {
          message.error('系统繁忙，请稍后再试')
        }
      })
    // }
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
    console.log("ab", active);
  };

  const changeEnrolls = (active) => {
    setAbility(active);
    console.log("en", active);
  };
  async function callback(res) {
    // res（用户主动关闭验证码）= {ret: 2, ticket: null}
    // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
    // console.log('res', res);
    if(res.ret === 0){
      smsInfo = res;
      smsInfo['ip'] = ip;
          // 票据
          getVerifyCode();
    }
    }
    window.callback = callback;
    const getVerifyCode = async () => {
      const mobile = form.getFieldValue("mobileNo");
      if(smsInfo.ret === 0) {
        let data = {
          'mobile' : mobile,
          'captchaTicket' : smsInfo.ticket,
          'captchaRandstr' : smsInfo.randstr,
          'appid' : smsInfo.appid,
          'reqIP' : smsInfo.ip
        }
        if( +('' + mobile.length) === 11) {
          setShowTick(true);
          sendSMSCode(data).then(res => {
            if(res.code === 0) {
              setNonce(res.nonce);
            }
        })
    } else {
      message.error('请输入手机号')
    };
    }
  }

  return (
    <div className="infoUser">
      <div className="headerTop">
        <img
          className="header-logo"
          src={require("../../assets/img/info/LOGO.png")}
        ></img>
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

            <Form.Item label="性别" name="gender" className="gender-row">
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

            {
              <Form.Item
                label="微信账号"
                name="wechatAccount"
              >
                <Input />
              </Form.Item>
            }

            <Form.Item
              label="联系地址"
              name="address"
              rules={[
                { required: false, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="电子邮箱"
              name="email"
              rules={[
                { required: false, message: "Please input your username!" },
              ]}
            >
              <Input className="flex-input" />
            </Form.Item>
          </div>
          <Title>注册需求</Title>
          <div className="demand box-border">
            <Form.Item
              className="left-align"
              label=""
              name="needs"
              rules={[
                { required: false, message: "Please input your username!" },
              ]}
            >
              <Checkbox>我有能力，想要入住</Checkbox>
              <Dices texts={enrolls} onClick={changeEnrolls} />
            </Form.Item>

            <Form.Item className="left-align" label="" name="needs">
              <Checkbox>我有场景，想要能力</Checkbox>
              <Dices texts={abilities} onClick={changeAbilities} />
            </Form.Item>
          </div>
          <Title>
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
                <Checkbox className="flo-left">
                  阅读并同意《腾讯5G中台用户协议》
                </Checkbox>
                <div className="clearfix"></div>
                <div className="confrim">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="confrim-btn"
                  >
                    完成注册
                  </Button>
                </div>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MnInfo;
