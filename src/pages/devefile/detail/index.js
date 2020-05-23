import React, { useState, useEffect } from "react";
import "./index.scss";
import { withRouter, useParams } from "react-router-dom";
import Header from "../../../components/header/index";
import Footer from "../../../components/footer/index";
import "../../../assets/js/common";
import { Menu } from "antd";
const { SubMenu } = Menu;
function FileDetail(props) {
  let { id = "21" } = useParams();
  const [current, setCurrent] = useState("21");
  const [openKeys, setOpenKeys] = useState(["sub2", "sub2-1"]);
  const rootSubmenuKeys = ["sub1", "sub2"];
  useEffect(() => {
    setCurrent(id);
    if (23 <= +id && +id <= 25) {
      setOpenKeys(["sub2", "sub2-2"]);
    }
    if (26 <= +id && +id <= 28) {
      setOpenKeys(["sub2", "sub2-3"]);
    }
    if (29 <= +id) {
      setOpenKeys(["sub2", "sub2-4"]);
    }
  }, []);
  const handleClick = (e) => {
    // this.props.history.push(`/consultation/${e.key}`);
    setCurrent(e.key);
  };
  const onOpenChange = (item) => {
    const latestOpenKey = item.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(item);
    } else {
      let openKeys = latestOpenKey ? [latestOpenKey] : [];
      setOpenKeys(openKeys);
    }
  };
  return (
    <div>
      <Header />
      <div className="flieDe">
        <div className="layout">
          <div className="fileDe-container">
            <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              selectedKeys={current}
              // defaultOpenKeys={["sub2", "sub2-1"]}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              mode="inline"
            >
              <Menu.Item key="0" className="ant-menu-first">
                文档目录
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <span>用户指南</span>
                  </span>
                }
              >
                <Menu.Item key="1" disabled={true}>
                  新人指引
                </Menu.Item>
                <Menu.Item key="2" disabled={true}>
                  SDK下载
                </Menu.Item>
                <Menu.Item key="3" disabled={true}>
                  常见问题
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <span>AI能力</span>
                  </span>
                }
                popupClassName="de-submenu"
              >
                <SubMenu key="sub2-1" title="人脸识别">
                  <Menu.Item key="21">人脸识别</Menu.Item>
                  <Menu.Item key="22">人脸核身</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2-2" title="人脸特效">
                  <Menu.Item key="23">人脸融合</Menu.Item>
                  <Menu.Item key="24">人脸试妆</Menu.Item>
                  <Menu.Item key="25">人脸变换</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2-3" title="文字识别">
                  <Menu.Item key="26">通用文字OCR</Menu.Item>
                  <Menu.Item key="27">卡证文字OCR</Menu.Item>
                  <Menu.Item key="28">车牌识别OCR</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2-4" title="图像分析">
                  <Menu.Item key="29">图像分析</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <span>5G通信能力</span>
                  </span>
                }
              >
                {/* <Menu.Item key="8">新人指引</Menu.Item>
                <Menu.Item key="9">SDK下载</Menu.Item>
                <Menu.Item key="10">常见问题</Menu.Item> */}
                <SubMenu key="sub3-1" title="5G物联网能力">
                  <Menu.Item key="30" disabled={true}>物联网连接管理平台</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <span>5G多媒体能力</span>
                  </span>
                }
              >
                {/* <Menu.Item key="8">新人指引</Menu.Item>
                <Menu.Item key="9">SDK下载</Menu.Item>
                <Menu.Item key="10">常见问题</Menu.Item> */}
                <SubMenu key="sub4-1" title="音视频技术">
                  <Menu.Item key="40" disabled={true}>实时音视频传输</Menu.Item>
                  <Menu.Item key="41" disabled={true}>音频处理</Menu.Item>
                  <Menu.Item key="42" disabled={true}>视音频通信质量评估</Menu.Item>
                  <Menu.Item key="43" disabled={true}>视频处理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4-2" title="多媒体应用">
                  <Menu.Item key="44" disabled={true}>沉浸式媒体</Menu.Item>
                  <Menu.Item key="45" disabled={true}>智慧媒体</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <span>5G区块链能力</span>
                  </span>
                }
              >
                {/* <Menu.Item key="8">新人指引</Menu.Item>
                <Menu.Item key="9">SDK下载</Menu.Item>
                <Menu.Item key="10">常见问题</Menu.Item> */}
                <SubMenu key="sub5-1" title="5G区块链能力">
                  <Menu.Item key="50" disabled={true}>5G区块链能力</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
            {+current === 21 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">人脸识别</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      包括人脸验证、人脸静态活体检测、人脸比对、人脸检测与分析、人脸搜索、人员库管理、五官定位、人员查重相关接口，为开发者和企业提供高性能高可用的人脸识别服务。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 22 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">人脸核身</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      人脸核身提供了OCR、活体检测、1:1人脸比对的配套服务，实现自然人真实身份核验的产品。秒级确认用户身份，帮助提升业务办理效率，降低人力成本。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 23 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">人脸融合</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      接口描述：本接口用于人脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。未发布的活动请求频率限制为1次/秒，已发布的活动请求频率限制50次/秒。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 24 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">人脸试妆</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      提供试唇色、人脸美颜相关接口，用户上传照片即可实现在线试唇色、美颜美妆、测肤质等功能，帮助快速打造精致妆容，提升个人社交形象。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 25 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">人脸变换</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      提供人脸性别转换、人脸年龄变化接口，基于腾讯优图领先的人脸识别算法，提供人脸年龄变化、人脸性别转换等能力，用户上传照片即可得到实现男女性别切换、人脸变老/变年轻等效果。适用于社交娱乐、广告营销、互动传播等场景。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 26 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">通用文字OCR</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      本接口支持多场景、任意版面下整图文字的识别。支持自动识别语言类型，同时支持自选语言种类（推荐），除中英文外，支持日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语等多种语言。应用场景包括：印刷文档识别、网络图片识别、广告图文字识别、街景店招识别、菜单识别、视频标题识别、头像文字识别等。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 27 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">卡证文字OCR</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      提供身份证识别、银行卡识别、名片识别、营业执照识别等多种服务，支持将图片上的文字内容，智能识别为结构化的文本，可应用于用户注册、银行开户、交通出行、政务办事等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 28 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">车牌识别OCR</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      本接口支持对中国大陆机动车车牌的自动定位和识别，返回地域编号和车牌号信息。
                      默认接口请求频率限制：10次/秒。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
            {+current === 29 ? (
              <div className="fileDe-rh-box">
                <span className="fileDe-title"></span>
                <div className="detaile-wrapper">
                  <div className="de">
                    <h5 className="de-title1">图像分析</h5>
                  </div>
                  <div className="de">
                    <h5 className="de-title de-marginBom">接口描述</h5>
                    <p className="de-text">
                      提供综合性的图像智能服务，包含图像理解（解析图像中的场景、物品、人物、动物等）、图像审核（识别图像是否存在色情、涉政、不良内容）、图像处理（对图像进行裁剪、美化）、图像质量评估（分析图像视觉质量）等。
                      图像分析所使用的算法，广泛应用于腾讯内部各个产品，应用场景包含相册、信息流、社交、广告等，每天分析、处理海量图片，可以大幅提升各类产品的体验、效率。
                    </p>
                  </div>
                  <p className=" de-marginTop de-title">更多详情正在升级中。</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withRouter(FileDetail);
