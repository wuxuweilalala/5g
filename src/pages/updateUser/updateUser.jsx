// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Checkbox, Col, Row, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";

import Dices from "../../components/updateUser/Dices";
import "./updateUser.scss";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

const abilities = ["计算机视觉", "语言处理"];
const enrolls = ["医疗", "互联网服务"];
let TICK_COUNT = 6;

// interface Gender {
//   index;
// }

const GENDER = {
  0: "male",
  1: "female",
};
const { Option } = Select;

const provinceData = ["互联网行业", "赚钱行业"];
const workData = {
  互联网行业: ["前端开发", "后端开发", "大数据"],
  赚钱行业: ["炒股", "买房", "富二代"],
};
function UpdateUser(props) {
  let userInfo = props.userInfo || "";
  const [gender, setGender] = useState(0);
  const [ability, setAbility] = useState([]);
  const [enroll, setEnroll] = useState([]);
  const [showTick, setShowTick] = useState(false);
  const [tickCount, setTickCount] = useState(TICK_COUNT);
  //   const [tickCount, dispatch] = useReducer(reducer, TICK_COUNT);
  const state = {
    works: workData[provinceData[0]],
    secondWork: workData[provinceData[0]][0],
  };

  const [form] = Form.useForm();
  const { works } = state;

  //   props.qrCodeLogin = true;

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

  const onFinish = (values) => {
    const data = Object.assign({}, values, {
      gender: GENDER[gender],
      needs: ability.concat(enroll),
    });
    // check mobile verify code
    const checkMobileVerifyCode = async (mobile) => {
      const res = await fetch(
        `//path from shuqi?mobile=${mobile}&code=${data.verifyCode}`
      );
      const json = await res.json();
      if (json.smsSuccess) {
        return true;
      } else {
        return false;
      }
    };

    // submit data
    const submit = async () => {
      const isVerifyCodeSuccess = await checkMobileVerifyCode(data.mobileNo);
      if (isVerifyCodeSuccess) {
        const response1 = await fetch(
          `${process.env.REACT_APP_SERVER_BASE_URL}/login/register`,
          {
            method: "post",
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
            }),
            body: JSON.stringify(data),
          }
        );
        const json1 = await response1.json();
        console.log(json1);
      } else {
      }
      // setPosts(json)
    };
    submit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const changeGender = (e: EventTarget, gender) => {
  //   if (e.target.checked) {
  //     setGender(gender);
  //   }
  // };

  const sendVerifyCode = async (mobile) => {
    const isSendSuccess = await fetch(`//path from shuqi?mobile=${mobile}`);
    return isSendSuccess;
  };

  // send mobile verify code
  const getVerifyCode = async () => {
    setShowTick(true);
    const mobile = form.getFieldValue("mobileNo");
    // const isSendSuccess = await sendVerifyCode(mobile);
  };
  // const handleProvinceChange = value => {
  //   this.setState({
  //     cities: cityData[value],
  //     secondCity: cityData[value][0],
  //   });
  // };

  // const onSecondCityChange = value => {
  //   this.setState({
  //     secondCity: value,
  //   });
  // };
  return (
    <div className="user-info">
      <h3>基本信息</h3>
      <Form
        {...layout}
        scrollToFirstError
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={24}>
          <div className="user-width">
            <Col span={12}>
              <Form.Item name={`nickname`} label={`账号昵称`}>
                <div>{`${props.userInfo.name || "-"}`}</div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name={`id`} label={`账号ID`}>
                <div>{`${props.userInfo.userid || "-"}`}</div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name={`appId`} label={`APPID`}>
                <div>{`${props.userInfo.appid || "-"}`}</div>
              </Form.Item>
            </Col>

            {/* <Col span={12}>
              <Form.Item name={`wechatAccount`} label={`微信`}>
                <div>XXXXXXX</div>
              </Form.Item>
            </Col> */}
          </div>
          <div className="user-width">
            <Col span={12}>
              <Form.Item name={`wechatAccount`} label={`认证状态`}>
                <div className="idenTation">
                  <span className="text">未认证</span>
                  <a href="/asstion">
                  <EditOutlined />
                  </a>
                </div>
              </Form.Item>
            </Col>

            {/* <Col span={12} className="industry-box">
              <Form.Item name={`wechatAccount`} label={`所属行业`}>
                <div style={{ display: "none" }}>XXXXXXX</div>
                <div className="selectTwo">
                  <>
                    <Select
                      defaultValue={provinceData[0]}
                      style={{ width: 120 }}
                      // onChange={this.handleProvinceChange}
                    >
                      {provinceData.map((province) => (
                        <Option key={province}>{province}</Option>
                      ))}
                    </Select>
                    <Select
                      style={{ width: 120 }}
                      value={state.secondWork}
                      // onChange={this.onSecondCityChange}
                    >
                      {works.map((item) => (
                        <Option key={item}>{item}</Option>
                      ))}
                    </Select>
                  </>
                </div>
              </Form.Item>
            </Col> */}

            <Col span={12}>
              <Form.Item label="联系手机" name="mobileNo">
                <Row>
                  <Col span={14} className="telLeft">
                    <div>{`${props.userInfo.tel || "-"}`}</div>
                  </Col>
                  {/* <Col span={8}>
                    <Button
                      type="primary"
                      disabled={showTick}
                      onClick={getVerifyCode}
                    >{`获取短信验证码${showTick ? tickCount : ""}`}</Button>
                  </Col> */}
                </Row>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name={`email`} label={`联系邮箱`}>
                <div>{`${props.userInfo.email || "-"}`}</div>
              </Form.Item>
            </Col>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default UpdateUser;
