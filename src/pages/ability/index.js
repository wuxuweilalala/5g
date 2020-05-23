import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MapLink from "../../components/mapLink";
import Effects from "./effects";
import Signimage from "./signimage";
import Cardocr from "./ocr";
import { Menu } from "antd";

function Ability(props) {
  let { id } = useParams();
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div>
      {id === "hr" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img src={require("../../assets/img/ability/1.jpg")}></img>
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
                  <Menu.Item key="1">商业</Menu.Item>
                  <Menu.Item key="2">安防</Menu.Item>
                  <Menu.Item key="3">娱乐</Menu.Item>
                </Menu>
              </div>
              <div className="scene-container">
                {+current === 1 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      <h5>
                        VIP客户管理<i className="icon-file"></i>
                      </h5>
                      <p>
                        通过人脸搜索技术，可以识别图像中的人的身份，从而给予足够的关注和重视，提升用户体验。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 2 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      <h5>
                        门禁系统<i className="icon-file"></i>
                      </h5>
                      <p>
                        在小区、学校、企业等场所可以通过人脸识别辨识进入者身份。安全等级较高的地点也可以使用人脸识别门禁，未登记人员访问将触发报警。
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {+current === 3 ? (
                  <div className="scene-container-top">
                    <div className="top-box">
                      <h5>
                        相册分类<i className="icon-file"></i>
                      </h5>
                      <p>
                        通过人脸检测与人脸搜索，可以聚合相册中的相似的人脸，轻松将照片按人脸进行智能分类。
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
                    <li className="demo-list-item item-1"></li>
                    <li className="demo-list-item item-2"></li>
                    <li className="demo-list-item item-3"></li>
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
                  <h3>精准识别</h3>
                  <p>
                    在多个国际公开竞赛中刷新纪录，人脸比对在2017年的LFW测评准确度高达99.80%，人脸搜索在MegaFace竞赛百万规模中首选识别率83.29%排名第一，识别准确率业界领先。 
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>算法领先</h3>
                  <p>
                    基于第三代腾讯优图祖母模型，融合度量学习、迁移学习、多任务学习等多种训练手段来优化模型；针对不同场景业务的特点，定制化fine-tuning或distilling模型，满足业务性能与时延的双重需求。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>稳定可靠</h3>
                  <p>
                    已经通过腾讯内部产品海量用户和复杂场景验证，运行稳定、鲁棒性强，服务可用性超过99.9%。
                  </p>
                </li>
                <li className="advan-item item-4">
                  <h3>实时响应</h3>
                  <p>
                    人脸识别具备高并发、高吞吐、低时延等特点，即使是百万规模人脸搜索，仍只需数百毫秒即可处理完毕。
                  </p>
                </li>
                <li className="advan-item item-5">
                  <h3>简单易用</h3>
                  <p>
                    提供丰富多样的在线API和离线识别SDK，不仅支持接入云端使用，也支持将离线识别SDK植入应用和硬件设备中，根据需要结合使用离线识别SDK和在线API形成端+云方案，满足不同场景的需求。
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
                    <i className="recommend-icon abi-1"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      是一组对用户身份信息真实性进行验证审核的服务套件，提供各类认证功能模块，包含证件OCR识别、活体检测、人脸1:1对比等能力，以解决行业内大量对用户身份信息核实的需求，广泛应用于公安、人社、金融保险等领域。  
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人脸支付
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      基于优图自研的反光活体技术和3D结构光活体检测技术，利用人的相貌特征完成身份认证，在支付阶段通过“扫脸”来取代传统密码，无需用户完成指定动作配合，可拦截照片、面具、视频等攻击手段。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>换脸甄别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      基于图像算法和视觉 AI
                      技术，实现了对视频中的人脸真伪进行高效快速的检测和分析，鉴别视频、图片中的人脸是否为AI换脸算法所生成的假脸。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {id === "facenucleus" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img src={require("../../assets/img/ability/2.jpg")}></img>
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
                  <Menu.Item key="1">政务民生</Menu.Item>
                  <Menu.Item key="2">金融行业</Menu.Item>
                  <Menu.Item key="3">通信运营商</Menu.Item>
                  <Menu.Item key="4">场所实名登记</Menu.Item>
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
                        为响应国家提出让群众企业办事“网购”一样方便，各委办局都陆续开展了线上业务办理服务，用户打开各委办局的公众号或小程序，调用人脸核身进行实名注册，验证通过后可以预约办理各项业务。
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
                        为方便用户办理业务，许多银行提供远程开户服务，在各大银行的公众号或APP中，点击远程开户服务，填写身份信息，调用人脸核身服务进行实名认证，验证通过即可申请账户。
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
                        根据实名制要求，用户办理运营商业务时必须实名，运营商为方便用户办理业务开通网上业务，用户在运营商的APP或者公众号上，使用人脸核身提供的服务进行实名认证，认证通过后，可以在网上自助办理手机业务。
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
                        场所实名登记<i className="icon-file"></i>
                      </h5> */}
                      <p>
                        根据实名制要求，出入网吧需要进行身份登记，网吧在前台系统中调用人脸核身服务，用户上网时，需要在前台进行实名认证，认证通过登记身份后，即可进行网吧上网。
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
                    <li className="demo-list-item item-4"></li>
                    <li className="demo-list-item item-5"></li>
                    <li className="demo-list-item item-6"></li>
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
                  <h3>算法领先</h3>
                  <p>
                    算法在多个国际公开竞赛中刷新纪录，人脸比对在2017年的LFW测评准确度高达99.80%，识别准确率业界领先。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>服务灵活</h3>
                  <p>
                    支持混合、公有部署模式，可根据行业特性和业务要求使用不同的部署模式，产品功能也可根据需求灵活组合。 
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>接入全面</h3>
                  <p>
                    提供微信H5、小程序、sdk等多种SaaS化服务，以及API接口，满足客户在不同场景实名认证需求。
                  </p>
                </li>
                <li className="advan-item item-4">
                  <h3>安全可靠</h3>
                  <p>
                    活体检测可抵挡照片、视频、静态3D模型的攻击，并结合腾讯多年安全积累和大数据安全技术能力，提供可靠的安全保障。
                  </p>
                </li>
                <li className="advan-item item-5">
                  <h3>配套完善</h3>
                  <p>
                    除了提供人脸核身基础的检测和识别服务，还提供了数据统计、验证记录查询、人工审核等增值服务，方便客户及时响应验证中问题，形成服务闭环。 
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
                    <i className="recommend-icon abi-1"></i>人脸识别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      基于强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人脸支付
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      基于优图自研的反光活体技术和3D结构光活体检测技术，利用人的相貌特征完成身份认证，在支付阶段通过“扫脸”来取代传统密码，无需用户完成指定动作配合，可拦截照片、面具、视频等攻击手段。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>换脸甄别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      基于图像算法和视觉 AI
                      技术，实现了对视频中的人脸真伪进行高效快速的检测和分析，鉴别视频、图片中的人脸是否为AI换脸算法所生成的假脸。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {id === "facepayment" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img src={require("../../assets/img/ability/3.jpg")}></img>
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
                  <Menu.Item key="1">自助终端支付</Menu.Item>
                  <Menu.Item key="2">移动终端支付</Menu.Item>
                  <Menu.Item key="3">无人零售商店</Menu.Item>
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
                        在配置了自助终端的商店及餐厅，用户选购商品并进行刷脸支付，宽松自如的全流程自助选购环境，提升了用户体验，同时也帮助节约了商家的人力开支。
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
                        用户只需预装应用在手机、平板等移动终端上，或使用其他 API
                        接口，即可扫码进行人脸支付，实现轻松买单。移动终端支付适用于丰富多样的场景，商家可根据自己的需要进行配置。
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
                        在无人零售商店的买单流程中增加人脸支付渠道，客户刷脸即可完成支付，节约了排队结账的时间，大幅提升用户体验。对商家来说，设备成本低、接入方便，人力成本。
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
                    <li className="demo-list-item item-1"></li>
                    <li className="demo-list-item item-8"></li>
                    <li className="demo-list-item item-9"></li>
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
                  <h3>识别精准</h3>
                  <p>
                    基于人脸识别算法，在支付场景保证极低误识率（FAR）的情况下，一次识别通过率在99%以上。持续不断进行算法优化，可以通过不断的训练使识别变得更智能。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>极速高效</h3>
                  <p>
                    支持海量人脸的存储与检索，算法一流，整体识别流程耗时小于1s，节约支付环节的等待时间
                    。支持针对不同门店或区域，建立高频人脸库，减少用户二次确认概率，有效提升识别效率。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>安全可靠</h3>
                  <p>
                    在进行人脸注册时，采用独有专利的反光活体技术，防攻击的同时无需用户配合。人脸识别时，自研硬件搭载3D结构光活体检测技术，可拦截照片、面具、视频等攻击手段，安全可靠。
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
                    <i className="recommend-icon abi-1"></i>人脸识别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      基于强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      是一组对用户身份信息真实性进行验证审核的服务套件，提供各类认证功能模块，包含证件
                      OCR
                      识别、活体检测、人脸1:1对比等能力，以解决行业内大量对用户身份信息核实的需求，广泛应用于公安、人社、金融保险等领域。  
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>换脸甄别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-3.png")}
                      className="icon-3"
                    ></img>
                    <p>
                      基于图像算法和视觉
                      AI技术，实现了对视频中的人脸真伪进行高效快速的检测和分析，鉴别视频、图片中的人脸是否为AI换脸算法所生成的假脸。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {id === "facechange" ? (
        <div className="ability ability-box">
          <Header />
          <div className="banner">
            <img src={require("../../assets/img/ability/4.jpg")}></img>
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
                  <Menu.Item key="1">打击色情等黑产</Menu.Item>
                  <Menu.Item key="2">打击网络假视频传播</Menu.Item>
                  <Menu.Item key="3">打击网络诈骗</Menu.Item>
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
                        换脸甄别可以识别伪造视频，减少伪造视频人脸色情内容传播。
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
                        换脸甄别可以识别网络视频中的伪造视频人脸，杜绝造假，还原事实真相。
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
                  <h3>反制AI技术滥用</h3>
                  <p>
                    换脸甄别基于图像算法和AI技术，提供对视频图像中的人脸进行全面分析的服务，利用AI技术反制换脸这类AI技术的滥用，保护用户权益。
                  </p>
                </li>
                <li className="advan-item item-2">
                  <h3>检测流程结构化</h3>
                  <p>
                    换脸甄别包含三个不同阶段的检测，根据视频图像中像素、纹理级别的低阶特征，到具有全局语义信息的高阶特征，对图像、视频进行多方位、多层次的分析，覆盖多种AI换脸算法，极大程度上提升了检测准确率。
                  </p>
                </li>
                <li className="advan-item item-3">
                  <h3>准确率高</h3>
                  <p>
                    换脸甄别结合腾讯多年安全积累和大数据安全技术能力，目前对AI换脸攻击识别准确率达99%以上。
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
                    <i className="recommend-icon abi-1"></i>人脸识别
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-1.png")}
                      className="icon-1"
                    ></img>
                    <p>
                      基于强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-2"></i>人脸支付
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-2.png")}
                      className="icon-2"
                    ></img>
                    <p>
                      基于自研的反光活体技术和3D结构光活体检测技术，利用人的相貌特征完成身份认证，在支付阶段通过“扫脸”来取代传统密码，无需用户完成指定动作配合，可拦截照片、面具、视频等攻击手段。 
                    </p>
                  </div>
                </li>
                <li className="recommend-list">
                  <h3>
                    <i className="recommend-icon abi-3"></i>人脸核身
                  </h3>
                  <div className="recommend-list-box">
                    <img
                      src={require("../../assets/img/ability/icon-3.png")}
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
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
      {id === "facefusion" ? <Effects id={id} /> : ""}
      {id === "facetest" ? <Effects id={id} /> : ""}
      {id === "portrait" ? <Effects id={id} /> : ""}
      {id === "gesture" ? <Signimage id={id} /> : ""}
      {id === "imganalysis" ? <Signimage id={id} /> : ""}
      {id === "wordsocr" ? <Cardocr id={id} /> : ""}
      {id === "idocr" ? <Cardocr id={id} /> : ""}
      {id === "carocr" ? <Cardocr id={id} /> : ""}
    </div>
  );
}
export default Ability;
