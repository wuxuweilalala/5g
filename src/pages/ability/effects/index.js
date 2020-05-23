import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MapLink from '../../../components/mapLink';
import './index.scss';
import { Menu } from "antd";

function Effects(props) {
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="effects">
      {props.id === "facefusion" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/5.jpg")}
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
                  <Menu.Item key="1">多人合影</Menu.Item>
                  <Menu.Item key="2">推广宣传</Menu.Item>
                  <Menu.Item key="3">形象打造</Menu.Item>
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
                        适用于广告营销、品牌推广、演出票务等公司营销活动，打造结婚照、亲子照、全家福、明星合影等多人互动场景。
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
                        适用于广告代理、咨询、媒体、学校等企业和机构，在 h5
                        或其他传播形式中加入人脸融合的玩法来进行产品推广、活动宣传。
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
                        适用于游戏、影视制作等公司根据游戏、影视形象做融合模板，打造形象周边。
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
                    <li className="demo-list-item item-10"></li>
                    <li className="demo-list-item item-11"></li>
                    <li className="demo-list-item item-12"></li>
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
                  <h3>融合效果自然</h3>
                  <p>
                    算法业界领先，经过人民日报军装照等大量的活动验证，融合效果自然，对真人、油画、水彩等风格兼容性好。 
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>支持参数调整</h3>
                  <p>
                    支持修改融合相似度，通过接口或控制台调整五官和脸型参数，可精细调整用户人脸和特定形象的融合比例。 
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>支持多脸融合</h3>
                  <p>
                    支持多脸、选脸融合，最多支持指定融合3张人脸，可应用在全家福、与明星合照等多人互动场景。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>毫秒级响应</h3>
                  <p>
                    平均处理时长仅需数百毫秒，一键上传人脸照片即可体验人脸融合效果，方便快捷，精准到位。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>支持高并发</h3>
                  <p>
                    根据活动实际需求，支持在线升级
                    QPS，稳定支持短时间内的高调用量，安全可靠。
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
                    <i className="recommend-icon abi-1"></i>人脸试妆
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      提供包括试唇色、测肤质、试妆容等多种功能，只需上传图片即可在线试妆，为开发者和企业提供高可用的人脸试妆服务。可应用于社交传播、营销推广等多种场景，满足用户的人脸试妆和人脸娱乐相关需求。 
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
      {props.id === "facetest" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/6.jpg")}
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
                  <Menu.Item key="1">在线试唇色</Menu.Item>
                  <Menu.Item key="2">图像美颜</Menu.Item>
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
                        可用于在线试口红等虚拟试妆场景，用户通过智能终端即可体验最接近本人真实情况的唇色效果，节约用户线下购买时间，降低商家的运营成本。
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
                        可用于相机类
                        App、手机自拍修图等人像美化场景，一键智能实现美白、磨皮、大眼、瘦脸、美型等效果，帮助快速打造精致五官，提升个人社交形象。
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
                  <h3>效果自然</h3>
                  <p>
                    适用不同表情、性别、年龄、姿态、光照条件，美妆美颜效果处理自然，打造无暇妆容。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>精确度高</h3>
                  <p>
                    基于精细标注训练数据实现的照片人脸90点定位，提供追踪成功、失败检测机制，置信度高达99%。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>实时响应</h3>
                  <p>
                    毫秒级响应处理速度，一键上传人脸照片仅需数百毫秒，支持精度和稳定度要求极高的美妆功能。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>调参灵活</h3>
                  <p>
                    支持通过 API
                    调整细节参数，使面部处理更精细贴切，可根据业务实际使用反馈随时调整。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>使用方便</h3>
                  <p>
                    除了直接调用的 API 接口，还有丰富多样的 SDK
                    供开发者使用，服务接入简单，兼容性强。
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
      {props.id === "portrait" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img
              src={require("../../../assets/img/ability/7.jpg")}
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
                  <Menu.Item key="1">社交娱乐</Menu.Item>
                  <Menu.Item key="2">广告营销</Menu.Item>
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
                        可应用于娱乐社交类App或直播平台，返老还童、性别切换的趣味玩法，引爆社交媒体，提高用户活跃度。
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
                        将人脸各类趣味玩法植入H5、小程序中，可应于品牌广告营销活动宣传，吸引眼球，提升ROI，扩大传播度为品牌引流。
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
                  <h3>精准度高</h3>
                  <p>
                    基于精细标注训练数据实现照片人脸90点定位，提供追踪成功、失败检测机制，置信度高达99%。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>效果自然</h3>
                  <p>
                    保留更多本人面部特征，使人像变换的最终结果更加自然逼真。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>参数灵活</h3>
                  <p>
                    支持通过API调整细节参数，使面部处理更精细贴切，同时支持根据业务实际使用反馈随时调整。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>毫秒级响应</h3>
                  <p>
                    毫秒级响应处理速度，一键上传人脸照片仅需数百毫秒，支持精度和稳定度要求极高的实时人脸变化能力。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>安全可靠</h3>
                  <p>
                    支持内容鉴黄、鉴政、鉴恐，对用户上传图片进行审核，全方位保障业务场景的安全性。
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
                    <i className="recommend-icon abi-1"></i>人脸试妆
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      提供包括试唇色、测肤质、试妆容等多种功能，只需上传图片即可在线试妆，为开发者和企业提供高可用的人脸试妆服务。可应用于社交传播、营销推广等多种场景，满足用户的人脸试妆和人脸娱乐相关需求。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人脸融合
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      通过快速精准地定位人脸关键点，将用户上传的照片与特定形象进行面部层面融合，使生成的图片同时具备用户与特定形象的外貌特征，支持单脸、多脸、选脸融合，满足不同的营销活动需求。
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

export default Effects;
