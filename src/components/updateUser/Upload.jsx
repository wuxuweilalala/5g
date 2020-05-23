import { Upload, Modal, Form, Button, message, Icon } from "antd";
import React, { Component, useState } from "react";
import { fileContent } from '../../assets/api/index';
import cookie from "../../assets/libs/cookie";
import config from '../../assets/config';
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const FormItem = Form.Item;

let userInfo = JSON.parse(cookie.get("userInfo")) || "";
let url = `${config.baseUrl.dev}/uploadfile/upload`; // 测试环境域名
let fileType = 'png';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  // fileType = isJpgOrPng.split('/')[1];
  if (!isJpgOrPng) {
    message.error("您需要上传JPG、PNG图片格式文件!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("您上传得图片大于10M，请重新上传图片!");
  }
  return isJpgOrPng && isLt2M;
}

function Avatar(props) {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');
  // state = {
  //   loading: false,
  //   fileList: [],
  // };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        // this.setState({
        //   imageUrl,
        //   loading: false,
        // })
        setImageUrl(imageUrl)
      );
      if(info.file.response.code === 0) {
        message.success('恭喜您，图片上传成功！');
        let file = info.file.response.fileName;
        if( props && props.setFile) {
          props.setFile(file);
        }
        handleFileContent(file);
      }
    }
    if (info.file.status === "error") {
      message.error("上传失败");
    }
  };
  const handleFileContent = (file) => {
    userInfo['fileName'] = file;
    fileContent(userInfo).then(res => {
      if(res.code === 0) {
        setFileName(`data:image/${fileType};base64,${res.fileContent}`);
      } else {
      }
    })
  }
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div className="ant-upload-text">{props.uploadName}</div>
      </div>
    );
    return (
      <div>
        <Upload
          name="uploadfile"
          listType="picture-card"
          className="company-file-uploader"
          showUploadList={false}
          action={url}
          accept="image/png,image/gif"
          data={(file) => ({
            logintoken: userInfo.logintoken,
            appid: config.appid,
            userid: userInfo.userid,
            timestamp: parseInt(new Date().valueOf() / 1000),
          })}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt={ props.alt || "公司证件"} style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>

        {/* <div>
          <img src={fileName}></img>
        </div> */}
      </div>
    );
  }

export default Avatar;
