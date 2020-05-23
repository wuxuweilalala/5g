// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect, useRef, useReducer } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Col,
  Row,
  Steps,
  Upload,
  message,
} from "antd";

import HeaderTop from "../../components/headerTop";
import "./asstetation.scss";
import "antd/dist/antd.css";
import Avatar from "../../components/updateUser/Upload";
import Title from "../../components/updateUser/title";
import { createCompany, handleTime } from "../../assets/api/index";
import cookie from "../../assets/libs/cookie";
import config from '../../assets/config';

const { Step } = Steps;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function Login() {
  const [current, setCurrent] = useState(0);
  const [userName, setUserName] = useState("张三");
  const [step0Data, setStep0Data] = useState({});
  const [file, setFile] = useState(null);
  const [idJustFile, setIdJustFile] = useState(null);
  const [idBackFile, setIdBackFile] = useState(null);

  const [form] = Form.useForm();
  // 首次渲染和 timing 变化时触发 effect
  useEffect(() => {
  }, []);
  form.setFieldsValue({
    'companyAttachment': file,
    'identityCardPic': `${idJustFile},${idBackFile}`
  });
  const onFinish = (values) => {
    if (current === 0) {
      const data = Object.assign({}, values, {});
      setStep0Data(data);
      setCurrent(1);
    }

    if (current === 1) {
      const data = Object.assign({}, values, step0Data);
      data["status"] = 1;
      data['appid'] = config.appid;
      const userInfo = JSON.parse(cookie.get("userInfo"));
      Object.assign(data, userInfo);
      userInfo["data"] = data;
      // submit data
      const submit = async () => {
        createCompany(userInfo).then((res) => {
          if (res.code === 0) {
            message.success("恭喜您，认证成功,2S秒后跳转控制台首页");
            setTimeout(() => {
              window.location = '/admin';
            },2000);
          } else if (+res.code === 21018) {
            message.error("注册公司失败，请稍后再试");
          }
        });
      };
      submit();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (current) => {
    setCurrent(current);
  };

  const back = () => {
    setCurrent(0);
  };

  return (
    <div className="asstion">
      <HeaderTop userName={userName}>
      </HeaderTop>
      <div className="layout asstion-center">
        <div className="box-title">认证提示</div>
        <Steps current={current} onChange={onChange}>
          <Step title="填写公司信息" />
          <Step title="填写管理者信息" disabled={true}/>
          <Step status="process" title="提交认证" disabled={true}/>
          <i className="line"></i>
          <i className="line2"></i>
        </Steps>

        {current === 0 ? (
          <div>
            <Title>
              填写公司信息<i>（请务必确保信息的真实性和可信性）</i>
            </Title>
            <div className="step-wrapper">
              <Form
                {...layout}
                scrollToFirstError
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="公司名称"
                  name="companyName"
                  rules={[{ required: true, message: "请输入您的公司名称!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="社会统一信用代码"
                  name="creditCode"
                  className="code"
                  rules={[
                    { required: true, message: "请输入您的社会统一信用代码!" },
                  ]}
                >
                  <Input maxLength={18}/>
                </Form.Item>

                <Form.Item
                  label="联系地址"
                  name="address"
                  rules={[{ required: true, message: "请输入您的联系地址!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="办公电话"
                  name="officeTel"
                  rules={[{ required: true, message: "请输入您的办公电话!" }]}
                >
                  <Input maxLength= {11}/>
                </Form.Item>

                <Form.Item
                  className="company-attachment"
                  label="公司证件"
                  name="companyAttachment"
                  rules={[{ required: true, message: "请上传您的公司证件!" }]}
                >
                  <div className="attach-title">
                    <p>
                      1.请提供证件的原件照片或彩色扫码件（正副本均可），文字/盖章清晰可辨认
                    </p>
                    <p>2.格式要求jpg、png、不超过10MB</p>
                  </div>
                  <Avatar setFile={setFile}/>
                </Form.Item>

                <div className="posi-box">
                  <Form.Item
                    className="left-align"
                    {...tailLayout}
                    name="isAgree"
                    valuePropName="checked"
                    rules={[{ required: true, message: "请阅读并同意协议!" }]}
                  >
                    <Checkbox>阅读并同意《实名认证授权书》</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout} className="confirm">
                    <Button type="primary" htmlType="submit">
                      保存并下一步
                    </Button>
                  </Form.Item>
                </div>
                <div className="clearfix" style={{ height: "10px" }}></div>
              </Form>
            </div>
          </div>
        ) : null}

        {current === 1 ? (
          <div>
            <Title>
              管理者信息
              <i>（作为企业代表人，请务必确保信息的真实性和可信性）</i>
            </Title>
            <div className="step-wrapper">
              <Form
                {...layout}
                scrollToFirstError
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="姓名"
                  name="managerName"
                  rules={[{ required: true, message: "请输入您的姓名!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="身份证号"
                  name="identityCard"
                  rules={[{ required: true, message: "请输入您的身份证号!" }]}
                >
                  <Input maxLength = {18}/>
                </Form.Item>

                <Form.Item
                  label="身份证件"
                  name="identityCardPic"
                  rules={[{ required: true, message: "请输入您的身份证件!" }]}
                >
                  <div style={{ display: "flex", flexFlow: "column" }}>
                    <div className="attach-title">
                      <p>
                        1.请提供证件的原件照片或彩色扫码件（正副本均可），文字/盖章清晰可辨认
                      </p>
                      <p>2.格式要求jpg、png、不超过10MB</p>
                    </div>
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      <div className="update-box">
                        <Avatar uploadName = '上传正面' alt="身份证正面" setFile={setIdJustFile}/>
                      </div>

                      <div className="update-box">
                        <Avatar uploadName = '上传反面' alt="身份证反面" setFile={setIdBackFile}/>
                      </div>
                    </div>
                  </div>
                </Form.Item>

                <div className="posi-box">
                  <Form.Item
                    className="left-align"
                    {...tailLayout}
                    name="isAgree"
                    valuePropName="checked"
                    rules={[{ required: true, message: "请阅读并同意协议!" }]}
                  >
                    <Checkbox>阅读并同意《实名认证授权书》</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout} className="confirm">
                    <Button type="primary" onClick={back} className="step">
                      上一步
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="okSubmit"
                    >
                      提交认证
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        ) : null}

        {current === 2 ? (
          <div className="step-wrapper1">
            <h2>{`您于${handleTime()}日成功提交企业认证信息`}</h2>
            <Button type="primary" href='/admin'>返回控制台</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
