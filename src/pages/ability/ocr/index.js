import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MapLink from "../../../components/mapLink";
import { Menu } from "antd";

function Cardocr(props) {
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div>
      {props.id === "wordsocr" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/10.jpg")}
            ></img>
          </div>
          <div className="cotainerBox layout">
          <MapLink />
          </div>
          {/* <div className="experience">
        <div className="layout clearfix">
          <h1>功能体验</h1>
          <div className="demo-tab">
            <img src={require('../../assets/img/ability/active.gif')}></img>
          </div>
        </div>
      </div> */}
          <div className="scene">
            <div className="layout">
              <h1>应用场景</h1>
              <div className="scene-list">
                <Menu
                  mode="inline"
                  onClick={handleClick}
                  selectedKeys={[current]}
                  style={{ width: 256 }}
                >
                  <Menu.Item key="1">纸质文档电子化</Menu.Item>
                  <Menu.Item key="2">内容审核与管理</Menu.Item>
                  <Menu.Item key="3">随手拍扫描</Menu.Item>
                  {/* <Menu.Item key="">智能车载</Menu.Item> */}
                </Menu>
              </div>
              <div className="scene-container">
                {+current === 1 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        政务民生<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        使用通用文字识别技术，助您完成大量的文档整理工作，从书籍、纸质论文、档案、PPT课件等印刷资料，到课堂笔记、作业作文等手写内容，均可实现拍照自动识别文字。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 2 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        金融行业<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        识别图像中的违规文字，如社交和电商等应用中的的违规内容、宣传物料中的广告用语、视频中的广告、标题与字幕等垃圾文本，提示相应风险，协助用户进行违规处理，帮助用户有效规避业务风险。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 3 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        通信运营商<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        支持快速识别路标、指示牌、广告牌、街边店铺招牌、商品包装、购物小票等生活场景中的实体文字信息，应用于地图、翻译、搜索、生活出行等移动应用中，方便用户进行文本的提取或录入，有效提升产品易用性和用户使用体验。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 4 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        通信运营商<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        在嘈杂环境下，通过车载手势，控制左滑、右滑、音量的加减、菜单等操作，有效补充语音识别短板，车内交互更加方便自然。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="demo-list">
                  <ul className="demo-list-ul">
                    <li className="demo-list-img">
                      <p className="img-name">合作案例</p>
                    </li>
                    <li className="demo-list-item item-1"></li>
                    <li className="demo-list-item item-2"></li>
                    <li className="demo-list-item item-3"></li>
                    <li className="demo-list-item item-4"></li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="advan">
            <div className="layout">
              <h1>产品优势</h1>
              <ul className="advan-box">
                <li className="advan-item item-1">
                  <h3>能力全面</h3>
                  <p>
                    支持中英文、日语、韩语、西班牙语、法语、德语等多语言，以及阿拉伯数字及常用符号等的识别，并不断更新迭代模型，扩充支持的广度。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>准确率高</h3>
                  <p>
                    支持图片中文字的自动定位和识别，印刷体整体识别准确率达95%以上，手写体达90%以上，保证99.5%以上产品可用性。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>毫秒响应</h3>
                  <p>
                    支持多场景、任意版面、任意背景，可容忍透视畸变、光照不均等复杂场景，并可实现自动裁边、修正倾斜等。
                  </p>
                </li>
                {/* <li className="advan-item item-3">
                  <h3>自定义手势</h3>
                  <p>
                  根据不同场景的手势需求，可自定义个性化手势。更多手势因您而定。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>安全可靠</h3>
                  <p>
                  离线SDK的形式集成到设备，无需上传到云端，数据更安全。
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="recommend">
            <div className="layout">
              <h1>相关推荐</h1>
              <ul>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-1"></i>卡证文字ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      提供身份证识别、银行卡识别、名片识别、营业执照识别等多种服务，支持将图片上的文字内容，智能识别为结构化的文本，可应用于用户注册、银行开户、交通出行、政务办事等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>汽车ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      基于行业前沿的深度学习技术，提供驾驶证识别、行驶证识别、车牌识别等多种服务，支持将图片上的文字内容，智能识别为结构化的文本，应用于车主身份认证、ETC出行、违章识别、停车管理等多种场景，大幅提升信息处理效率。 
                    </p>
                  </div>
                </li>
                {/* <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      是一组对用户身份信息真实性进行验证审核的服务套件，提供各类认证功能模块，包含证件
                      OCR
                      识别、活体检测、人脸1:1对比等能力，以解决行业内大量对用户身份信息核实的需求，广泛应用于公安、人社、金融保险等领域。 
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {props.id === "idocr" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/11.jpg")}
            ></img>
          </div>
          <div className="cotainerBox layout">
          <MapLink />
          </div>
          {/* <div className="experience">
        <div className="layout clearfix">
          <h1>功能体验</h1>
          <div className="demo-tab">
            <img src={require('../../assets/img/ability/active.gif')}></img>
          </div>
        </div>
      </div> */}
          <div className="scene">
            <div className="layout">
              <h1>应用场景</h1>
              <div className="scene-list">
                <Menu
                  mode="inline"
                  onClick={handleClick}
                  selectedKeys={[current]}
                  style={{ width: 256 }}
                >
                  <Menu.Item key="1">用户身份认证</Menu.Item>
                  <Menu.Item key="2">商户身份验证</Menu.Item>
                  <Menu.Item key="3">商务职场社交</Menu.Item>
                </Menu>
              </div>
              <div className="scene-container">
                {+current === 1 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        政务民生<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        用于政务、银行、金融、O2O、交通出行等应用下的远程用户身份认证，支持自动识别并录入各字段信息，降低用户输入成本，有效提升用户体验。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 2 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        金融行业<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        实现电商、外卖、O2O、运输服务等场景下的商户身份认证、资质文件审核，提高平台服务质量，规避恶意违规等业务风险。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 3 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        通信运营商<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        支持快速将纸质名片上的姓名、电话、邮箱、地址等文字转换为结构化信息并保存，可应用于商务交流、线下会议、论坛等社交场景，节约输入成本，提升用户体验。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="demo-list">
                  <ul className="demo-list-ul">
                    <li className="demo-list-img">
                      <p className="img-name">合作案例</p>
                    </li>
                    <li className="demo-list-item item-1"></li>
                    <li className="demo-list-item item-2"></li>
                    <li className="demo-list-item item-3"></li>
                    <li className="demo-list-item item-4"></li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="advan">
            <div className="layout">
              <h1>产品优势</h1>
              <ul className="advan-box">
                <li className="advan-item item-1">
                  <h3>准确率高</h3>
                  <p>
                    卡证文字识别各字段精度均处于业界领先水平，以身份证识别为例，其身份证号码识别准确率达99.9%以上，姓名识别准确率达99%以上。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>稳定可靠</h3>
                  <p>
                    已成功应用于
                    QQ、广点通、企业微信、微众银行等核心业务，接受过海量用户和复杂场景的考验，服务稳定可靠。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>鲁棒性强</h3>
                  <p>
                    适应多场景、任意背景，模糊、可容忍透视畸变、光照不均等实际应用中存在的复杂场景，并可实现自动裁边、修正倾斜等功能。
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="recommend">
            <div className="layout">
              <h1>相关推荐</h1>
              <ul>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-1"></i>通用文字ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      基于行业前沿的深度学习技术，提供通用印刷体识别等多种服务，支持将图片上的文字内容，智能识别为可编辑的文本，可应用于随手拍扫描、纸质文档电子化、电商广告审核等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>汽车ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      基于行业前沿的深度学习技术，提供驾驶证识别、行驶证识别、车牌识别等多种服务，支持将图片上的文字内容，智能识别为结构化的文本，应用于车主身份认证、ETC出行、违章识别、停车管理等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                </li>
                {/* <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      是一组对用户身份信息真实性进行验证审核的服务套件，提供各类认证功能模块，包含证件
                      OCR
                      识别、活体检测、人脸1:1对比等能力，以解决行业内大量对用户身份信息核实的需求，广泛应用于公安、人社、金融保险等领域。 
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {props.id === "carocr" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/12.jpg")}
            ></img>
          </div>
          <div className="cotainerBox layout">
          <MapLink />
          </div>
          {/* <div className="experience">
        <div className="layout clearfix">
          <h1>功能体验</h1>
          <div className="demo-tab">
            <img src={require('../../assets/img/ability/active.gif')}></img>
          </div>
        </div>
      </div> */}
          <div className="scene">
            <div className="layout">
              <h1>应用场景</h1>
              <div className="scene-list">
                <Menu
                  mode="inline"
                  onClick={handleClick}
                  selectedKeys={[current]}
                  style={{ width: 256 }}
                >
                  <Menu.Item key="1">车主身份认证</Menu.Item>
                  <Menu.Item key="2">道路违章检测</Menu.Item>
                  <Menu.Item key="3">车主信息服务</Menu.Item>
                </Menu>
              </div>
              <div className="scene-container">
                {+current === 1 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        政务民生<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        只需拍照即可快速上传本人证件信息，帮助车主快速完成身份认证，降低车主输入成本，广泛应用于ETC办理、打车、租车、车险投保理赔等场景。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 2 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        金融行业<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        在城市道路、高速公路等治安卡口，通过摄像头自动记录并识别车牌号码信息，对违章车辆进行进一步处理，助力智慧警务升级。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 3 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      {/* <h5>
                        通信运营商<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        在汽车保险理赔、二手车交易、车辆租借和年审等场景，帮助用户快速录入车辆相关信息，提高业务人员的办公效率和服务准确性。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="demo-list">
                  <ul className="demo-list-ul">
                    <li className="demo-list-img">
                      <p className="img-name">合作案例</p>
                    </li>
                    <li className="demo-list-item item-1"></li>
                    <li className="demo-list-item item-2"></li>
                    <li className="demo-list-item item-3"></li>
                    <li className="demo-list-item item-4"></li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="advan">
            <div className="layout">
              <h1>产品优势</h1>
              <ul className="advan-box">
                <li className="advan-item item-1">
                  <h3>能力全面</h3>
                  <p>
                    支持自动定位和识别车牌号码、17位的车辆VIN码信息、行驶证主页和副页及驾驶证主页正面的所有字段信息。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>准确率高</h3>
                  <p>
                    行驶证和驾驶证的总体识别准确率达96%以上，车牌识别、车辆VIN码的准确率达98%以上，算法精度均处于业内领先水平。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>鲁棒性强</h3>
                  <p>
                    适应各种实际应用中存在的异常情况，如复杂背景、强光照、大侧角、模糊等，具备非常高的复杂环境可用性。
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="recommend">
            <div className="layout">
              <h1>相关推荐</h1>
              <ul>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-1"></i>通用文字ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      基于行业前沿的深度学习技术，提供通用印刷体识别等多种服务，支持将图片上的文字内容，智能识别为可编辑的文本，可应用于随手拍扫描、纸质文档电子化、电商广告审核等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>汽车ocr
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      提供身份证识别、银行卡识别、名片识别、营业执照识别等多种服务，支持将图片上的文字内容，智能识别为结构化的文本，可应用于用户注册、银行开户、交通出行、政务办事等多种场景，大幅提升信息处理效率。
                    </p>
                  </div>
                </li>
                {/* <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      是一组对用户身份信息真实性进行验证审核的服务套件，提供各类认证功能模块，包含证件
                      OCR
                      识别、活体检测、人脸1:1对比等能力，以解决行业内大量对用户身份信息核实的需求，广泛应用于公安、人社、金融保险等领域。 
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cardocr;
