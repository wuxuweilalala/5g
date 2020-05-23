import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MapLink from "../../components/mapLink";
import { Route, withRouter } from "react-router-dom";
import "./index.scss";
import { Button } from "antd";


function Home () {
  useEffect(() => {
    var a = document.querySelectorAll(".industryHome-item");
    a.forEach((item) => {
      item.addEventListener("mouseover", function (e) {
        for (const el of item.parentNode.children) {
          el.classList.remove("moveBox");
        }
        item.classList.add("moveBox");
      });
    });
  }, [])
    return (
      <div>
        <Header />
        <Banner />
        <div className="cotainerBox layout">
          <MapLink />
        </div>
        <div className="home">
          <div className="sec sec-capability">
            <div className="layout">
              <div className="secBox">
                <h2 className="sec-tit">5G中台能力</h2>
                <a className="sec-more" href="/overView">
                  查看更多
                </a>
              </div>
              <div className="sec-cont">
                <div className="capability-row">
                  <div className="capability-group ">
                    <div className="capability-group-logo">
                      <i className="capa-1"></i>
                    </div>
                    <div className="capability-group-wrap">
                      <a
                        className="capability-group-wrap__title cap-title animated"
                        href="/overView#box1"
                      >
                        数据中台
                      </a>
                      <p className="capability-group-wrap__content cap-content animated">
                        通过公司运营商中心产品如短信、代收、充值等业务数据优势，打造可持续商业运营能力，赋能公司业务和合作伙伴更多应用场景。
                      </p>
                    </div>
                  </div>
                  <div className="capability-group ">
                    <div className="capability-group-logo animated">
                      <i className="capa-2"></i>
                    </div>
                    <div className="capability-group-wrap">
                      <a
                        className="capability-group-wrap__title cap-title animated"
                        href="/overView#box2"
                      >
                        权益中台
                      </a>
                      <p className="capability-group-wrap__content cap-content animated">
                        通过腾讯网卡、物联网卡、定向流量包、携号转网等产品，搭建运营商、终端品牌、公司业务等与用户的增值服务和权益平台。
                      </p>
                    </div>
                  </div>
                  <div className="capability-group no-margin">
                    <div className="capability-group-logo">
                      <i className="capa-3"></i>
                    </div>
                    <div className="capability-group-wrap">
                      <a
                        className="capability-group-wrap__title cap-title animated"
                        href="/overView#box3"
                      >
                        应用中台
                      </a>
                      <p className="capability-group-wrap__content cap-content animated">
                        依托腾讯5G技术能力，联合运营商、终端品牌、设备厂商等合作伙伴的强大资源，背靠腾讯丰富的内容和应用场景，携手应用开发者，探索新应用、新内容和新场景。
                      </p>
                    </div>
                  </div>
                  {/* <div className="capability-group no-margin">
                  <div className="capability-group-logo">
                    <i className="capa-4"></i>
                  </div>
                  <div className="capability-group-wrap">
                    <p className="capability-group-wrap__title">物联网中台</p>
                    <p className="capability-group-wrap__content">一句话简介</p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="sec sec-resource">
            <div className="layout">
              <div className="secBox">
                <h2 className="sec-tit">5G行业应用</h2>
                <a className="sec-more" href="/industry">
                  查看更多
                </a>
              </div>
              <div className="sec-cont layout">
                <div className="industryHome">
                  {/* <a */}
                  <a
                    className="industryHome-item animated"
                    href="/industry#indu-bg1"
                  >
                    <div className="industryHome-box">
                      <i className="indu indu-1"></i>
                      <h2 className="indu-item-name">5G多媒体内容</h2>
                      <i className="indu-line"></i>
                    </div>
                    <p className="industryHome-content">
                      5G的高带宽和4K/8K显示的快速发展，将推动超高清视听时代的到来。长视频、短视频、直播、赛事等都会迎来新的变化和发展。
                    </p>
                  </a>
                  {/* </div> */}
                  <div className="industryHome-item industryHome-video animated moveBox">
                    {/* <div className="industryHome-item"> */}
                    {/* <div className="outBox"> */}
                    {/* <i className="indu-2"></i>
                      <h2 className="indu-item-name">音视频</h2>
                      <i className="indu-line"></i>
                    </div> */}
                    {/* </div> */}
                    <a href="/industry#indu-bg10">
                      <div className="induItem2">
                        <div className="industryHome-box">
                          <i className="indu indu-2"></i>
                          <h1 className="indu-item-name indu-item-margin">
                            5G音视频技术
                          </h1>
                          <i className="indu-line"></i>
                        </div>
                        <p className="industryHome-content">
                          5G优化了实时音视频服务，5G的实时高带宽和低时延的特性，和人工智能的结合，会进一步拓展音视频技术的能力范围，深刻影响视频制作、视频直播、在线教育、视频社交、游戏语音、物联网、家庭陪护等领域。
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="industryHome-item animated">
                    <a href="/industry#indu-bg5">
                      <div className="industryHome-box">
                        <i className="indu indu-3"></i>
                        <h2 className="indu-item-name">5G生活民生</h2>
                        <i className="indu-line"></i>
                      </div>
                      <p className="industryHome-content">
                        5G将升级重构教育、医疗、零售、家居等。基于5G网络的超清视频有各种应用场景，包括远程超清直播、远程安防监控、远程超清医疗、商业性远程现场实时展示及街景采集等。
                      </p>
                    </a>
                  </div>
                  <div className="industryHome-item animated">
                    <a href="/industry#indu-bg3">
                      <div className="industryHome-box">
                        <i className="indu indu-4"></i>
                        <h2 className="indu-item-name">5G交通出行</h2>
                        <i className="indu-line"></i>
                      </div>
                      <p className="industryHome-content">
                        5G网络和边缘计算结合V2X、高精度定位等能力，能为交通出行的智能化赋予关键能力，为用户更好更全面的掌握实时路况信息，自动驾驶更智能。
                      </p>
                    </a>
                  </div>
                  <div className="industryHome-item animated">
                    <a href="/industry#indu-bg4">
                      <div className="industryHome-box">
                        <i className="indu indu-5"></i>
                        <h2 className="indu-item-name">5G工业互联网</h2>
                        <i className="indu-line"></i>
                      </div>
                      <p className="industryHome-content">
                        5G能满足工业海量传感器的接入和控制管理需求，实现大带宽和低时延的网络连接和数据传输，使得工业自动化成为可能。
                      </p>
                    </a>
                  </div>
                  <div className="industryHome-item animated no-margin">
                    <a href="/industry#indu-bg2">
                      <div className="industryHome-box">
                        <i className="indu indu-6"></i>
                        <h2 className="indu-item-name" style={{width: '120px'}}>5G虚拟/增强现实</h2>
                        <i className="indu-line"></i>
                      </div>
                      <p className="industryHome-content  animated">
                        虚拟现实（VR）和增强现实（AR）是一种彻底颠覆传统人机交互内容的变革型技术。高质量的VR/AR内容处理走向云端，满足用户日益增长的体验要求的同时降低了设备价格，VR/AR将成为5G网络最具潜力的大流量业务。
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
          > */}
          <div className="skill jmod-aiclassName">
            <div className="layout clearfix">
              <h1>5G技术能力</h1>
              <ul className="skill-ul">
                <li className="skill-card skill-bg-4">
                  <div className="skill-content">
                    <h5 className="animated">Tencent AI Lab</h5>
                    <p className="txtFlow animated txt146">
                      腾讯企业级人工智能实验室，于2016年4月在深圳成立，目前在中国和美国有70位世界级研究科学家及300余位经验丰富的应用工程师致力于不断提升AI的理解、决策与创造力，向“
                      Make Al Everywhere”的愿景迈进。
                    </p>
                  </div>
                </li>
                <li className="skill-card skill-bg-2">
                  <div className="skill-content">
                    <h5 className="animated">腾讯多媒体实验室</h5>
                    <p className="txtFlow animated">
                      腾讯旗下顶尖的音视频通信和处理研发团队，专注于实时音视频通信、音视编解码前沿算法研究、音视频国际标准、计算机视觉图像处理、端到端音视频质量评测。在实时音视频通信和处理技术、音视频国际标准等领域积累了完整的解决方案和领先的技术水平。
                    </p>
                  </div>
                </li>
                <li className="skill-card no-marin skill-bg-5">
                  <div className="skill-content">
                    <h5 className="animated">Tencent Robotics X</h5>
                    <p className="txtFlow animated txt357">
                      腾讯设立的机器人研发实验室( Robotics X)。Robotics X和 AI
                      Lab将会成为腾讯AI产业的双基础支撑部门，进一步探索虚拟世界与真实世界的连接。
                    </p>
                  </div>
                </li>
                <li className="skill-card skill-bg-1">
                  <div className="skill-content">
                    <h5 className="animated">腾讯未来网络实验室</h5>
                    <p className="txtFlow animated txt146">
                      腾讯未来网络实验室是中国互联网公司第一支5G技术和应用研究团队，以打造中国互联网界Top网络技术团队为愿景，发挥腾讯应用服务优势，通过能力输出，实现应用驱动5G网络演进的目标。
                    </p>
                  </div>
                </li>
                <li className="skill-card skill-bg-6">
                  <div className="skill-content">
                    <h5 className="animated">腾讯网络平台部</h5>
                    <p className="txtFlow animated txt357">
                      负责腾讯基础网络、云网络、无线与物联oT网络、4G/5G移动网络能力、卫星网络能力的规划设计、产品研发与创新、建设及运营相关工作。
                    </p>
                  </div>
                </li>
                <li key="amache" className="skill-card no-marin skill-bg-3">
                  <div className="skill-content">
                    <h5 className="animated">腾讯START</h5>
                    <p className="txtFlow animated txt146">
                      让好玩触手可及，降低用户玩游戏的门槛，把好游戏带给更多的用户。结合腾讯与英伟达双方优势，共同打造腾讯
                      START云游戏平台和构建未来超大型游戏渲染集群系统，给玩家带来更好的游戏体验。
                    </p>
                  </div>
                </li>
                <li className="skill-card skill-bg-7">
                  <div className="skill-content">
                    <h5 className="animated">云架构平台部</h5>
                    <p className="txtFlow animated txt357">
                      作为技术工程事业群的核心部门，在整个公司业务中发挥着水和电一般不可或缺的重要作用，肩负着当今互联网时代发展最前端的海量信息存储与接入（云服务）的艰巨任务。
                    </p>
                  </div>
                </li>
                <li className="skill-card skill-bg-8">
                  <div className="skill-content">
                    <h5>更多能力正在接入</h5>
                  </div>
                </li>
                <li className="skill-card">
                  <div className="skill-content"></div>
                </li>
              </ul>
            </div>
          </div>
          {/* </ReactCSSTransitionGroup> */}

          <div className="Access">
            <div className="layout clearfix">
              <h1>接入5G中台</h1>
              <ul className="Access-ul">
                <li className="Access-col">
                  <p className="Access-number-1">1</p>
                  <div className="Access-col">
                    <i className="Access-col-1"></i>
                  </div>
                  <div className='Access-content'>
                    <h2>第一步</h2>
                    <h2 className="contentColor">递交资料</h2>
                  </div>
                </li>
                <div className="Access-sjx">
                  <i></i>
                </div>
                <li className="Access-col">
                  <p className="Access-number-2">2</p>
                  <div className="Access-col">
                    <i className="Access-col-2"></i>
                  </div>
                  <div className='Access-content'>
                    <h2>第二步</h2>
                    <h2 className="contentColor">签属协议</h2>
                  </div>
                </li>
                <div className="Access-sjx">
                  <i></i>
                </div>
                <li className="Access-col">
                  <p className="Access-number-3">3</p>
                  <div className="Access-col">
                    <i className="Access-col-3"></i>
                  </div>
                  <div className='Access-content'>
                    <h2>第三步</h2>
                    <h2 className="contentColor">绑定场景</h2>
                  </div>
                </li>
              </ul>
              <Button type="primary" href="/login">
                立即提交资料，接入5G中台
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
export default withRouter(Home);
