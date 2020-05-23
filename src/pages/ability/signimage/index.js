import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MapLink from "../../../components/mapLink";
import { Menu } from "antd";

function Signimage(props) {
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div>
      {props.id === "gesture" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/8.jpg")}
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
                  <Menu.Item key="1">互动娱乐</Menu.Item>
                  <Menu.Item key="2">智能家居</Menu.Item>
                  <Menu.Item key="3">VR/AR</Menu.Item>
                  <Menu.Item key="4">智能车载</Menu.Item>
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
                        结合用户的手势（例如点赞、比心、拜年），实时增加相应的贴纸或特效，应用特效随手而动。
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
                        作为智能硬件控制指令，远距离操控智能家电、家用机器人、可穿戴等硬件设备，人机交互方式更加智能。
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
                        在虚拟环境中，赋予人们贴近现实生活的手势导航和控制能力，建立最直接的人机交互方式。
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
                    累积了静态手势识别、手势关键点识别等一套分析用于人类手势的能力，并支持新手势模型定制。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>算法领先</h3>
                  <p>
                    静态手势识别算法的正确率超过95%，手势关键点算法的识别正确率超过94%，均居业界领先水平。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>毫秒响应</h3>
                  <p>
                    静态手势识别速度为18ms/帧，手部关键点识别速度为30ms/帧，响应高效及时。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>自定义手势</h3>
                  <p>
                    根据不同场景的手势需求，可自定义个性化手势。更多手势因您而定。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>安全可靠</h3>
                  <p>离线SDK的形式集成到设备，无需上传到云端，数据更安全。</p>
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
                    <i className="recommend-icon abi-1"></i>人体分析
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      提供人像分割、人体检测、行人重识别（ReID）等服务。支持识别图片或视频中的半身人体轮廓，并将其与背景进行分离；支持通过人体检测，识别行人的穿着、体态等属性信息，实现跨摄像头跨场景下行人的识别与检索。 
                    </p>
                  </div>
                </li>
                {/* <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人像变换
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                    提供人脸年龄变化、人脸性别转换等能力，用户上传照片即可得到实现男女性别切换、人脸变老/变年轻等效果。适用于社交娱乐、广告营销、互动传播等场景。 
                    </p>
                  </div>
                </li> */}
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
      {props.id === "imganalysis" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/9.jpg")}
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
                  <Menu.Item key="1">相册管理</Menu.Item>
                  <Menu.Item key="2">内容识别</Menu.Item>
                  {/* <Menu.Item key="3">打击网络诈骗</Menu.Item> */}
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
                        批量读取照片的内容信息，按照场景、人物等实现相册智能分类管理。
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
                        可以识别出图片中的多个商品，并给出商品的品类、坐标，可以进行商品聚类、相似商品推荐，实现个性化广告展示，提高购买转化。
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
                        换脸甄别可以识别网上业务办理中的伪造视频，减少网络诈骗。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="demo-list">
                  <ul className="demo-list-ul">
                    <li className="demo-list-img">
                      <p className="img-name">合作案例</p>
                    </li>
                    <li className="demo-list-item item-13"></li>
                    <li className="demo-list-item item-14"></li>
                    <li className="demo-list-item item-15"></li>
                    {/* <li className="demo-list-item item-4"></li> */}
                  </ul>
                </div>
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
                    基于腾讯多项行业领先的人工智能技术，支持数千个标签，可以实现一级标签平均精确率95%以上，二级标签平均精确率90%以上。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>能力丰富</h3>
                  <p>
                    长期为腾讯各业务提供智能图像技术支持，积累了丰富、可靠的系列能力，会持续提供各种图像标签、物体识别、图像处理、图像审核服务。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>拓展性高</h3>
                  <p>
                    基于智能的深度学习算法，具备迁移学习能力，可以通过不断的训练使识别变得更智能，并且可以快速迭代以适应各种新场景。
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="recommend">
            <div className="layout">
              <h1>相关推荐</h1>
              <ul>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-1"></i>人脸融合
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                    通过快速精准地定位人脸关键点，将用户上传的照片与特定形象进行面部层面融合，使生成的图片同时具备用户与特定形象的外貌特征，支持单脸、多脸、选脸融合，满足不同的营销活动需求。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人像变换
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                    提供人脸年龄变化、人脸性别转换等能力，用户上传照片即可得到实现男女性别切换、人脸变老/变年轻等效果。适用于社交娱乐、广告营销、互动传播等场景。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
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
                </li>
              </ul>
            </div>
          </div> */}
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Signimage;
