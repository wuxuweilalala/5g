import React, { Component } from "react";
import "./index.scss";
import "swiper/css/swiper.min.css";
import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";

import { Button } from "antd";
import Swiper from "swiper";
export default class ecology extends Component {
  imgList = () => {
    let imgSrcPathArr = [];
    for (let i = 1; i < 46; i++) {
      imgSrcPathArr.push(`/static/media/${i}.jpg`);
    }
    return imgSrcPathArr.map(
      (path, index) => (
        <div className="swiper-slide">
          <div
            data-key={index}
            style={{ backgroundImage: `url(${path})` }}
            className="img-wh"
          >
            {/* <div data-key={index} style={{background: 'url(https://static.gtimg.com/vd/act/ggimg/201608/fb1793b7a8f6b1331111bf8b3fa38d73.png)'}}> */}
            {/* <img src='../../assets/img/fourassis/1.jpg'/> */}
          </div>
        </div>
      )
      // <img src={path} />
    );
  };
  componentDidMount() {
    var mySwiper = new Swiper(".swiper-container", {
      // autoplay: true,//可选选项，自动滑动
      // width: 284,
      height: 365,
      slidesPerView: 4,
      spaceBetween: -48,
      slidesPerGroup: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    // new Swiper('.swiper-container')
    // var mySwiper = document.querySelector('.swiper-container').swiper
    // mySwiper.slideNext();
  }
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="ecology-container">
          <div className="layout clearfix">
            <h1>十二大5G应用</h1>
            <ul className="eco-card">
              <li className="eco-list">
                <i className="econ-icon-1"></i>
                <div className="eco-item">
                  <h3>5G智能交互</h3>
                  <p className="eco-item-text eco-posi animated eco-pad">
                    5G与人工智能、虚拟现实、增强现实的结合，会推动虚拟数字人、数字员工、全息对话等，新型人机互动交互模式的进化和普及，全面变革金融、社交、文娱、地产、教育等领域。
                  </p>
                </div>
              </li>
              <li className="eco-list">
                <i className="econ-icon-2"></i>
                <div className="eco-item">
                  <h3>5G未来网络</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G切片网络和边缘计算为电信业务在广阔纷繁的行业市场开拓出了一片崭新蓝海。
                  </p>
                </div>
              </li>
              <li className="eco-list">
                <i className="econ-icon-3"></i>
                <div className="eco-item">
                  <h3>5G工业互联网</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G将帮助实现更加智能地质量、操作、安全等方面的监控和预警。
                  </p>
                </div>
              </li>
              <span className="eco-line"></span>
              <li className="eco-list">
                <i className="econ-icon-4"></i>
                <div className="eco-item">
                  <h3>5G虚拟/增强现实</h3>
                  <p className="eco-item-text eco-posi animated">
                    虚拟现实（VR）和增强现实（AR）是一种彻底颠覆传统人机交互内容的变革型技术。
                  </p>
                </div>
              </li>
              <li className="eco-list">
                <i className="econ-icon-5"></i>
                <div className="eco-item">
                  <h3>5G音视频技术</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G优化了实时音视频服务，会进一步拓展音视频技术的能力范围。
                  </p>
                </div>
              </li>
              <li className="eco-list no-margin">
                <i className="econ-icon-6"></i>
                <div className="eco-item">
                  <h3>5G多媒体内容</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G的来临，让多媒体可以实现更极速、更丰富的的形式和内容。
                  </p>
                </div>
              </li>
              <span className="eco-line"></span>
              <li className="eco-list">
                <i className="econ-icon-7"></i>
                <div className="eco-item">
                  <h3>5G智能物联</h3>
                  <p className="eco-item-text eco-posi animated">
                    全面的5G部署将以更大的带宽和更少的延迟扩大物联网的功能。
                  </p>
                </div>
              </li>
              <li className="eco-list">
                <i className="econ-icon-8"></i>
                <div className="eco-item">
                  <h3>5G交通出行</h3>
                  <span className="eco-item-text eco-posi animated">
                    5G网络和边缘计算结合V2X、高精度定位等能力，能为交通出行的智能化赋予关键能力。
                  </span>
                </div>
              </li>
              <li className="eco-list no-margin">
                <i className="econ-icon-9"></i>
                <div className="eco-item">
                  <h3>5G生活民生</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G将升级重构教育、医疗、零售、家居等。
                  </p>
                </div>
              </li>
              <span className="eco-line"></span>
              <li className="eco-list">
                <i className="econ-icon-10"></i>
                <div className="eco-item">
                  <h3>5G能源管理</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G可以满足智能电网的安全可靠需求，实现管理的自动化和安全性。
                  </p>
                </div>
              </li>
              <li className="eco-list">
                <i className="econ-icon-11"></i>
                <div className="eco-item">
                  <h3>5G城市管理</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G可以提升“城市大脑”的神经反馈速度和处理能力，还可以扩展“城市大脑”的条件反射能力，就近智能响应。
                  </p>
                </div>
              </li>
              <li className="eco-list no-margin">
                <i className="econ-icon-12"></i>
                <div className="eco-item">
                  <h3>5G通信感知</h3>
                  <p className="eco-item-text eco-posi animated">
                    5G通信感光元器件的迭代发展，也直接推动了5G生态相关技术的升级。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="ecology-assis">
          <div className="layout">
            <h1>5G多重能力</h1>
            <div className="assis-cont">
              <div className="assis-left">
                <a className="ability-item item-1 err-disable" href="javascript:void(0);">
                  <h3>产品能力</h3>
                  <p className="item-text">
                    腾讯7大实验室矩阵核心技术能力和专家支撑
                  </p>
                </a>
                <a className="ability-item item-2 err-disable" href="javascript:void(0);">
                  <h3>渠道资源</h3>
                  <p className="item-text">
                    全球知名通信服务商，终端厂商，腾讯丰富应用与多媒体内容无缝对接
                  </p>
                </a>
              </div>
              <div className="assis-right">
                <a className="ability-item item-3 err-disable" href="javascript:void(0);">
                  <h3>用户流量</h3>
                  <p className="item-text">
                    背靠三大5G中台，提供数据共享、用户增长、增值服务与权益等资源
                  </p>
                </a>
                <a className="ability-item item-4 err-disable" href="javascript:void(0);">
                  <h3>品牌资本</h3>
                  <p className="item-text">
                    合作腾讯投资，免费提供深度5G需求对接+6次闭门私董+N次产品技术对接+1次5G大会品牌全曝光
                  </p>
                </a>
              </div>
              <div className="mk-box">
                <i className="mk-icon icon-1 mk2"></i>
                <i className="mk-icon icon-2 mk2"></i>
                <i className="mk-icon icon-3 mk2"></i>
                <i className="mk-icon icon-4 mk2"></i>
              </div>
              <div className="mk-box-2 ">
                <div className="icon-5 mk4">
                  <i className="mk3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ecology-pro">
          <div className="pro-container layout clearfix">
            <h1>5G创新伙伴</h1>
            {/* <div className="pro-box">
              <i className="pro-icon-left"></i>
              <ul>
                <li className="pro-list">
                  <img src={require("../../assets/img/ecology/1.png")}></img>
                  <span className="pro-list-text">用户流量</span>
                </li>
                <li className="pro-list">
                  <img src={require("../../assets/img/ecology/1.png")}></img>
                  <span className="pro-list-text text-2">用户流量</span>
                </li>
                <li className="pro-list">
                  <img src={require("../../assets/img/ecology/1.png")}></img>
                  <span className="pro-list-text text-3">用户流量</span>
                </li>
                <li className="pro-list">
                  <img src={require("../../assets/img/ecology/1.png")}></img>
                  <span className="pro-list-text text-4">用户流量</span>
                </li>
              </ul>
              <i className="pro-icon-right"></i>
            </div> */}
            {/* <div className="swiper-container">
              <div className="swiper-wrapper pro-box"> */}
            {/* {this.imgList()} */}
            {/* <div class="swiper-slide">
                  <img className="projectKg" src={require("../../assets/img/fourassis/1.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/2.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/3.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/4.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/5.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/6.jpg")}></img>
                </div>
                <div class="swiper-slide">
                  <img src={require("../../assets/img/fourassis/7.jpg")}></img>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
            <div className="frist_project"></div>
          </div>
        </div>
        <div className="ecology-people">
          <div className="layout clearfix">
            <h1>合作伙伴</h1>
            <div className="peo-box">
              <ul>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-1.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-2.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-3.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-4.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-5.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-6.png")}
                    style={{ width: "128px", height: "32px" }}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-7.png")}
                    style={{ width: "110px", height: "32px" }}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-8.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-9.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-10.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/peo-11.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    className="imgWh"
                    src={require("../../assets/img/ecology/ccn.jpg")}
                  ></img>
                </li>
              </ul>
            </div>
            <span className="peo-line"></span>
            <div className="peo-logo">
              <img src={require("../../assets/img/ecology/LOGO.png")}></img>
            </div>
            {/* <div className="peo-box"> */}
            {/* <ul>
                <li className="peo-list">
                  <img src={require("../../assets/img/ecology/QQ.png")}></img>
                </li>
                <li className="peo-list">
                <img
                className="imgWh"
                    src={require("../../assets/img/ecology/tx-game.png")}
                  ></img>
                </li>
                <li className="peo-list"></li>
                <li className="peo-list">
                  <img
                  className="imgWh"
                    src={require("../../assets/img/ecology/tx-contest.png")}
                  ></img>
                </li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/qqMedio.png")}
                  ></img>
                </li>
                <li className="peo-list">
                <img
                  className="imgWh"
                    src={require("../../assets/img/ecology/qmmusic.png")}
                  ></img>
                </li>
                <li className="peo-list">
                <img
                className="imgWh"
                    src={require("../../assets/img/ecology/qqxw.png")}
                  ></img>
                </li>
                <li className="peo-list">
                <img
                className="imgWh"
                    src={require("../../assets/img/ecology/qqspeed.png")}
                  ></img>
                </li>
                <li className="peo-list">
                <img
                className="imgWh"
                    src={require("../../assets/img/ecology/king.jpg")}
                  ></img>
                </li>
                <li className="peo-list"></li>
                <li className="peo-list"></li>
                <li className="peo-list">
                  <img
                    src={require("../../assets/img/ecology/qq-contest.png")}
                  ></img>
                </li>
              </ul> */}
            {/* </div> */}
          </div>
        </div>
        <div className="ecology-signUp">
          <div className="layout clearfix">
            <h1>腾讯5G生态计划，所见即未来</h1>
            <Button type="primary" href="https://wj.qq.com/s2/6282766/8118">
              报名参加
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
