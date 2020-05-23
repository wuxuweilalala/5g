import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

export default class OverViewCapa extends Component {
  render() {
    return (
      <div>
        <Header
          img="http://static.gtimg.com/vd/act/ggimg/202004/1d015fcb65e81334f6c2625800e58376.png"
          Height="77px"
          className="head-cr"
        />
        <div className="overView-capabilities">
          <div className="box-bg1" id="box1">
            <div className="dataCenter layout">
              <div className="dataCenter-title">
                <h2>数据中台</h2>
                <span className="line"></span>
              </div>
              <span className="rightArrow">></span>
              <span className="vertical-line1"></span>
              <div className="dataCenter-container">
                <ul>
                  <li className="container-list list-bg">
                    <Link to="/application/1">
                      <div className="list-box">
                        <i className="container-icon-1"></i>
                        <p className="title-1">企业短信</p>
                      </div>
                    </Link>
                  </li>
                  {/* <li className="container-list list-bg2">
                    <a href="/application/2">
                      <div className="list-box">
                        <i className="container-icon-2"></i>
                        <p className="title-2">ID Mapping</p>
                      </div>
                    </a>
                  </li> */}
                  <li className="container-list list-bg3">
                    <a href="/application/3">
                      <div className="list-box">
                        <i className="container-icon-3"></i>
                        <p className="title-3">携号转网</p>
                      </div>
                    </a>
                  </li>
                  {/* <li className="container-list list-bg4 no-margin">
                    <a href="/application/4">
                      <div className="list-box">
                        <i className="container-icon-4"></i>
                        <p className="title-4">网关取号</p>
                      </div>
                    </a>
                  </li> */}
                  {/* <li className="container-list list-bg6">
                    <a href="/application/5">
                      <div className="list-box">
                        <i className="container-icon-6"></i>
                        <p className="title-6">5G消息</p>
                      </div>
                    </a>
                  </li> */}
                  <li className="container-list list-bg5 err-disable">
                    <div className="list-box">
                      <i className="container-icon-5"></i>
                      <p className="title-5">代收</p>
                    </div>
                  </li>
                  {/* <li className="container-list list-bg7">
                    <a href="/application/7">
                    <div className="list-box">
                      <i className="container-icon-7"></i>
                      <p className="title-7">运营商数据</p>
                    </div>
                    </a>
                  </li> */}
                  {/* <li className="container-list list-bg8 no-margin">
                    <a href="/application/8">
                    <div className="list-box">
                      <i className="container-icon-8"></i>
                      <p className="title-8">腾讯系标签</p>
                    </div>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="box-bg2" id="box2">
            <div className="dataCenter equity layout">
              <div className="dataCenter-title">
                <h2>权益中台</h2>
                <span className="line"></span>
              </div>
              <span className="rightArrow">></span>
              <div className="empty-line">
                <span className="vertical-line"></span>
              </div>
              <div className="dataCenter-container">
                <ul>
                  <li className="container-list list-bg">
                    <a href="application/9">
                    <div className="list-box">
                      <i className="container-icon-1"></i>
                      <p className="title-1">定向流量</p>
                    </div>
                    </a>

                  </li>
                  <li className="container-list list-bg2">
                  <a href="application/10">
                  <div className="list-box">
                      <i className="container-icon-2"></i>
                      <p className="title-2">游戏王卡</p>
                    </div>
                  </a>

                  </li>
                  <li className="container-list list-bg4 no-margin">
                  <a href="application/12">
                  <div className="list-box">
                      <i className="container-icon-4"></i>
                      <p className="title-4">积分兑换</p>
                    </div>
                  </a>

                  </li>
                  <li className="container-list list-bg5">
                  <a href="application/13">
                  <div className="list-box">
                      <i className="container-icon-5"></i>
                      <p className="title-5">话费支付</p>
                    </div>
                  </a>

                  </li>
                  <li className="container-list list-bg3 err-disable">
                    <div className="list-box">
                      <i className="container-icon-3"></i>
                      <p className="title-3">海外流量</p>
                    </div>
                  </li>
                  <li className="container-list list-bg6 err-disable">
                    <div className="list-box">
                      <i className="container-icon-6"></i>
                      <p className="title-6">游戏道具</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-bg3" id="box3">
            <div className="dataCenter application layout">
              <div className="dataCenter-title">
                <h2>应用中台</h2>
                <span className="line"></span>
              </div>
              <span className="rightArrow">></span>
              <span className="vertical-line"></span>
              <div className="dataCenter-container">
                <ul>
                  <li className="container-list list-bg err-disable">
                    <div className="list-box">
                      <i className="container-icon-1"></i>
                      <p className="title-1">云游戏</p>
                    </div>
                  </li>
                  <li className="container-list list-bg2 err-disable">
                    <div className="list-box">
                      <i className="container-icon-2"></i>
                      <p className="title-2">高清显示</p>
                    </div>
                  </li>
                  <li className="container-list list-bg3 err-disable">
                    <div className="list-box">
                      <i className="container-icon-3"></i>
                      <p className="title-3">车路协同</p>
                    </div>
                  </li>
                  <li className="container-list list-bg4 no-margin err-disable">
                    <div className="list-box">
                      <i className="container-icon-4"></i>
                      <p className="title-4">视频</p>
                    </div>
                  </li>
                  <li className="container-list list-bg5 err-disable">
                    <div className="list-box">
                      <i className="container-icon-5"></i>
                      <p className="title-5">电竞</p>
                    </div>
                  </li>
                  <li className="container-list list-bg6 err-disable">
                    <div className="list-box">
                      <i className="container-icon-6"></i>
                      <p className="title-6">直播</p>
                    </div>
                  </li>
                  <li className="container-list list-bg7 err-disable">
                    <div className="list-box">
                      <i className="container-icon-7"></i>
                      <p className="title-7">AR/VR</p>
                    </div>
                  </li>
                  <li className="container-list list-bg8 no-margin err-disable">
                    <div className="list-box">
                      <i className="container-icon-8"></i>
                      <p className="title-7">物联网连接管理能力</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
