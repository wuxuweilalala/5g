import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./index.scss";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Banner from "../../components/banner/index";

class industry extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="indu-bg1" id="indu-bg1">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G多媒体内容</h2>
              <img src={require("../../assets/img/industry/icon-1.png")}></img>
            </div>
            <i className="line"></i>
            <ul className="list-ul">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G的高带宽和4K/8K显示的快速发展，将推动超高清视听时代的到来。长视频、短视频、直播、
                      赛事等都会迎来新的变化和发展。
                    </a>
                  </h5>
                  <span className="list-text">
                    多媒体云游戏，更是5G网络和边缘计算等技术的重要应用领域。基于云端渲染，分屏多屏能轻松获得更高端、更低延迟、更高帧率、更高分辨率的游戏体验。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg2" id="indu-bg2">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      虚拟现实（VR）和增强现实（AR）是一种彻底颠覆传统人机交互内容的变革型技术。
                    </a>
                  </h5>
                  <span className="list-text">
                    高质量的VR/AR内容处理走向云端，满足用户日益增长的体验要求的同时降低了设备价格，VR/AR将成为移动网络最具潜力的大流量业务。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G虚拟/增强现实</h2>
              <img src={require("../../assets/img/industry/icon-2.png")}></img>
            </div>
          </div>
        </div>
        <div className="indu-bg3" id="indu-bg3">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G交通出行</h2>
              <img src={require("../../assets/img/industry/icon-3.png")}></img>
            </div>
            <i className="line"></i>
            <ul>
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G网络和边缘计算结合V2X、高精度定位等能力，能为交通出行的智能化赋予关键能力，车联网被认为是5G最大的应用市场之一。
                    </a>
                  </h5>
                  <span className="list-text">
                    在平台层面，结合路侧设备、车载传感器通过5G设备能快速反馈路面信息，为动/静态交通、城市建设、政府管理提供有效的数据支撑。
                    在用户端，通过5G网络可快速传输数据，使用户更好更全面的掌握实时路况信息，自动驾驶更智能。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg4" id="indu-bg4">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G能满足工业海量传感器的接入和控制管理需求，实现大带宽和低时延的网络连接和数据传输，使得工业自动化成为可能。
                    </a>
                  </h5>
                  <span className="list-text">
                    实时高清视频监控、机器视觉与大数据、人工智能的结合，可以在5G环境下，帮助实现更加智能地质量、操作、安全等方面的监控和预警。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G工业互联网</h2>
              <img src={require("../../assets/img/industry/icon-4.png")}></img>
            </div>
          </div>
        </div>
        <div className="indu-bg5" id="indu-bg5">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G生活民生</h2>
              <img src={require("../../assets/img/industry/icon-5.png")}></img>
            </div>
            <i className="line"></i>
            <ul>
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G结合大数据、AI、物联网、机器人、VR\AR以及高清显示技术的快速应用，将升级重构教育、医疗、零售、家居等。
                    </a>
                  </h5>
                  <span className="list-text">
                    智能零售基于5G网络，有望实现全店人、货、场的实时数字化，拓展零售场景的多样性。5G带来的高质量视频传输、通话，使在线互动教育变得触手可及。支持
                    4K/8K 的远程高清会诊和医学影像数据高速传输与实时共
                    享，将远程医疗推动到更深层次。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg6" id="indu-bg6">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G技术让能源生产、传输、储存和安全监控、数据管理，往自动化、智能化方向发展深度融合。
                    </a>
                  </h5>
                  <span className="list-text">
                    无人矿区、智能电站、无人机的联网高清监控，以及能源大数据分析及安全监控，和5G均有很多结合的可能。
                    5G可以实现实时数据的采集和传输，超高清的实时监控，低时延的远程调度和控制，多设备多系统的实时高速互联，网络切片技术和边缘计算能力，更是可以满足智能电网的安全可靠需求，实现管理的自动化和安全性。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G能源管理</h2>
              <img src={require("../../assets/img/industry/icon-6.png")}></img>
            </div>
          </div>
        </div>
        <div className="indu-bg7" id="indu-bg7">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G城市管理</h2>
              <img src={require("../../assets/img/industry/icon-7.png")}></img>
            </div>
            <i className="line"></i>
            <ul className="list-ul">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G可以提升“城市大脑”的神经反馈速度和处理能力，还可以扩展“城市大脑”的条件反射能力，
                      就近智能响应。
                    </a>
                  </h5>
                  <span className="list-text">
                    基于5G网络的机器人互动联防、AI辅助执法等应用投入实战。同时，作为“城市大脑”建设的重要组成部分，智能社区将智能门禁、社区管理、高清摄像头等接入5G网，减少社区基础施工及维护成本，提升运营效率。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg8" id="indu-bg8">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      通信技术的发展，通常会推动交互形式的变化，从文字到语音，再到视频和直播。5G会让交互往更智能化的方向发展。
                    </a>
                  </h5>
                  <span className="list-text">
                    超高清、自由视角、实时三维直播，会让视频和直播的交互形式进入新的阶段。5G与人工智能、虚拟现实、增强现实的结合，会推动虚拟数字人、数字员工、全息对话等，新型人机互动交互模式的进化和普及，全面变革金融、社交、文娱、地产、教育等领域。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G智能交互</h2>
              <img src={require("../../assets/img/industry/icon-8.png")}></img>
            </div>
          </div>
        </div>
        <div className="indu-bg9" id="indu-bg9">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G智能物联</h2>
              <img src={require("../../assets/img/industry/icon-9.png")}></img>
            </div>
            <i className="line"></i>
            <ul>
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      随着5G的技术发展，为物联网设备提供了更多连接可能性，全面的5G部署将以更大的带宽和更少的延迟扩大物联网的功能。
                    </a>
                  </h5>
                  <span className="list-text">
                    目前，物联网连接的应用已在制造业、农业、家居、交通和车联网、医疗健康等多个领域取得显著成果。全球活跃的物联网终端设备数量已超过500亿个，万亿级垂直行业市场正在兴起。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg10" id="indu-bg10">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G优化了实时音视频服务，5G的实时高带宽和低时延的特性，和人工智能的结合，会进一步拓展音视频技术的能力范围。
                    </a>
                  </h5>
                  <span className="list-text">
                    实时通信和互动、音视频直播、图像处理、视频处理和语音处理等技术和服务的升级，会深刻影响视频制作、视频直播、在线教育、视频社交、游戏语音、物联网、家庭陪护等领域。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G音视频技术</h2>
              <img src={require("../../assets/img/industry/icon-10.png")}></img>
            </div>
          </div>
        </div>
        <div className="indu-bg11" id="indu-bg11">
          <div className="industry layout">
            <div className="industry-content">
              <h2>5G未来网络</h2>
              <img src={require("../../assets/img/industry/icon-11.png")}></img>
            </div>
            <i className="line"></i>
            <ul>
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G切片网络和边缘计算为电信业务在广阔纷繁的行业市场开拓出了一片崭新蓝海。
                    </a>
                  </h5>
                  <span className="list-text">
                    边缘计算通过网络切片为行业专网的跨地域覆盖和多样化网络的资源和性能提供了保证，而网络切片正是有了边缘部署计算环境的支撑，才使得网络能力在行业的价值化落地成为可能。二者相互助力、相互补充，为电信网络在
                    5G 的行业生态建设中提供核心能力。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="indu-bg12" id="indu-bg12">
          <div className="industry layout">
            <ul className="induRight">
              <li className="industry-list">
                <i className="icon-icon"></i>
                <div className="industry-list-box">
                  <h5>
                    <a>
                      5G时代，芯片、光学元件、传感器等需求猛增，也带来了一波升级改造的需求。
                    </a>
                  </h5>
                  <span className="list-text">
                    中国的创新正在走向底层和深水区，创新者在通讯芯片、感光芯片、AI芯片、激光雷达等关键元件上都有了新的突破，优秀的国产创新产品，已经开始进入量产阶段。5G通信感光元器件的迭代发展，也直接推动了5G生态相关技术的升级。例如3D感知技术，在纳米光子元件、5G、AI和激光技术的共同推动下，会实现技术和服务升级。
                  </span>
                </div>
              </li>
            </ul>
            <i className="line"></i>
            <div className="industry-content">
              <h2>5G通信感知</h2>
              <img src={require("../../assets/img/industry/icon-12.png")}></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(industry);
