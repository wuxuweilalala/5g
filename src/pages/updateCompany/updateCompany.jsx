// blog-frontend/src/components/Home.tsx

import React, { useState, useEffect, useRef, useReducer } from "react";
import { Form, Input, Button, Checkbox, Col, Row, Steps,Upload, message } from "antd";
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined, PlusOutlined } from '@ant-design/icons';

import "./updateCompany.scss";
import 'antd/dist/antd.css';

const { Step } = Steps;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt100M = file.size / 1024 / 1024 < 100;
  if (!isLt100M) {
    message.error('Image must smaller than 100MB!');
  }
  return isJpgOrPng && isLt100M;
}


let TICK_COUNT = 6;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function Login(){
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [idFrontImageUrl, setIdFrontImageUrl] = useState('');
  const [idBackImageUrl, setIdBackImageUrl] = useState('');
  const [step0Data, setStep0Data] = useState({});
  const [showTick, setShowTick] = useState(false);
  const [tickCount, setTickCount] = useState(TICK_COUNT);


  const [form] = Form.useForm();

// 首次渲染和 timing 变化时触发 effect
useEffect(() => {
  let interval;
  // 开始倒计时
  if (showTick) {
    interval = setInterval(() => {
      setTickCount(tickCount => {
        if (tickCount <= 1) {
          setShowTick(false)
          clearInterval(interval)
          // 重置秒数
          return TICK_COUNT
        } else {
          return tickCount - 1
        }
      })
    }, 1000)
  }
  return () => clearInterval(interval)
}, [showTick])


  const onFinish = (values) => {
    if(current === 0) {
      const data = Object.assign({}, values, {
      });
      setStep0Data(data);
      setCurrent(1);
    }


    if(current === 1) {
      const data = Object.assign({}, values, step0Data);

    // submit data
    const submit = async () => {
            const response1 = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/toB/register`,
                {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }),
                body: JSON.stringify(data)
                });
            const json1 = await response1.json();
            console.log(json1);
        // setPosts(json)
      }
      submit();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  const onChange = (current) => {
    setCurrent(current)
  }

  const sendVerifyCode = async (mobile) => {
    const isSendSuccess = await fetch(`//path from shuqi?mobile=${mobile}`);
      return isSendSuccess;
}

   // send mobile verify code
   const getVerifyCode = async () => {
    setShowTick(true);
  const mobile = form.getFieldValue('mobileNo');
  // const isSendSuccess = await sendVerifyCode(mobile);
}


  const handleChange = (info, type) => {
    if (info.file.status === 'uploading') {
        setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        if(type === 'companyFile') {
          setImageUrl(imageUrl);
        }
        if(type === 'idFront') {
          setIdFrontImageUrl(imageUrl);
        }
        if(type === 'idBack') {
          setIdBackImageUrl(imageUrl);
        }

        setLoading(false);
      }
      );
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const back = () => {
    setCurrent(0);
  };

  return (
    <div>
    <Steps current={current} onChange={onChange}>
      <Step status="finish" title="更改管理者信息" icon={<UserOutlined />} />
      <Step status="finish" title="更改手机号" icon={<SolutionOutlined />} />
      <Step status="process" title="更改微信号" icon={<LoadingOutlined />} />
    </Steps>

    {current === 0 ? <div className="step-wrapper">
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
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="身份证号"
        name="managerID"
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="身份证件"
        name="managerIDAttachment"
      >
         <div style={{display: 'flex'}}>
        <div>
          <Upload
            name="idFront"
            listType="picture-card"
            className="id-uploader"
            showUploadList={false}
            action={`${process.env.REACT_APP_SERVER_BASE_URL}/toB/uploadIDFront`}
            beforeUpload={beforeUpload}
            onChange={(info) => handleChange(info, 'idFront')}
          >
            {idFrontImageUrl ? <img src={idFrontImageUrl} alt="身份证正面" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </div>

        <div>
        <Upload
          name="idBack"
          listType="picture-card"
          className="id-uploader"
          showUploadList={false}
          action={`${process.env.REACT_APP_SERVER_BASE_URL}/toB/uploadIDBack`}
          beforeUpload={beforeUpload}
          onChange={(info) => handleChange(info, 'idBack')}
        >
          {idBackImageUrl ? <img src={idBackImageUrl} alt="身份证反面" style={{ width: '100%' }} /> : uploadButton}
        </Upload>

        </div>
        </div>
      </Form.Item>

    </Form>
    </div> : null }


    {current === 1 ? <div className="step-wrapper">
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
          label="手机号码"
          name="mobileNo"
          rules={[{ required: true, message: "请输入手机号码!" }]}
        >
          <Row>
            <Col span={14}>
              <Input />
            </Col>
            <Col span={8}>
              <Button type="primary" disabled={showTick} onClick={getVerifyCode}>{`获取短信验证码${showTick? tickCount:''}`}</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="短信验证码"
          name="verifyCode"
          rules={[{ required: true, message: "请输入短信验证码!" }]}
        >
          <Input />
        </Form.Item>

        <Button type="primary">
          下一步
        </Button>
    </Form>
    </div> : null }

      {current === 2 ?
        <div className="step-wrapper">
          <h2>请扫码</h2>
        </div>
      : null}

    </div>
  );
}

export default Login;
